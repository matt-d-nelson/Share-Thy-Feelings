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
      <h2>{props.data.title}</h2>
      <input type="text" onChange={updateText} defaultValue={currentVal} />
      <button onClick={previousScreen}>Back</button>
      <button onClick={dispatchText}>Next</button>
    </div>
  );
}

export default TextInput;
