FROM node:lts-alpine
RUN npm i pm2@latest -g

ENV PM2_HOME=/tmp \
  PM2_USER=apprunner \
  PM2_USER_UID=4000

WORKDIR /app/www

RUN adduser -HD --gecos "" -s /sbin/nologin --uid $PM2_USER_UID $PM2_USER

COPY --chown=$PM2_USER:$PM2_USER ./ /app/www

USER $PM2_USER

CMD pm2-runtime $APP_PATH --name $APP_NAME --instances $APP_WORKERS -o /dev/stdout -e /dev/stderr --uid $PM2_USER --gid $PM2_USER
