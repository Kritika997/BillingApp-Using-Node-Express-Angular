const mongoose = require('mongoose');

const connection = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const uri = "mongodb+srv://kritika:Krinfi_6519@cluster0.vetm4.mongodb.net/BillingApp?retryWrites=true&w=majority";

const connect = mongoose.connect(uri, connection).then(() => {
    console.log("Database connected ");
}).catch((err) => {
    console.log("Database not connected ");
    console.log(err);
})

module.exports = connect;