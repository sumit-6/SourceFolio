import express from 'express';
import {users} from "../users.js";
const app = express(); 
app.set('view engine', 'ejs');
app.use(express.json());
app.get('/hello', (req, res) => {
    res.send("hello");
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Hello ${users[id]["name"]}`);
});

app.listen(8000, () => {
    console.log('server is listening on port:8000');
});

