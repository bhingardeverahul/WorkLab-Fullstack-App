const mongoose = require("mongoose");
const EmailSchema = new mongoose.Schema({
  userId: {
    type:String,
    ref: "Users",
    require:true
  },
  token:{
    type:String,
    require:true
},
createAt:{
 type : Date , 
 default :Date.now
}

});
const Token = mongoose.model("Token", EmailSchema);
module.exports = Token;
