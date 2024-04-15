import { useAtom } from "jotai";
import userAtom from "../utils/user";
import { Link } from "react-router-dom";

function User({ user }) {
  const [currentUser, setCurrentUser] = useAtom(userAtom);

  const setLoggedIn = (e) => {
    setCurrentUser(e);
  };

  return (
    <div className="justify-self-center self-center pt-15 select-none">
      <Link to={"/shopinglist"}>
        <button
          onClick={() => setLoggedIn(user)}
          className="bg-fzblue w-48 h-16 text-fzgrey text-3xl border-2 border-black rounded-2xl "
        >
          {user.name}
        </button>
      </Link>
    </div>
  );
}

export default User;
