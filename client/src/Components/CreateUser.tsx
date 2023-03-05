import { useState, FC } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutation";
import { GET_USERS_ONLY } from "../Graphql/Queries";

const CreateUser: FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const [createUser] = useMutation(CREATE_USER);

  const onFinish = async () => {
    await createUser({
      variables: {
        name: name,
        username: userName,
        password: password,
      },
      update: (cache, { data: { createUser } }) => {
        const data: any = cache.readQuery({ query: GET_USERS_ONLY });
        cache.writeQuery({
          query: GET_USERS_ONLY,
          data: {
            getAllUsersCars: [...data.getAllUsersCars, createUser],
          },
        });
      },
    });
  };

  return (
    <div className="createUser">
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={onFinish}>Create User</button>
    </div>
  );
};

export default CreateUser;
