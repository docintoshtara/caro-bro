const express = require('express');
const suger = new express();
const { add, get, edit, delete_ } = require('../controller/Suger')


suger.post('/carobro', add);
suger.get('/carobro', get);
suger.put('/carobro/:id', edit);
suger.delete('/carobro/:id', delete_);

module.exports = suger;