import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function TextInput(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentVal = useSelector((store) => store[props.data.reducer]);
  const [text, setText] = useState(currentVal);

  const updateText = () => {
    setText(event.target.value);
  };

  const previousScreen = () => {
    dispatch({ type: props.data.action, payload: text });
    history.push(props.data.previous);
  };

  const dispatchText = () => {
    dispatch({ type: props.data.action, payload: text });
    history.push(props.data.next);
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
              <Typography variant="h5">{props.data.title}</Typography>
            </CardContent>
            <CardMedia>
              {text === "" ? (
                <img
                  src={props.data.good}
                  style={{
                    height: 500,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                />
              ) : (
                <img
                  src={props.data.bad}
                  style={{
                    height: 500,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                />
              )}
            </CardMedia>
            <CardActions style={{ justifyContent: "center" }}>
              <TextField
                variant="filled"
                label="Comments"
                onChange={updateText}
                defaultValue={currentVal}
                fullWidth
              ></TextField>
            </CardActions>

            <ButtonGroup style={{ paddingBottom: 10 }}>
              <Button
                color="primary"
                variant="outlined"
                onClick={previousScreen}
              >
                <Typography variant="h5">Retreat</Typography>
              </Button>
              <Button color="primary" variant="outlined" onClick={dispatchText}>
                <Typography variant="h5">Advance</Typography>
              </Button>
            </ButtonGroup>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default TextInput;
