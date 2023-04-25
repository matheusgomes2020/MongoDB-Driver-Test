const mongoose = require('mongoose');
 
main().catch(err => console.log(err));
 
async function main() {
  // Use connect method to connect to the server
 // mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB2');
 
  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
  });
 
  const Fruit = mongoose.model('Fruit', fruitSchema);
 
  const fruit = new Fruit({
    name: 'Apple',
    rating: 7,
    review: 'Pretty solid as a fruit.'
  });
 
  //await fruit.save();
 
  const fruits = await Fruit.find();
  fruits.forEach(function(fruit){
    console.log(fruit.name)
    mongoose.connection.close();
  });
  //console.log(fruits);
 
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });
 
  const Person = mongoose.model('Person', personSchema);
 
  const person = new Person({
    name: 'John',
    age: 37
  });
 
  //await person.save();
 
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
 
} 