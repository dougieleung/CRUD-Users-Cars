import { CarType } from "../TypeDefs/Car";
import { GraphQLString, GraphQLInt, GraphQLFloat, GraphQLID} from "graphql";
import { Car } from "../../Entities/Car";

export const CREATE_CAR = {
  type: CarType,
  args: {
    make: { type: GraphQLString },
    model: { type: GraphQLString },
    year: { type: GraphQLInt },
    price: { type: GraphQLFloat },
    userId: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { make, model, year, price, userId } = args;
    await Car.insert(args);
    return args;
  },
};

export const DELETE_CAR = {
  type: CarType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id  = args.id;

    const car = await Car.findOneBy({ id: id});

    await Car.delete(id);

    return car;

    // return {successful: true, message: "DELETE SUCCESSFUL"};
  },
};