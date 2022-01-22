const mongoose = require(mongoose);
const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@tudulist.n7ppu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() =>  console.log("MongoDB Atlas conectado")
    .catch((err) => console.log(err));
};

module.exports = connectToDb