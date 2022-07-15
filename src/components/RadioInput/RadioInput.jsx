import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function RadioInput(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentVal = useSelector((store) => store[props.data.reducer]);
  const [radio, setRadio] = useState(currentVal);

  const updateRadio = () => {
    setRadio(event.target.value);
  };

  const previousScreen = () => {
    dispatch({ type: props.data.action, payload: Number(radio) });
    history.push(props.data.previous);
  };

  const dispatchRadio = () => {
    if (radio != "") {
      dispatch({ type: props.data.action, payload: Number(radio) });
      history.push(props.data.next);
    } else {
      alert("Please select a value.");
    }
  };

  return (
    <div>
      <h2>{props.data.title}</h2>
      <label>
        <input
          type="radio"
          value={1}
          name={props.data.name}
          onChange={updateRadio}
          defaultChecked={currentVal === 1 ? "checked" : ""}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          value={2}
          name={props.data.name}
          onChange={updateRadio}
          defaultChecked={currentVal === 2 ? "checked" : ""}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          value={3}
          name={props.data.name}
          onChange={updateRadio}
          defaultChecked={currentVal === 3 ? "checked" : ""}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          value={4}
          name={props.data.name}
          onChange={updateRadio}
          defaultChecked={currentVal === 4 ? "checked" : ""}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          value={5}
          name={props.data.name}
          onChange={updateRadio}
          defaultChecked={currentVal === 5 ? "checked" : ""}
        />
        5
      </label>
      <button onClick={previousScreen}>Back</button>
      <button onClick={dispatchRadio}>Next</button>
    </div>
  );
}

export default RadioInput;
