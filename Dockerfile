FROM node:alpine As base
WORKDIR /app

FROM base As deps
COPY package*.json ./
# RUN npm ci 
RUN npm install

ARG NODE_ENV=production
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm ci --only=production; \
    else npm install; \
    fi

FROM deps AS dev
RUN npm install -g nodemon
COPY . .
ENV NODE_ENV=development
ENV PORT=3000
EXPOSE $PORT
CMD ["npm", "run", "dev"]

FROM deps AS prod
COPY . .
# RUN npm run build
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE $PORT
CMD ["node", "index.js"]

# CMD ["node", "index.js"]
# CMD ["npm","run", "dev"]
