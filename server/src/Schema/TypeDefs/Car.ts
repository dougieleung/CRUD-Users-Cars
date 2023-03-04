import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from "graphql";

export const CarType = new GraphQLObjectType({
  name: "Car",
  fields: {
    id: { type: GraphQLID },
    make: { type: GraphQLString },
    model: { type: GraphQLString },
    year: { type: GraphQLInt },
    price: { type: GraphQLFloat },
    userId: { type: GraphQLID },
  },
});
