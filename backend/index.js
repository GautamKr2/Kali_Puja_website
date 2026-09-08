import express from 'express';

const app = express();

app.get("/", (req, resp) => {
    resp.send({message: "Backend of Kali Puja Website", result: "Successful"})
})

app.listen(3200);