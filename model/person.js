const mongoose=require('mongoose')
const {Schema,model}=mongoose;
const personSchema=new Schema(
    {
    name:{type:String,required:true},
    age:Number,
    favoriteFoods:[String]
}
)
const person=mongoose.model('person',personSchema);

module.exports=person;