import axios from "axios";
import { useEffect, useState } from "react";
import User from "../componets/User";
import { BsFillBoxSeamFill } from "react-icons/bs";

function Home() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("http://localhost:8000/api/users", {
        params: {
          password: "test1234",
        },
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(`Folgender Fehler ist aufgetreten: ${error}`);
      });
  };

  const getitems = () => {
    axios.get("http://localhost:8000/api/users");
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <body className="bg-fz-img bg-auto w-full md:w-auto h-full bg-no-repeat bg-center ">
      <div className="display: grid grid-cols-3 gap-2 w-full md:w-auto h-screen grid-flow-row  ">
        {users.map((user) => {
          return user.employee == 1 ? <User name={user.name} /> : "";
        })}
        <div className="justify-self-center self-center">
          <a href="/inv">
            <button className="bg-fz-blue w-40 h-16 text-white text-3xl">
              <BsFillBoxSeamFill />
              Inventarlist
            </button>
          </a>
        </div>
      </div>
    </body>
  );
}

export default Home;
