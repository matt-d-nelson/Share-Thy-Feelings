//---------------------Imports---------------------//

// functional libraries
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

// styling libraries
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

//---------------------Virt DOM---------------------//

function ReviewFeedback() {
  // set variables from reducer values
  const feeling = useSelector((store) => store.feelingReducer);
  const understanding = useSelector((store) => store.understandingReducer);
  const supported = useSelector((store) => store.supportedReducer);
  const comment = useSelector((store) => store.commentReducer);

  const history = useHistory();
  const dispatch = useDispatch();

  // navigate to previous screen on "Retreat" button click
  const previousScreen = () => {
    history.push("/comment");
  };

  const submitFeedback = () => {
    console.log("in submitFeedback");

    // combine reducer values into newFeedback object
    const newFeedback = {
      feeling: feeling,
      understanding: understanding,
      supported: supported,
      comment: comment,
    };
    console.log(newFeedback);

    // POST request to server
    axios({
      method: "POST",
      url: "/feedback",
      data: newFeedback,
    })
      .then((response) => {
        console.log(response);
        // INITIALIZE dispatch resets all reducer states
        dispatch({ type: "INITIALIZE" });
        //navigate to success page
        history.push("/success");
      })
      .catch((err) => {
        console.log(err);
        alert("error submitting feedback");
      });
  };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Card
            style={{
              backgroundColor: "rgba(252, 237, 181, 0.43)",
              height: "100%",
            }}
            elevation={15}
          >
            <CardContent>
              <Typography variant="h5">Review thy Feedback</Typography>
              <img
                src="images/reading.jpeg"
                style={{
                  height: 400,
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              />
              <Typography variant="h6">Feelings: {feeling}</Typography>
              <Typography variant="h6">
                Understanding: {understanding}
              </Typography>
              <Typography variant="h6">Support: {supported}</Typography>
              <Typography variant="h6">Comments: {comment}</Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <ButtonGroup style={{ paddingBottom: 10 }}>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={previousScreen}
                >
                  <Typography variant="h5">Retreat</Typography>
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={submitFeedback}
                >
                  <Typography variant="h5">Submit</Typography>
                </Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ReviewFeedback;
