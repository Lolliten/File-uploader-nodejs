const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose.connect('mongodb://localhost:27017/textfiles')

const TextsSchema = new mongoose.Schema({
    filename: String
});

const TextsModel = new mongoose.model("_id", TextsSchema);

app.get('/texts', (req, res) => {
    TextsModel.find({}).then(function(_id) {
        res.json(_id)
    }).catch(function(err) {
        console.log(err)
    })
});



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
    console.log(req.file);
    console.log(req.body);
});

const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});