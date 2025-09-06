import { useContext } from "react";
import { UserContext } from "./UserContext";
function UserDetails() {
    const data=useContext(UserContext)
  return (
    <div>
      <p>Name: </p>
      <p>Email: </p>
    </div>
  );
}

export default UserDetails;