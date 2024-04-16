import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout, getUserEmail } = useContext(UserContext);

  useEffect(() => {
    getUserEmail();
  }, [getUserEmail]);

  return (
    <div className="container my-5">
      <h1>Profile</h1>
      <p>Email: {email}</p>
      <button
        className="btn btn-sm btn-outline-danger me-2"
        onClick={logout}
      >
        logout
      </button>
    </div>
  );
};
export default Profile;
