const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:Tdq3HaISqglHjclh@cluster0.xeyux4e.mongodb.net/carobroBackend?retryWrites=true&w=majority&appName=Cluster0')
    .then((res) => res)
    .then((conn) => { console.log("db connected") })
    .catch((e) => { console.log(e) })