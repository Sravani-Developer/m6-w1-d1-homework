# m6-w1-d1-homework

Module 6 Week 1 Day 1 homework for the React/Node/MongoDB CRUD assignment.

## Completed scope

- Task 1: Imported `inventories.json` into MongoDB database `react-crud`, collection `inventories`
- Task 2A: Built the backend in `node-mongo`
- Created the `react-app` folder as required by the PDF for the next homework

## Run the backend

```powershell
cd .\node-mongo
npm install
npm start
```

Then open:

`http://localhost:8080/api/inventories`

## Notes

- `.env` is intentionally included for this assignment because it only contains the local MongoDB connection URL and database name required by the app
- Anyone cloning the repo still needs MongoDB running locally on port `27017`
