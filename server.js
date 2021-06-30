const express = require("express");
const app = express();
const port = 3000;
const connectdb = require("./DataBase/DBconnect");
const person = require("./model/person");
connectdb();
// const add = () => {
//   const houssem = new person({
//     name: "mohsen",
//     age: 43,
//     favoriteFoods: [" burritos", "fruit"],
//   });
//   houssem.save((err) => {
//     err ? console.log("err", err) : console.log("add secced1");
//   });
//   person.create(
//     { name: "med", age: 53, favoriteFoods: [" burritos", "poisson"] },
//     { name: "ghali", age: 63, favoriteFoods: [" burritos", "brik"] },
//     (err) => {
//       err ? console.log("err", err) : console.log("add secced2");
//     }
//   );
// };
// add();
// const find=()=>{
//     person.find({},(err,data)=>err?console.log("err",err):console.log(data))
// }
// find();
// const findid=()=>{
//     person.findById("60db14e4ce0b662df0f72b82",(err,data)=>err?console.log("err",err):console.log(data))
// }
// findid();
// const findone = () => {
//   person.findOne({ favoriteFoods: "burritos" }, (err, data) =>
//     err ? console.log("err", err) : console.log(data)
//   );
// };
// findone();
// const update=async()=>{
//    const pr= await person.findById("60db14e4ce0b662df0f72b82").exec()
//    await pr.favoriteFoods.push('hamburger')
//    await pr.save()
//    console.log('succesful update')
// }
// update();
// const findupdate=()=>{
//     person.findOneAndUpdate({name:"salah"}
//     ,{ $set: { age:20 }},{new:true}
//     ,(err,data)=>err?console.log("err",err):console.log(data))
// }
// findupdate();
// const findremove=()=>{
//     person.findByIdAndRemove("60db14e4ce0b662df0f72b82"
//     ,(err,data)=>err?console.log("err",err):console.log(data))
// }
// findremove();
// const deletemany=()=>{
//     person.deleteMany({name: "ahmed"}
//     ,(err,data)=>err?console.log("err",err):console.log(data))
// }
// deletemany();
// const queryChain = () => {
//   person
//     .find({ favoriteFoods: { $in: ["burritos"] } })
//     .sort({ name: "asc" })
//     .limit(2)
//     .select("-age")
//     .exec((err, data) => {
//       err ? console.log("err", err) : console.log("Burritos lovers:", data);
//     });
// };

// queryChain();
app.listen(port, (err) => {
  err
    ? console.log("err", err)
    : console.log("server is running on port", port);
});
