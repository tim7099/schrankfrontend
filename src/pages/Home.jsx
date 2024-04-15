import axios from "axios";
import { useEffect, useState } from "react";
import User from "../componets/User";

import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(`Folgender Fehler ist aufgetreten: ${error}`);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className=" w-full md:w-auto h-full bg-no-repeat bg-center  ">
      <div className="display: grid grid-cols-3 gap-2 w-full md:w-auto h-screen grid-flow-row  ">
        {users.map((user) => {
          return user.employee == 1 ? <User key={user.name} user={user} /> : "";
        })}
        <div className="justify-self-center self-center">
          <Link to={"inv"}>
            <button className="bg-fzblue w-48 h-16 text-fzgrey text-3xl border-2 border-black rounded-2xl">
              Inventarlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
