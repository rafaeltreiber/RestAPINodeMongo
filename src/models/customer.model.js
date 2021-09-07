let mongoose = require('mongoose');

// const server = 'cluster0-shard-00-01.uyzcw.mongodb.net:27017'
// const database = 'cluster0-shard-00-01.uyzcw.mongodb.net:27017'
// const user = 'cluster0-shard-00-01.uyzcw.mongodb.net:27017'
// const password = 'cluster0-shard-00-01.uyzcw.mongodb.net:27017'

const URI = 'mongodb+srv://dbTreiber:talento1982@cluster0.uyzcw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI);

let customerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true }
})

module.exports = mongoose.model('Customer', customerSchema);