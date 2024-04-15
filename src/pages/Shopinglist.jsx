import { useAtom } from "jotai";
import userAtom from "../utils/user";
import axios from "axios";
import { useEffect, useState } from "react";
import ListItem from "../componets/ListItems";
import { Link } from "react-router-dom";
import ShoppingCart from "../componets/ShoppingCart";
import Selectuser from "../componets/Selectuser";
import { useNavigate } from "react-router-dom";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [IItems, setIItems] = useState([]);
  const [versuch, setVersuch] = useState([]);
  const [cartbolean, setcartbolean] = useState(false);
  const [user, setUser] = useState([]);
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [checkCategory, setcheckCategory] = useState(true);
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const navigate = useNavigate();
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
  const getUser = () => {
    axios.get("api/users").then((response) => {
      setUser(response.data);
    });
  };

  const getItemByName = (id) => {
    const item = IItems.find((item) => item.id === id);
    if (item) {
      return item.count;
    }
    return 0;
  };

  const addItem = (id, name, amount, alternateID, size, lenght) => {
    const item = IItems.find((item) => item.id === id);
    const newList = [...IItems];
    console.log("Test");
    if (item && getItemByName(item.id) < amount) {
      item.count++;
      setIItems(newList);
    } else if (!item) {
      try {
        setIItems([
          ...IItems,
          {
            name: name,
            id: id,
            count: 1,
            alternateID: alternateID,
            size: size,
            lenght: lenght,
          },
        ]);
      } catch (error) {}
    }
  };
  const reduceItems = (id) => {
    const item = IItems.find((item) => item.id === id);
    const newList = [...IItems];

    if (item && getItemByName(item.id) > 0) {
      item.count--;
      setIItems(newList);
      if (getItemByName(id) === 0) {
        const test = IItems.find((item) => item.id === id);
        const temp = [...IItems];
        temp.splice(test, 1);
        setIItems(temp);
      }
    }
  };
  const remove = (id) => {
    setIItems((test) => test.filter((item) => item.id !== id));
  };
  const categorybutton = (Kategory, bool) => {
    setcheckCategory(bool);
    setCategory(Kategory);
  };

  const checkHandle = () => {
    if (IItems.length > 0) {
      if (cartbolean === false) {
        setIItems(IItems.filter((item) => item.count > 0));
        setcartbolean(true);
      }
    } else if (IItems.length <= 0) {
      alert("Es wurde kein Objekt ausgewählt");
    }
  };
  const checkoutHandle = () => {
    setcartbolean(false);
  };

  const giveItem = () => {
    if (!(versuch.length === 0)) {
      if (!(IItems.length === 0)) {
        axios.post("api/takeout", {
          items: versuch,
        });
        setIItems([]);
        navigate("/");
      } else {
        window.alert("Es wurde kein Item ausgewählt ");
      }
    } else {
      alert("Es wurde kein User ausgewählt");
    }
  };
  const test = () => {
    const test = { ...IItems, given_to: value.id, given_by: currentUser.id };
    setVersuch(test);
  };

  useEffect(() => {
    getItems();
    getUser();
  }, [value]);
  const Kategorie = ["Kabel", "USB-Sticks", "Festplatte"];
  const katoGoriebutton = Kategorie.map((Kategorie) => (
    <button
      className="p-2 border-2 border-black rounded-lg m-2 "
      onClick={() => categorybutton(Kategorie, false)}
    >
      {Kategorie}
    </button>
  ));

  return (
    <div className="p-5  w-full h-full select-none ">
      <header className="flex h-20 sticky top-0 my-5 z-40 bg-fzblue items-center justify-around border-2 border-black rounded-lg ">
        <Link className="px-5 border-2 rounded-lg border-black p-2 " to={"/"}>
          <button className="text-fzgrey ">Zurück zu Nutzerauswahl</button>
        </Link>
        <div className="px-5 text-fzgrey  p-2 justify-self-center ">
          Aktueller Nutzer ist: {currentUser.name}
        </div>

        <div className="text-fzgrey  border-2 border-black rounded-lg p-2 items-end ">
          {cartbolean ? (
            <button onClick={checkoutHandle}>Zurück zur Item auswahl</button>
          ) : (
            <button onClick={checkHandle}>Checkout</button>
          )}
        </div>
      </header>

      <div className="z-0 justify-center">
        {cartbolean ? (
          <div className="w-full h-full bg-grey  ">
            <ShoppingCart items={IItems} remove={remove} users={user} />

            <div className="flex justify-center mt-4 mr-2">
              <Selectuser
                values={user}
                type="text"
                placeholder="Bitte Namen eingeben..."
                value={value}
                setValue={setValue}
              />
              <button
                //onClick={() => (IItems.given_to = value.id)}
                onClick={test}
                className="border-2 border-black  p-4 w-56"
              >
                Anforderer auswählen
              </button>
              <button
                className="border-2 border-black  p-4 w-56"
                onClick={giveItem}
              >
                Material Herausgeben
              </button>
            </div>
          </div>
        ) : (
          <>
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
                  {items.map((item) => {
                    return item.amount > 0 ? (
                      <ListItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        addItem={addItem}
                        reduceitems={reduceItems}
                        count={getItemByName(item.id)}
                        amount={item.amount}
                        size={item.size}
                        length={item.length}
                        alternateID={item.alternate_id}
                        image={item.image}
                        currentuserid={currentUser.id}
                        giventoid={value.id}
                      />
                    ) : (
                      ""
                    );
                  })}
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
                        addItem={addItem}
                        reduceitems={reduceItems}
                        count={getItemByName(item.id)}
                        amount={item.amount}
                        size={item.size}
                        length={item.length}
                        alternateID={item.alternate_id}
                        image={item.image}
                        currentuserid={currentUser.id}
                        giventoid={value.id}
                      />
                    ))}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ShoppingList;
