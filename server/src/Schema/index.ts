import { GraphQLObjectType, GraphQLSchema } from "graphql"
import { GET_ALL_USERS_CARS, GET_USER } from './Queries/User';
import { GET_ALL_CARS, GET_CARS_BELONGING_TO } from "./Queries/Car";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import { CREATE_CAR, DELETE_CAR } from "./Mutations/Car";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsersCars: GET_ALL_USERS_CARS,
        getUser: GET_USER,
        getALLCars: GET_ALL_CARS,
        getCarsBelongingTo: GET_CARS_BELONGING_TO,
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updatePassword: UPDATE_PASSWORD,
        createCar: CREATE_CAR,
        deleteCar: DELETE_CAR
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})   