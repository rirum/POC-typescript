import express, { json } from "express";


const app = express();
app.use(json());


const port = 5000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})