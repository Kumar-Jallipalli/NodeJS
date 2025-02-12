const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("ConnectionString")
}

connectDB().then(() => {
    console.log("DB Connection established successfully..")
}).catch( (err) => {
    console.error("DB Connection Failed..")
})