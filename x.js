pnpm run docker:dev

> web-server@1.0.0 docker:dev /home/imonikhea/Documents/docker/docker express
> docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

[+] Building 0.1s (11/11) FINISHED                                                                                                                                                                  docker:default
 => [node-app internal] load build definition from Dockerfile                                                                                                                                                 0.0s
 => => transferring dockerfile: 458B                                                                                                                                                                          0.0s
 => WARN: FromAsCasing: 'As' and 'FROM' keywords' casing do not match (line 1)                                                                                                                                0.0s
 => WARN: FromAsCasing: 'As' and 'FROM' keywords' casing do not match (line 4)                                                                                                                                0.0s
 => [node-app internal] load metadata for docker.io/library/node:alpine                                                                                                                                       0.0s
 => [node-app internal] load .dockerignore                                                                                                                                                                    0.0s
 => => transferring context: 138B                                                                                                                                                                             0.0s
 => [node-app base 1/2] FROM docker.io/library/node:alpine                                                                                                                                                    0.0s
 => [node-app internal] load build context                                                                                                                                                                    0.0s
 => => transferring context: 288B                                                                                                                                                                             0.0s
 => CACHED [node-app base 2/2] WORKDIR /app                                                                                                                                                                   0.0s
 => CACHED [node-app deps 1/2] COPY package*.json ./                                                                                                                                                          0.0s
 => CACHED [node-app deps 2/2] RUN npm install                                                                                                                                                                0.0s
 => CACHED [node-app dev 1/2] RUN npm install -g nodemon                                                                                                                                                      0.0s
 => CACHED [node-app dev 2/2] COPY . .                                                                                                                                                                        0.0s
 => [node-app] exporting to image                                                                                                                                                                             0.0s
 => => exporting layers                                                                                                                                                                                       0.0s
 => => writing image sha256:00f3cd95fa9892dd52fbffc734fdda24f8979d882cc12b7defb68c23ffded010                                                                                                                  0.0s
 => => naming to docker.io/library/dockerexpress-node-app                                                                                                                                                     0.0s
[+] Running 2/2
 ✔ Network dockerexpress_default  Created                                                                                                                                                                     0.1s 
 ✔ Container node-app             Started                                                                                                                                                                     0.1s 
imonikhea@imonikhea-ThinkPad-X1-Carbon-6th:~/Documents/docker/docker express$ pnpm run docker:down

> web-server@1.0.0 docker:down /home/imonikhea/Documents/docker/docker express
> docker compose down

[+] Running 2/2
 ✔ Container node-app             Removed                                                                                                                                                                     0.3s 
 ✔ Network dockerexpress_default  Removed                                                                                                                                                                     0.2s 
imonikhea@imonikhea-ThinkPad-X1-Carbon-6th:~/Documents/docker/docker express$ docker volume ls
DRIVER    VOLUME NAME
local     0abe18b2e7f8f7b64bd9e8c2165aff2433ccc2f11268830a276ea683a387b09d
local     1ec76fe1edf97223dbc32ac1c5644e01c0f29dcf7141fe48462308261b734f83
local     31cdbda2e6f3f5828d1ca3e8e5c97e20f7fb6306ec7ff39622b888e23ec092aa
local     4539319eb28bc9099669aee3e7620f9e4e0bb138b258fde19dd9c5a53722eec0
local     b36a82ce4b66314e04a42ecf0114a15062e7d17d8452c17e874d0205c9336316
local     e23eb3e0e3cbf8773b29b087bba810c9c43611b996b8465ffd015e9fc9258a36
local     rmftalents-be_db_data
local     rmftalents-be_rmf_pgdata
imonikhea@imonikhea-ThinkPad-X1-Carbon-6th:~/Documents/docker/docker express$ pnpm run docker:prod

> web-server@1.0.0 docker:prod /home/imonikhea/Documents/docker/docker express
> docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

[+] Building 0.4s (10/10) FINISHED                                                                                                                                                                  docker:default
 => [node-app internal] load build definition from Dockerfile                                                                                                                                                 0.0s
 => => transferring dockerfile: 458B                                                                                                                                                                          0.0s
 => WARN: FromAsCasing: 'As' and 'FROM' keywords' casing do not match (line 1)                                                                                                                                0.0s
 => WARN: FromAsCasing: 'As' and 'FROM' keywords' casing do not match (line 4)                                                                                                                                0.0s
 => [node-app internal] load metadata for docker.io/library/node:alpine                                                                                                                                       0.0s
 => [node-app internal] load .dockerignore                                                                                                                                                                    0.0s
 => => transferring context: 138B                                                                                                                                                                             0.0s
 => [node-app base 1/2] FROM docker.io/library/node:alpine                                                                                                                                                    0.0s
 => [node-app internal] load build context                                                                                                                                                                    0.0s
 => => transferring context: 935B                                                                                                                                                                             0.0s
 => CACHED [node-app base 2/2] WORKDIR /app                                                                                                                                                                   0.0s
 => CACHED [node-app deps 1/2] COPY package*.json ./                                                                                                                                                          0.0s
 => CACHED [node-app deps 2/2] RUN npm install                                                                                                                                                                0.0s
 => [node-app prod 1/2] COPY . .                                                                                                                                                                              0.0s
 => ERROR [node-app prod 2/2] RUN npm run build                                                                                                                                                               0.3s
------                                                                                                                                                                                                             
 > [node-app prod 2/2] RUN npm run build:                                                                                                                                                                          
0.309 npm error Missing script: "build"                                                                                                                                                                            
0.309 npm error                                                                                                                                                                                                    
0.309 npm error To see a list of scripts, run:
0.309 npm error   npm run
0.311 npm error A complete log of this run can be found in: /root/.npm/_logs/2025-09-16T19_19_32_365Z-debug-0.log
------
failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
 ELIFECYCLE  Command failed with exit code 17.
imonikhea@imonikhea-ThinkPad-X1-Carbon-6th:~/Documents/docker/docker express$ 


version: "3.8"

services:
  node-app:
    build:
      context: .
      dockerfile: Dockerfile
      target: prod
    command: ["node", "dist/index.js"]
    environment:
      NODE_ENV: production


version: "3.8"

services:
  node-app:
    container_name: node-app
    build:
      context: .
      target: dev
      dockerfile: Dockerfile
    env_file:
      - .env
    environment:
      PORT: ${PORT}
    ports:
      - "${PORT}:${PORT}"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:${PORT}/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
    restart: unless-stopped


version: "3.8"

services:
  node-app:
    build:
      context: .
      dockerfile: Dockerfile
      target: dev
    command: ["npm", "run", "dev"]
    environment:
      NODE_ENV: development
    volumes:
      - ./:/app
      - /app/node_modules



FROM node:alpine As base
WORKDIR /app

FROM base As deps
COPY package*.json ./
# RUN npm ci 
RUN npm install


FROM deps AS dev
RUN npm install -g nodemon
COPY . .
ENV NODE_ENV=development
ENV PORT=3000
EXPOSE $PORT
CMD ["npm", "run", "dev"]

FROM deps AS prod
COPY . .
RUN npm run build
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE $PORT
CMD ["node", "index.js"]

# CMD ["node", "index.js"]
# CMD ["npm","run", "dev"]