import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Itemorder from "../componets/Itemorder";

function Materialbestellung() {
  const [item, setItem] = useState([]);

  const getItem = () => {
    axios
      .get("api/takeout")
      .then((response) => {
        setItem(response.data);
        console.log("Daten wurden erfass:");
        console.log(item);
      })
      .catch((error) => {
        console.log(`Folgender Fehler ist aufgetreten: ${error}`);
      });
  };

  useEffect(() => {
    getItem();
  });

  return (
    <div>
      <header className="flex h-20 sticky top-0 my-5 z-40 bg-fzblue items-center justify-center   border-2 border-black rounded-lg ">
        <Link
          className="px-5 border-2 rounded-lg border-black p-2 mx-5 text-xl font-semibold "
          to={"/"}
        >
          <button className="text-fzgrey justify-items-start">
            Zurück zu Nutzerauswahl
          </button>
        </Link>
        <div className="px-5 p-2 text-fzgrey text-3xl font-semibold ">
          Materialbestellung
        </div>
      </header>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Größe/länge</th>
              <th>Test</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {item.map((item) => {
                <Itemorder
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  amount={item.amount}
                  size={item.size}
                  length={item.length}
                  alternateID={item.alternate_id}
                  image={item.image}
                />;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Materialbestellung;
