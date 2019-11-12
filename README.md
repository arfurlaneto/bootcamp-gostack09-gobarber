# bootcamp-gostack-gobarber
Aplicação desenvolvida durante o Bootcamp GoStack da Rocketseat

## back-end
- `docker run --name postgresbarber -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d -t postgres:11`
- `docker run --name mongobarber -p 27017:27017 -d -t mongo`
- `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`
- criar arquivo .env
- `yarn` to install dependencies
- `yarn sequelize db:migrate`
- `yarn run dev`
- `yarn run queue`

## front-end
- `yarn` to install dependencies
- `yarn start`
