import { FC } from 'react';
import "./App.css";
import CreateUser from "./Components/CreateUser";
import ListOfUsers from "./Components/ListOfUsers";
import UpdatePassword from "./Components/UpdatePassword";


const App: FC = () => {
  
  return (
   <>
    <CreateUser />
    <ListOfUsers />
    <UpdatePassword />
   </>
  )
}

export default App;
