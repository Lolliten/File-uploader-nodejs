const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Worldddddd!');
});

app.post('/api/upload', (req, res) => {
    res.send('File upload ok!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});