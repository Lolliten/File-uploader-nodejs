const express = require('express');
const app = express();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) { 
      cb(null, file.originalname)
    }
});
const upload = multer({ storage });

app.get('/', (req, res) => {
    res.send('Hello Worldddddd!');
});

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json(req.file);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});