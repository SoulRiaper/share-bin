import { useEffect, useRef, useState } from "react"
import { useForm, useValidation } from "./common/Form";


function BinEditor (props) {
  const updateForm = useForm(props.name);
  const [text, setText] = useState(props.initialText ? props.initialText : "");
  const areaRef = useRef(null);
  const valid = useValidation(text, (val) => val !== '');

  const calculateHeight = () => {
    if (areaRef.current) {
      areaRef.current.style.height = 'auto';
      areaRef.current.style.height = `${areaRef.current.scrollHeight}px`;
    }
  }

  const inputHandler = (e) => {
    const value = e.target.value;
    setText(() => value);
    updateForm(value);
  }

  useEffect(() => {
    calculateHeight();
  }, [text])
  return (
      <textarea
        ref={areaRef}
        className={"form-control bin-editor-area " + (valid ? '' : 'is-invalid' )}
        value={text}
        onChange={(e) => inputHandler(e)}
        placeholder="Enter your bin..."
        rows={10}
        style={{
          resize: "none",
          overflow: "hidden",
        }}
      />
  )
}

export default BinEditor;