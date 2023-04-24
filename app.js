const {MongoClient} = require("mongodb");
 
// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb://127.0.0.1:27017';
 
// const client = new MongoClient(uri, {useUnifiedTopology: true});
const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        console.log("Connected Successfully to server");
 
        const database = client.db('fruitsDB');
        const fruitsCollection = database.collection('fruits');
        const docs = [
            {
              name: "Lichi",
              score: 8,
              review: "Great Fruit",
            },
            {
              name: "Pineapple",
              score: 6,
              review: "Kind Sour",
            },
            {
              name: "Mango",
              score: 9,
              review: "Great Stuff!",
            },
          ]
        const option={ordered: true};
        const result=await fruitsCollection.insertMany(docs,option);
        const cursor = fruitsCollection.find({});
        console.log(`${result.insertedCount} documents were inserted`);
        if ((await fruitsCollection.countDocuments) === 0) {
            console.log("No documents found!");
        }
        console.log(`Total entries ${await fruitsCollection.countDocuments()}`);
        await cursor.forEach((fruit) => {
            console.log(fruit);
        });
 
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
 
run().catch(console.dir);