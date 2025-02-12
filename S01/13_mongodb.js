// Importing the MongoDB module
const { MongoClient } = require('mongodb');

// Connection URL
const url = '<connection_URL>';
const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db('DemoDB');
  const collection = db.collection('DemoCollection');

  // the following code examples can be pasted here...

  // Insert Data
  const data = {
    fisrtname : "Deepika",
    lastname : "Padukone",
    city: "Mumbai"
  };
//   const insertResult = await collection.insertMany([data]);
//   console.log('Inserted documents =>', insertResult);

  // Read Data --> Find ALl Documents
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

//   Find Document with a Query
const filteredDocs = await collection.find({ fisrtname:"Deepika" }).toArray();
console.log('Found documents filtered by { "firstname":"Deepika" } =>', filteredDocs);

// Update a Document
// const updateResult = await collection.updateOne({ "fisrtname":"Deepika"}, { $set: { "firstname":"Deepika"} });
// console.log('Updated documents =>', updateResult);
// updates the first document where the field "fisrtname":"Deepika" by adding a new field "firstname":"Deepika"

// Delete Document
// const deleteResult = await collection.deleteMany({  "firstname":"Deepika"});
// console.log('Deleted documents =>', deleteResult);

// Count Documents
const count = await collection.countDocuments({firstname:"Kumar"})
console.log("Resulted Count : " + count)

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());