import { useEffect, useRef, useState } from "react"


function BinEditor (props) {
  const [text, setText] = useState(props.initialText ? props.initialText : "");
  const areaRef = useRef(null);

  const calculateHeight = () => {
    if (areaRef.current) {
      areaRef.current.style.height = 'auto';
      areaRef.current.style.height = `${areaRef.current.scrollHeight}px`;
    }
  }

  useEffect(() => {
    calculateHeight();
  }, [text])
  return (
    <div className="p-3">
      <h4>Bin editor</h4>
      <textarea
        ref={areaRef}
        className="form-control bin-editor-area"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your bin..."
        rows={10}
        style={ {
          resize: "none",
          overflow: "hidden",
        }}
      />
    </div>
  )
}

export default BinEditor;