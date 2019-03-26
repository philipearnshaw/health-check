# ---- Base image ----
FROM node:10.15.3-alpine AS base
WORKDIR /app
ENV NPM_CONFIG_LOGLEVEL warn
COPY package*.json ./
RUN npm install --only=production
#
#
# ---- Test ----
FROM base AS test
RUN npm install
COPY src src
COPY __tests__ __tests__
COPY .eslintrc.json .
RUN npx eslint src && npm test
#
#
# ---- Production ----
FROM base AS production
COPY src src
EXPOSE 80
CMD ["npm", "start"]