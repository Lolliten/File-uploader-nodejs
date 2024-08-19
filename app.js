const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//Multer config
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

// Routes
app.get('/', (req, res) => {
    res.send('Hello Worldddddd!');
});

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json(req.file);
});

const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});