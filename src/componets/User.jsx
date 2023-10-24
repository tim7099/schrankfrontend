import { atom, useAtom } from "jotai";

const name = atom("");

function User({ name }) {
  return (
    <div className="justify-self-center self-center pt-15">
      <button className="bg-fz-blue w-48 h-16 text-white text-3xl ">
        {name}
      </button>
    </div>
  );
}

export default User;
