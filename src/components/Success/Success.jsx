//---------------------Imports---------------------//

// functional libraries
import { useHistory } from "react-router-dom";

// styling libraries
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

//---------------------Virt DOM---------------------//

function Success() {
  const history = useHistory();

  // navigate to begining of survey on "Leave New Feedback" click
  const beginNewFeedback = () => {
    history.push("/");
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
              <Typography variant="h5">Thank Thee!</Typography>
              <CardMedia>
                <img
                  src="images/thanks.jpg"
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
                  onClick={beginNewFeedback}
                >
                  <Typography variant="h5">Leave New Feedback</Typography>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Success;
