const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLID, GraphQLList} = graphql;
const _= require('lodash');
const Song = require('../models/song');

const SongType= new GraphQLObjectType({
    name:'Song',
    fields:()=>({
        id: {type:GraphQLString},
        name:{type:GraphQLString},
        autor: {type:GraphQLString},
        logo: {type:GraphQLString},
        text: {type:GraphQLString},
        akordy: {type:GraphQLString}
    })
});

const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        song:{
            type: SongType,
            args: {id: {type:GraphQLString}},
            resolve(parent,args){
               //return _.find(songs,{id:args.id});
                return Song.findById(args.id);
            }
        },
        songs:{
            type:new GraphQLList(SongType),
            resolve(parent,args){
                return Song.find({});
            }
        }
    }
})

const Mutation= new GraphQLObjectType({
    name:'Mutation',
    fields: {
        addSong:{
            type: SongType,
            args:{
                name:{type:GraphQLString},
                autor:{type:GraphQLString},
                logo:{type:GraphQLString},
                text:{type:GraphQLString},
                akordy:{type:GraphQLString},
            },
            resolve(parent,args){
                let song = new Song({
                    name: args.name,
                    autor: args.autor,
                    logo: args.logo,
                    text: args.text,
                    akordy: args.akordy,
                });
                return song.save();
            }
        }
    }
})



module.exports= new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
})