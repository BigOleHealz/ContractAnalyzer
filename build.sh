#!/bin/bash

# Stop all running containers
docker stop $(docker ps -aq)

pnpm install --save-dev jest ts-jest @types/jest

# Remove all containers
docker rm $(docker ps -aq)

# Remove all images
docker rmi $(docker images -q)

pnpm run init
