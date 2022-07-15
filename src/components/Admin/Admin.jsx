//---------------------Imports---------------------//

// functional libraries
import axios from "axios";
import { useEffect, useState } from "react";

// styling libraries
import {
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

//---------------------Virt DOM---------------------//

function Admin() {
  // create feedback state
  const [feedback, setFeedback] = useState([]);

  // GET request
  const getFeedback = () => {
    axios({
      method: "GET",
      url: "/feedback",
    })
      .then((response) => {
        console.log(response.data);
        // update feedback state with response array
        setFeedback(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("error getting feedback");
      });
  };

  // DELETE request
  const deleteFeedback = () => {
    console.log("in deleteFeedback", event.target.id);
    // send request with row id to delete
    axios({
      method: "DELETE",
      url: `/feedback/${event.target.id}`,
    })
      .then((response) => {
        console.log(response);
        // update DOM
        getFeedback();
      })
      .catch((err) => {
        console.log(err);
        alert("error deleting feedback");
      });
  };

  // PUT request
  const flagFeedback = () => {
    console.log("in flagFeedback", event.target.id);
    // send request with row id to flag
    axios({
      method: "PUT",
      url: `/feedback/${event.target.id}`,
    })
      .then((response) => {
        console.log(response);
        // update DOM
        getFeedback();
      })
      .catch((err) => {
        console.log(err);
        alert("error flagging feedback");
      });
  };

  // useEffect to send GET request on page load
  useEffect(getFeedback, []);

  // conditional rendering for flagged button text
  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Card
            style={{
              backgroundColor: "rgba(252, 237, 181, 0.75)",
              height: "100%",
            }}
            elevation={15}
          >
            <CardContent>
              <Typography variant="h5">Admin</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Feeling</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Comprehension</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Support</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Comments</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Delete</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Flag</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feedback.map((thisFeedback) => (
                    <TableRow key={thisFeedback.id}>
                      <TableCell style={{ color: "#300000" }}>
                        {thisFeedback.feeling}
                      </TableCell>
                      <TableCell style={{ color: "#300000" }}>
                        {thisFeedback.understanding}
                      </TableCell>
                      <TableCell style={{ color: "#300000" }}>
                        {thisFeedback.support}
                      </TableCell>
                      <TableCell style={{ color: "#300000" }}>
                        {thisFeedback.comments}
                      </TableCell>
                      <TableCell>
                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={deleteFeedback}
                          id={thisFeedback.id}
                        >
                          Delete
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={flagFeedback}
                          id={thisFeedback.id}
                        >
                          {thisFeedback.flagged ? "Unflag" : "Flag"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Admin;
