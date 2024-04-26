import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <>
      <div>THIS IS THE PROFILE OF {username}</div>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to About Page
      </button>
    </>
  );
};

export default Profile;
