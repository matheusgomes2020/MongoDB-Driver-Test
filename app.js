const mongoose = require('mongoose');
 
main().catch(err => console.log(err));
 
async function main() {
  // Use connect method to connect to the server
 // mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB2');
 
  const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please ckeck your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
  });
 
  const Fruit = mongoose.model('Fruit', fruitSchema);
 
  const fruit = new Fruit({
    //name: 'Apple',
    rating: 10,
    review: 'Pretty solid as a fruit.'
  });
 
  //await fruit.save();
 
  //const fruits = await Fruit.find();
  //fruits.forEach(function(fruit){
  //  console.log(fruit.name)
   // mongoose.connection.close();
  //});
  //console.log(fruits);
 
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });
 
  const Person = mongoose.model('Person', personSchema);

    const mango = new Fruit({
    name: 'Mango',
    score: 3,
    review: 'The best fruit!'
  });

  await mango.save(); 

   Person.updateOne({name: "John"}, {favouriteFruit: mango})
    .then(() => {
   console.log("Successfully Updated");
 })
 .catch((err) => {
   console.log(err);
 });

  //const person = new Person({
   // name: 'Amy',
   // age: 12,
   // favouriteFruit: pineapple
  //});
 
 // await person.save();
 
  const people = await Person.find();
  console.log(people);
 
  //const kiwi = new Fruit({
   // name: 'Kiwi',
  //  score: 10,
 //   review: 'The best fruit!'
 // });
 
  //const orange = new Fruit({
  //  name: 'Orange',
 //   score: 4,
 //   review: 'Too sour for me'
  //});
 
  //const banana = new Fruit({
//    name: 'Banana',
  //  score: 3,
  //  review: 'Weird texture'
 // });
 
 
 
  //Fruit.insertMany([kiwi, orange, banana])
 // .then(function () {
  //  console.log("Successfully saved defult items to DB");
 // })
//  .catch(function (err) {
 //   console.log(err);
 // });

 //Fruit.updateOne({_id: "6447e6d94cadb54b7c85a37e"}, {name: "Peach"})
 //.then(() => {
 //  console.log("Successfully Updated");
 //})
 //.catch((err) => {
 //  console.log(err);
 //});

// Fruit.deleteOne({ name: "Peach" })
 //.then(() => {
 //  console.log("Successfully Deleted");
 //})
// .catch((err) => {
//   console.log(err);
 //});

// Person.deleteMany({name: "John"})
//.then(() => {
  //console.log("Successfully Deleted All Data named JOHN");
//})
//.catch((err) => {
  //console.log(err);
//});

//READ ALL ENTRIES IN COLLECTION
Fruit.find()
.then((fruits) => {
    fruits.forEach(fruit => {
        console.log(fruit)
    })
})
.catch(err => {
    console.log(err)
})
.finally(() => mongoose.connection.close())


 
} 