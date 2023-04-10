import "express-async-errors";
import express, { json, Request, Response } from "express";
import routes from "routes";
import { handleApplicationErrors } from "middlewares/errorMiddleware";


const app = express();
app.use(json());
app.use(routes);
app.use(handleApplicationErrors);

app.get("/health", (req: Request,res: Response) => {
    res.send("Ok")
})

const port = 5000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})