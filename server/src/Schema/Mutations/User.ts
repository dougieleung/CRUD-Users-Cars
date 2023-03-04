import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { GraphQLID, GraphQLString } from "graphql";
import { User } from "../../Entities/User";
import { UserArgs, PasswordArgs } from "../interface";


export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: UserArgs) {
    const { name, username, password } = args;
    await User.insert(args);
    return args;
  },
};

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: PasswordArgs) {
    const { username, oldPassword, newPassword } = args;
    const user = await User.findOneBy({ username: username });

    if (!user) {
        throw new Error("USERNAME DOESN'T EXIST");
    }
    const userPassword = user?.password;

    if (oldPassword === userPassword) {
      await User.update(
        { username: username },
        { password: newPassword }
      );

      return {successful: true, message: "PASSWORD UPDATED"}
    } else {
      throw new Error("PASSWORDS DO NOT MATCH!");
    }
  },
};

export const DELETE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: {id: string}) {
    const id  = args.id;

    const user = await User.findOneBy({ id: id});

    await User.delete(id);

    return user;

    // return {successful: true, message: "DELETE SUCCESSFUL"};
  },
};
