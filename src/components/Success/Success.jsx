import { useHistory } from "react-router-dom";

function Success() {
  const history = useHistory();

  const beginNewFeedback = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>Thank thee</h2>
      <button onClick={beginNewFeedback}>Leave New Feedback</button>
    </div>
  );
}

export default Success;
