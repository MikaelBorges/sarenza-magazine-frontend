ARG NODE_VERSION=12

FROM node:${NODE_VERSION}

EXPOSE 3000

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

COPY ./src .

RUN yarn && yarn build

CMD ["yarn", "start"]