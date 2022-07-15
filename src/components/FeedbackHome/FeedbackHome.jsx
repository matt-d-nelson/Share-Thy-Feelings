import { useHistory } from "react-router-dom";

function FeedbackHome() {
  const history = useHistory();

  const beginFeedback = () => {
    history.push("/feeling");
  };

  return (
    <div>
      <h2>Please regale us with the story of your day...</h2>
      <button onClick={beginFeedback}>Regale</button>
    </div>
  );
}

export default FeedbackHome;
