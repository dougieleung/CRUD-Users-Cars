import { GET_USERS_ONLY } from "../Graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_USER } from "../Graphql/Mutation";
import { UserInterface } from "../interface";

function ListOfUsers() {
  const { data } = useQuery(GET_USERS_ONLY);

  const [deleteUser] = useMutation(DELETE_USER);

  return (
    <>
      {data &&
        data.getAllUsersCars.map((user: UserInterface) => {
          return (
            <div key={user.id}>
              {user.name}
              {"  "}
              {user.username}
              <button
                onClick={() => {
                  deleteUser({
                    variables: { id: user.id },
                    update: (cache, { data: { deleteUser } }) => {
                      const data: any = cache.readQuery({
                        query: GET_USERS_ONLY,
                      });
                      cache.writeQuery({
                        query: GET_USERS_ONLY,
                        data: {
                          getAllUsersCars: data.getAllUsersCars.filter((user: UserInterface) => {
                            return  user.id !== deleteUser.id;
                          }),
                        },
                      });
                    },
                  });
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
}

export default ListOfUsers;
