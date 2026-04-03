# m6-w1-d1-homework

Module 6 Week 1 Day 1 and Day 2 homework for the React/Node/MongoDB CRUD assignment.

## Completed scope

- Task 1: Imported `inventories.json` into MongoDB database `react-crud`, collection `inventories`
- Task 2A: Built the backend in `node-mongo`
- Task 2B: Built the frontend in `react-app`

## Run the app

```powershell
cd .\node-mongo
npm install
npm start
```

Open a second terminal and run:

```powershell
cd .\react-app
npm install
npm start
```

## URLs

- Backend API: `http://localhost:8080/api/inventories`
- Frontend app: `http://localhost:3000`

## Notes

- `.env` is intentionally included for this assignment because it only contains the local MongoDB connection URL and database name required by the app
- Anyone cloning the repo still needs MongoDB running locally on port `27017`
- The frontend manages inventory items through the Day 1 backend routes
