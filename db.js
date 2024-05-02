const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = 'mongodb+srv://root:root@stock.e2ep161.mongodb.net/?retryWrites=true&w=majority&appName=stock'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
client.connect()
module.exports = client
