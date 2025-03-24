import { useState } from "react";
import { useForm, useValidation } from "./common/Form"


const InlineTextControl = (props) => {
  const updateData = useForm(props.name);
  const [text, setText] = useState('');
  const valid = useValidation(text, (val) => !props.useValidate || val !== '');

  return (
    <>
      <input
        onChange={(e) => {
          updateData(props.name)
          return setText(e.target.value)
        }}
        value={text}
        className={"form-control bin-editor-area " + (valid ? '' : 'is-invalid' )} 
        placeholder={(props.placeholder ? props.placeholder : "Enter bin name...")}>
      </input>
    </>
  )
}

export default InlineTextControl