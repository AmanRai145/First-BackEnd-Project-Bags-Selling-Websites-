const mongoose = require('mongoose');




const productSchema = mongoose.Schema({
    images: String,
    name: String,
    price: Number,
    discount: {
      type: Number,
      default: 0,
    },
   
    bgcolor: String,
    panecolor: String,
    textcolor: String,
});

module.exports = mongoose.model("product", productSchema);