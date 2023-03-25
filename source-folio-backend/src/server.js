import express from 'express';
const app = express(); 
app.use(express.json());
app.get('/hello', (req, res) => {
    res.send("hello");
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Hello ${id}`);
})

app.listen(8000, () => {
    console.log('server is listening on port:8000');
});

