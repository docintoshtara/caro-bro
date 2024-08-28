const Video = require("../model/video.model");

const add = async(req, res, next) => {
    const postData = req.body;
    let video;
    try {
        video = new Video(postData);
        video = await video.save();
    } catch (err) {
        console.log(err);
        return next();
    }
    res.status(201).json({
        video,
    });
};

const get = async(req, res, next) => {
    let video;
    try {
        video = await Video.find();
    } catch (err) {
        console.log(err);
        return next();
    }
    if (!video) {
        return res.status(404).json({ message: "No video Found" });
    }
    res.status(200).json({ videolist: video });
};


const edit = async(req, res, next) => {
    const video = await Video.findById(req.params.id);
    if (!video) {
        return res.status(404).send('No user found');
    }
    const postData = req.body;
    await Video.findOneAndUpdate({ _id: req.params.id }, {
        $set: postData
    })
    return res.status(200).send('Success');
    next();
};

const delete_ = async(req, res, next) => {
    // console.log(req.params.id);
    video = await Video.findById(req.params.id);
    if (!video) {
        return res.status(404).send('something went wrong');

    }
    await Video.findOneAndDelete({ _id: req.params.id })
    return res.status(200).send('Success');
    next();
};

module.exports = { add, get, edit, delete_ }