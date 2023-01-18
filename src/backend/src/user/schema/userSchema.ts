import {GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql/type";

const userType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString)},
        name: { type: new GraphQLNonNull(GraphQLString)},
    })
})

const userType2 = new GraphQLObjectType({
    name: "user2",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString)},
        name: { type: new GraphQLNonNull(GraphQLString)},
    })
})

const rootQuery = new GraphQLObjectType({
    name: "rootQuery",
    fields: () => ({
        user: {
            type: new GraphQLObjectType({
                name: "aa",
                fields: () => ({
                    name: { type: new GraphQLNonNull(GraphQLString)},

                })
            })
        },
        user2: {
            type: new GraphQLNonNull(userType2)
        }
    })
})


const schema = new GraphQLSchema({
    query: rootQuery,
})


export {schema}