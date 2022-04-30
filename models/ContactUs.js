const mongoose=require('mongoose')


const contactUs= new mongoose.Schema({
    firstname: { type: String, required: true },
    middlename: { type: String },
    lastname: { type: String, required: true },
    address: { type: String, required: true},
    country: { type: String, required: true },
    city: { type: String, required: true},
    pin:{ type: String, required: true},
    email: { type: String, required: true },
    phone:{type:Number},
    quantity:{type:Number,required:true},
    message:{type:String},
    product:{type:String},
})

const ContactUs=mongoose.model('ContactUs', contactUs)
module.exports=ContactUs;