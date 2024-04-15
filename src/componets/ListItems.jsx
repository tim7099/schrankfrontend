import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

// Den Content von einem Row wiecergebne mit Edit und Delete button

function ListItem({
  id,
  name,
  amount,
  size,
  length,
  alternateID,
  image,
  addItem,
  reduceitems,
  count,
  currentuserid,
  giventoid,
}) {
  const [ItemAmount, setAmount] = useState(amount);

  const Checklength = (test) => {
    if (test > 0) {
      return true;
    }
    return false;
  };
  const CheckSize = (test) => {
    if (test > 0) {
      return true;
    } else {
      return false;
    }
  };

  const Checkamount = (test) => {
    if (test > 0) {
      return true;
    } else {
      return false;
    }
  };

  const Checkadditem = (test) => {
    if (test === undefined) {
      return true;
    } else {
      return false;
    }
  };
  const Changecolor = (Anzahl) => {
    if (Anzahl > 1) {
      return "bg-fzblue";
    } else if (Anzahl < 1) {
      return "bg-red-500";
    } else if ((Anzahl = 1)) {
      return "bg-orange-500";
    }
  };

  return (
    <div
      className={
        "flex flex-col justify-center items-center p-2 rounded-lg  " +
        Changecolor(amount)
      }
    >
      <div>
        <img
          src={image}
          alt="was guckst du?"
          className="border-2 rounded-lg z-0 m-2"
        ></img>
      </div>
      <div className="text-fzgrey select-none">{name}</div>
      <div className="text-fzgrey select-none">Anzahl: {ItemAmount}</div>
      {Checklength(length) ? (
        <div className="text-fzgrey select-none">Länge: {length}</div>
      ) : (
        <div></div>
      )}
      {CheckSize(size) ? (
        <div className="text-fzgrey select-none"> Größe: {size} GB </div>
      ) : (
        <div></div>
      )}
      <div>
        {Checkadditem(addItem) ? (
          <div></div>
        ) : (
          <div className="flex m-2 ">
            <button
              onClick={() =>
                addItem(
                  id,
                  name,
                  amount,
                  alternateID,
                  size,
                  length,
                  currentuserid,
                  giventoid
                )
              }
              className="text-lime-500 "
            >
              <AddIcon />
            </button>
            <input
              className="w-12 text-center px-4 mx-2 select-none  "
              type="text"
              value={count}
              readOnly
            />

            <button
              onClick={() => reduceitems(id)}
              className="text-red-700 border-solid border-black"
            >
              <MinusIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListItem;
