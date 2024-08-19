const express = require('express');

const app = express();

app.use(express.json());

//Filereader
const fs = require('fs');
const result = fs.readFileSync(
    './uploads/Employee Empowerment.md',
    'utf8'
);
console.log(result);

//Find most commmon word
let wordCounts = { };
let words = './uploads/Employee Empowerment.md'.split(/\b/);

for(let i = 0; i < words.length; i++)
    wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
console.log(wordCounts);

//Replace all commmon words
const paragraph = fs.readFileSync('./uploads/Employee Empowerment.md',
    'utf8');

console.log(paragraph.replaceAll('employee', 'fooemployeebar'));

//Multer config
const multer = require('multer');
const { file } = require('server/reply');
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