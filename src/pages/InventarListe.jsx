import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../componets/Table";

function InventarListe() {
  const [items, setItems] = useState([]);

  const getItems = () => {
    axios
      .get("http://localhost:8000/api/items", {
        params: {
          password: "test1234",
        },
      })
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(`Folgender Fehler ist aufgetreten: ${error}`);
      });
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>Hello</td>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Table
            id={item.id}
            name={item.name}
            amount={item.amount}
            size={item.size}
            length={item.length}
            alternateID={item.alternate_id}
          />
        ))}
      </tbody>
    </table>
  );
}

export default InventarListe;

// Items aus der Datebank ziehen
// Mit den Items als Arugment den Table rendern
