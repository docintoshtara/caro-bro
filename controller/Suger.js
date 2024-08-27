const Suger = require("../model/suger.model");

const add = async(req, res, next) => {
    const postData = req.body;
    let suger;
    try {
        const data = await Suger.find({ email: postData.email });
        if (data.length > 0) {
            const PostData = { 'onoff': 1 };
            await Suger.findOneAndUpdate({ email: postData.email }, {
                $set: PostData
            });
            suger = data;

        } else {
            suger = new Suger(postData);

            suger = await suger.save();
        }


    } catch (err) {
        console.log(err);
        return next();
    }
    res.status(201).json({
        caroBroBackend: suger,
    });
};

const get = async(req, res, next) => {
    let suger;
    try {
        suger = await Suger.find();
    } catch (err) {
        console.log(err);
        return next();
    }
    if (!suger) {
        return res.status(404).json({ message: "No product Found" });
    }
    res.status(200).json({ caroBroBackend: suger });
};

const edit = async(req, res, next) => {
    const suger = await Suger.find({ mobile: req.params.id });
    if (!suger) {
        return res.status(404).send('No user found');
    }
    const postData = { 'onoff': 0 };
    await Suger.findOneAndUpdate({ mobile: req.params.id }, {
        $set: postData
    })
    return res.status(200).send('Success');
    next();
};

const delete_ = async(req, res, next) => {
    // console.log(req.params.id);
    suger = await Suger.findById(req.params.id);
    if (!suger) {
        return res.status(404).send('something went wrong');

    }
    await Suger.findOneAndDelete({ _id: req.params.id })
    return res.status(200).send('Success');
    next();
};

module.exports = { add, get, edit, delete_ }
