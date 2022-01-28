const mongoose = require('mongoose');
const {MONGOURI} = require('./config/keys')
const connectDB = async (req,res)=>{
    try{
        await mongoose.connect(MONGOURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('DB connected')
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;

//mongodb+srv://hema:iC43S387nyKalTiN@cluster0.gjgoz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority