//---------------------Imports---------------------//

// functional libraries
import { useHistory } from "react-router-dom";

// styling libraries
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  CardMedia,
} from "@mui/material";

function FeedbackHome() {
  const history = useHistory();

  const beginFeedback = () => {
    //navigate to /feeling url on "Regale" button click
    history.push("/feeling");
  };

  //---------------------Virt DOM---------------------//

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
              <Typography variant="h5">
                Please regale us with the tale of thy day...
              </Typography>
            </CardContent>
            <CardMedia>
              <img
                src="images/writingPic.jpeg"
                style={{
                  height: 400,
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              />
            </CardMedia>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                color="primary"
                variant="outlined"
                onClick={beginFeedback}
              >
                <Typography variant="h5">Regale</Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default FeedbackHome;
