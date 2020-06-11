const express = require('express'),
    app = express(),
    cors = require('cors'),
    mongoose    = require('mongoose'),
    myParser = require("body-parser"),
    path = require('path');

//Setup
const apiRouter = require('./api');
const DATABASE_URI = process.env.DATABASE_URI || "mongodb://localhost/journal";
const PORT = process.env.PORT || 3001;
app.use(myParser.urlencoded({extended : true}));
app.use(myParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
mongoose.connect(DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true}).catch(err => err);

app.use("/", apiRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, ()=> console.log(`App listens at ${PORT}`));