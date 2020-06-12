const express = require('express');
const graphqlHTTP= require("express-graphql");
const schema = require('./schema/schema')
const mongoose= require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Honza:Honza@db1-g0eyg.gcp.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log('work');
});
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));
app.listen(4000,()=>{
    console.log("workin");
});