import useUser from "../context/useUser";

const Profile = () => {
  const { username, setUsername } = useUser();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Current User: {username || "Guest"}</p>
    </div>
  );
};

export default Profile;
