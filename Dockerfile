ARG NODE_VERSION=lts-alpine3.12

FROM node:${NODE_VERSION}

EXPOSE 3000

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

COPY ./src .

RUN yarn && yarn build && yarn disable:telemetry

COPY ./entrypoint.sh /usr/local/bin/

RUN apk update && apk add -q dos2unix

RUN dos2unix /usr/local/bin/entrypoint.sh && apk del dos2unix

ENTRYPOINT ["entrypoint.sh"]

CMD ["yarn", "start"]