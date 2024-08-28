require('dotenv').config()
const express = require('express');
const suger = require('./routes/suger.routes');
const video = require('./routes/video.routes')
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8000;
require('./db/db')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(cors());
app.use('/api/v1', suger);
app.use('/api/v1', video);
app.listen(PORT, () => {
    console.log(`connected on ${PORT}`);
});
