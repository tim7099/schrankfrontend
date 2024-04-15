import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "../componets/ListItems";

function InventarListe() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const [checkCategory, setcheckCategory] = useState(true);
  const Kategorie = ["Kabel", "USB-Sticks", "Festplatte"];
  const katoGoriebutton = Kategorie.map((Kategorie) => (
    <button
      className="p-2 border-2 border-black rounded-lg m-2 "
      onClick={() => categorybutton(Kategorie, false)}
    >
      {Kategorie}
    </button>
  ));

  const getItems = () => {
    axios
      .get("api/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(`Folgender Fehler ist aufgetreten: ${error}`);
      });
  };
  const categorybutton = (Kategory, bool) => {
    setcheckCategory(bool);
    setCategory(Kategory);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <header className="flex h-20 sticky top-0 my-5 z-40 bg-fzblue items-center justify-around border-2 border-black rounded-lg ">
        <Link className="px-5 border-2 rounded-lg border-black p-2 " to={"/"}>
          <button className="text-fzgrey ">Zurück zu Nutzerauswahl</button>
        </Link>
        <Link
          className="px-5 border-2 rounded-lg border-black p-2"
          to={"/Materialschein"}
        >
          <button className="text-fzgrey">Material Bestellen</button>
        </Link>
      </header>
      <div className="flex flex-row m-4 bg-grey items-center ">
        <div>
          <button
            className="p-2 border-2 border-black rounded-lg m-2"
            onClick={() => categorybutton("", true)}
          >
            Alles anzeigen
          </button>
        </div>
        <div>{katoGoriebutton}</div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center   ">
        {checkCategory ? (
          <>
            {items.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                name={item.name}
                amount={item.amount}
                size={item.size}
                length={item.length}
                alternateID={item.alternate_id}
                image={item.image}
              />
            ))}
          </>
        ) : (
          <>
            {items
              .filter((item) => item.category === category)
              .map((item) => (
                <ListItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  amount={item.amount}
                  size={item.size}
                  length={item.length}
                  alternateID={item.alternate_id}
                  image={item.image}
                />
              ))}
          </>
        )}
      </div>
    </>
  );
}
export default InventarListe;

// Items aus der Datebank ziehen
// Mit den Items als Arugment den Table rendern
