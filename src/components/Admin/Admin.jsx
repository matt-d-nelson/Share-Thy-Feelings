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
import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
  const [feedback, setFeedback] = useState([]);

  const getFeedback = () => {
    axios({
      method: "GET",
      url: "/feedback",
    })
      .then((response) => {
        console.log(response.data);
        setFeedback(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("error getting feedback");
      });
  };

  const deleteFeedback = () => {
    console.log("in deleteFeedback", event.target.id);
    axios({
      method: "DELETE",
      url: `/feedback/${event.target.id}`,
    })
      .then((response) => {
        console.log(response);
        getFeedback();
      })
      .catch((err) => {
        console.log(err);
        alert("error deleting feedback");
      });
  };

  const flagFeedback = () => {
    console.log("in flagFeedback", event.target.id);
    axios({
      method: "PUT",
      url: `/feedback/${event.target.id}`,
    })
      .then((response) => {
        console.log(response);
        getFeedback();
      })
      .catch((err) => {
        console.log(err);
        alert("error flagging feedback");
      });
  };

  useEffect(getFeedback, []);

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
