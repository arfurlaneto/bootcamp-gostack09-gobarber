# GoBarber
A barber appointment app developed at Rocketseat's GoStack Bootcamp.
![Screenshot](/.github/general_01.png)

# Main Technologies
- Databases: Postgres (transactional data); MongoDB (notifications history); Redis (mail queue)
- Back-end: Node JS; Expresss
- Front-end: React JS
- Mobile: React Native; Redux

# How To Run

## back-end
You will need Postgres, Mongo and Redis instances. You can setup them all with docker:
```
docker run --name postgresbarber -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d -t postgres:11
docker run --name mongobarber -p 27017:27017 -d -t mongo
docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
```
Open `backend` folder and create a `.env`file. You can use `.env.example` as an example.
Edit it and add the configuration for your postgres, mongo and redis instances.
You will need some SMTP configurations as well, for tests, you can use https://mailtrap.io/.
If you want to use sentry (https://sentry.io/), set the SENTRY_DNS too.

Install the dependencies and run the database migrations:
```
yarn
yarn sequelize db:migrate
```
Start the back-end:
```
 yarn run dev
```
Start the mail queue:
```
 yarn run queue
```
Back-end will be running at port 3333. You can call it directly with Insomnia (`insomnia.json` at repository root).

## front-end
Open `frontend`folder and edit `src/services/api.js`. Change the axios `baseURL`, if you need.

Install dependencies and run it:
```
yarn
yarn start
```
Front-end will be running at port 3000.

## mobile
This project was developed on Windows. Some of the iOS specific configurations were not applied.
Before running the project, start an emulator or connect a device to your computer.

Open `mobile` folder and edit `src/services/api.js`. Change the axios `baseURL`, if you need.

Install the dependencies:
```
yarn
```
The first time you run it:
```
yarn run android
```
The subsequent times:
```
yarn run start
 ```
 
# More Screenshots
<p align="center">
<img src="/.github/mobile_01.png" width="300">
<img src="/.github/mobile_04.png" width="300">
<img src="/.github/mobile_05.png" width="300">
<img src="/.github/mobile_06.png" width="300">
<img src="/.github/web_03.png" width="600">
</p>
