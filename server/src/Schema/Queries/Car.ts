import { GraphQLID, GraphQLList } from "graphql";
import { CarType } from "../TypeDefs/Car";
import { Car } from "../../Entities/Car";

export const GET_ALL_CARS = {
  type: new GraphQLList(CarType),
  async resolve() {
    return await Car.find();
  },
};

export const GET_CARS_BELONGING_TO = {
  type: new GraphQLList(CarType),
  args: {
    userId: { type: GraphQLID },
  },
  async resolve(parent: any, args: { userId: string }) {
    const userId = args.userId;
    return await Car.find({ where: [{ userId: userId }] });
  },
};
