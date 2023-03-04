import { GET_USERS_ONLY } from "../Graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_USER } from "../Graphql/Mutation";

function ListOfUsers() {
  const { data } = useQuery(GET_USERS_ONLY);

  const [deleteUser] = useMutation(DELETE_USER);

  return (
    <>
      {data &&
        data.getAllUsersCars.map((user: any) => {
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
                          getAllUsers: data.getAllUsersCars.filter((user: any) => {
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