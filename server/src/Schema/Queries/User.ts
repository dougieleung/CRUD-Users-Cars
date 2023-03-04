import { GraphQLList, GraphQLID } from "graphql";
import { UserType } from '../TypeDefs/User';
import { User } from '../../Entities/User';


export const GET_ALL_USERS_CARS = {
    type: new GraphQLList(UserType),
    async resolve() {
        return await User.find();
    }
}

export const GET_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID }
      },
      async resolve(parent: any, args: any) {
        const id = args.id;
        return await User.findOneBy({id: id});
      },
}