const Profile = () => {
  return (
    <div className="container my-5">
      <h1>Profile</h1>
      <p>Email: test@test.com</p>
      <button
        className="btn btn-sm btn-outline-danger me-2"
        // onClick={logout}
      >
        logout
      </button>
    </div>
  );
};
export default Profile;
