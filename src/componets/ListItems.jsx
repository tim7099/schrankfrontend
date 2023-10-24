import ContexMenu from "./ContextMenu";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";

// Den Content von einem Row wiecergebne mit Edit und Delete button

function ListItem({
  id,
  name,
  amount,
  size,
  length,
  addItem,
  removeItem,
  minusItem,
  amountminus,
}) {
  const Checklength = (amount) => {
    if (amount > 0) {
      return true;
    }

    return false;
  };
  const CheckSize = (size) => {
    if (size > 0) {
      return true;
    }
    return false;
  };

  return (
    <div className=" text-2xl decoration-white m-5 p-2">
      {name} Anzahl:
      {amount}
      {Checklength(length) ? (
        <div>
          {" "}
          Länge: {length} Meter <ContexMenu />{" "}
        </div>
      ) : (
        <div></div>
      )}
      {CheckSize(size) ? (
        <div>
          Größe: {size} Gb
          <ContexMenu />{" "}
        </div>
      ) : (
        <div></div>
      )}
      <button onClick={() => minusItem(name)}>
        <AiOutlineMinusCircle />
      </button>
      <div>{amountminus}</div>
      <button onClick={() => addItem(name)}>
        <FiPlusCircle />
      </button>
    </div>
  );
}

export default ListItem;
