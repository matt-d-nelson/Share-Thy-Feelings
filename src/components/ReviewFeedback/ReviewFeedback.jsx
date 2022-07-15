import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ReviewFeedback() {
  const feeling = useSelector((store) => store.feelingReducer);
  const understanding = useSelector((store) => store.understandingReducer);
  const supported = useSelector((store) => store.supportedReducer);
  const comment = useSelector((store) => store.commentReducer);
  const history = useHistory();

  const previousScreen = () => {
    history.push("/comment");
  };

  const submitFeedback = () => {
    console.log("in submitFeedback");

    const newFeedback = {
      feeling: feeling,
      understanding: understanding,
      supported: supported,
      comment: comment,
    };
    console.log(newFeedback);

    axios({
      method: "post",
      url: "/feedback",
      data: newFeedback,
    })
      .then((response) => {
        console.log(response);
        history.push("/success");
      })
      .catch((err) => {
        console.log(err);
        alert("error submitting feedback");
      });
  };

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {supported}</p>
      <p>Comments: {comment}</p>
      <button onClick={previousScreen}>Back</button>
      <button onClick={submitFeedback}>Submit</button>
    </div>
  );
}

export default ReviewFeedback;
