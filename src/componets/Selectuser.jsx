import React, { useEffect, useState } from "react";
import useOutsideClick from "../utils/useOutsideClick";

function Selectuser({ placeholder, className, type, values, value, setValue }) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  const select = (e) => {
    setValue(e);
    setFilter(e.name);
    setOpen(false);
  };

  useEffect(() => {
    setFilter(value?.name);
  }, [value]);

  useEffect(() => {
    if (!open) {
      setFilter(value?.name);
    }
  }, [open, value]);
  return (
    <div ref={ref}>
      <input
        onClick={() => {
          setFilter("");
          setOpen(true);
        }}
        type={type}
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        className={
          "w-56 border-b border-fzblue bg-grey placeholder:text-black text-lg pb-1 placeholder:italic"
        }
        placeholder={placeholder}
      />
      <div className={"relative w-16"}>
        {open && (
          <div
            className={
              "absolute w-56 max-h-96 shadow z-50 overflow-y-scroll flex flex-col gap-0.5 bg-gray-200"
            }
          >
            {values
              .filter((v) =>
                v.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((v) => (
                <div
                  key={`dd_${v.name}`}
                  onClick={() => select(v)}
                  className={
                    "w-full bg-white py-2 px-4 hover:bg-fz-blue-light cursor-pointer"
                  }
                >
                  {v.name}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Selectuser;
