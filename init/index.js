const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

main()
.then(()=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
    } catch (error) {
        console.log("Error occured", error);
    }
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6543976b05f1a2dabbc9c9b6" }));
    await Listing.insertMany(initData.data);
    console.log("Data is initialised");
}

initDB();