import { useEffect, useState } from "react";
import Selectuser from "./Selectuser";

function ShoppingCart({ items, remove, users }) {
  const CheckSize = (size) => {
    if (size > 0) {
      return true;
    }
  };

  return (
    <div className="flex justify-center ">
      <table>
        <tr>
          <th className="border-2 border-black px-4">Name</th>
          <th className="border-2 border-black px-4">Id</th>
          <th className="border-2 border-black px-4">Anzahl</th>
          <th className="border-2 border-black px-4">Speichergröße</th>
          <th className="border-2 border-black px-4">Länge</th>
          <th className="border-2 border-black px-4">Alternate ID</th>
          <th className="border-2 border-black px-4">Action</th>
        </tr>
        {items.map((item) => (
          <tr className="justify-center" key={item.id}>
            <td className="border-2 border-black p-4 ">{item.name}</td>
            <td className="border-2 border-black p-4">{item.id}</td>
            <td className="border-2 border-black p-4">{item.count}</td>

            <td className="border-2 border-black p-4">{item.size}</td>
            <td className="border-2 border-black p-4">{item.lenght}</td>
            <td className="border-2 border-black p-4">{item.alternateID}</td>
            <td className="border-2 border-black p-4">
              <button
                className="border-2 border-black rounded-lg p-2 "
                onClick={() => remove(item.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ShoppingCart;
