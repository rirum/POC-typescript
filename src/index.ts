import express, { json, Request, Response } from "express";


const app = express();
app.use(json());

app.get("/health", (req: Request,res: Response) => {
    res.send("Ok")
})

const port = 5000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})