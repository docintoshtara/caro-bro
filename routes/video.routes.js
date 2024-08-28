const express = require('express');
const video = new express();
const { add, get, edit, delete_ } = require('../controller/Video')


video.post('/video', add);
video.get('/video', get);
video.put('/video/:id', edit);
video.delete('/video/:id', delete_);

module.exports = video;