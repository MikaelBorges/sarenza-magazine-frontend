ARG NODE_VERSION=lts-alpine3.12

FROM node:${NODE_VERSION} AS builder

EXPOSE 3000

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

COPY ./src .

ENV NODE_ENV=production

RUN yarn install --production --frozen-lockfile && yarn build && yarn disable:telemetry

COPY ./entrypoint.sh /usr/local/bin/

RUN apk update && apk add -q dos2unix

RUN dos2unix /usr/local/bin/entrypoint.sh && apk del dos2unix

RUN chmod +x /usr/local/bin/entrypoint.sh

FROM node:${NODE_VERSION} AS runner

COPY --from=builder /srv/app /srv/app
COPY --from=builder /usr/local/bin/entrypoint.sh /usr/local/bin/entrypoint.sh

WORKDIR /srv/app

ENTRYPOINT ["entrypoint.sh"]

CMD ["yarn", "start"]