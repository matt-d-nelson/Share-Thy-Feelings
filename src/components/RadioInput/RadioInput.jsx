import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Radio,
  CardMedia,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  ButtonGroup,
} from "@mui/material";

function RadioInput(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentVal = useSelector((store) => store[props.data.reducer]);
  const [radio, setRadio] = useState(currentVal);

  const updateRadio = () => {
    setRadio(Number(event.target.value));
  };

  const previousScreen = () => {
    dispatch({ type: props.data.action, payload: radio });
    history.push(props.data.previous);
  };

  const dispatchRadio = () => {
    if (radio != "") {
      dispatch({ type: props.data.action, payload: radio });
      history.push(props.data.next);
    } else {
      alert("Please select a value.");
    }
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
              {radio > 2 ? (
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
              <FormControl>
                <RadioGroup defaultValue={currentVal} row>
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label={<Typography variant="h5">1</Typography>}
                    onChange={updateRadio}
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label={<Typography variant="h5">2</Typography>}
                    onChange={updateRadio}
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    label={<Typography variant="h5">3</Typography>}
                    onChange={updateRadio}
                  />
                  <FormControlLabel
                    value={4}
                    control={<Radio />}
                    label={<Typography variant="h5">4</Typography>}
                    onChange={updateRadio}
                  />
                  <FormControlLabel
                    value={5}
                    control={<Radio />}
                    label={<Typography variant="h5">5</Typography>}
                    onChange={updateRadio}
                  />
                </RadioGroup>
              </FormControl>
              <br />
            </CardActions>
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
                onClick={dispatchRadio}
              >
                <Typography variant="h5">Advance</Typography>
              </Button>
            </ButtonGroup>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default RadioInput;
