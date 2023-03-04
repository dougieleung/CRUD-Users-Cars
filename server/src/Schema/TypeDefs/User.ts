import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";
import { CarType } from "./Car";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    cars: { type: new GraphQLList(CarType) },
  },
});
