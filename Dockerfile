ARG NODE_VERSION=lts-alpine3.12

FROM node:${NODE_VERSION}

ENV STRAPI_CDN_PREFIX=/magazine

EXPOSE 3000

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

COPY ./src .

RUN yarn && yarn build && yarn disable:telemetry

COPY ./entrypoint.sh /usr/local/bin/

ENTRYPOINT ["entrypoint.sh"]

CMD ["yarn", "start"]