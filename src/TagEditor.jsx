import { useEffect, useState } from "react";
import { useForm, useValidation } from "./common/Form"


const TagEditor = (props) => {
  const updateData = useForm(props.name);
  const [tags, setTags] = useState([]);
  const [text, setText] = useState('');
  const valid = useValidation(text, (val) => tags.indexOf(val) === -1);

  useEffect(() => {
    updateData(tags);
  }, [tags, updateData]);

  const addTag = () => {
    if (text.trim() !== '' && tags.indexOf(text) === -1) {
      setTags(prev => [...prev, text]);
      setText('');
    }
  }

  const removeTag = (tagIndex) => {
    const newItems = tags.filter((_, i) => i !== tagIndex);
    setTags(newItems);
  }

  const handleEnterKey = (e) => {
    if (e.key == 'Enter') {
      addTag();
      setText('');
    }
  }

  return (
    <div>
      <div className="tag-container mb-2">
        {tags.map((tag, index) => (
          <span key={index} className="badge rounded-pill bg-secondary">{tag}
            <i onClick={() => removeTag(index)} className="delete-tag ms-1 bi bi-x-lg"></i>
          </span>
        ))}
      </div>
      <input
        onChange={(e) => {
          return setText(e.target.value)
        }}
        onBlur={addTag}
        onKeyDown={handleEnterKey}
        value={text}
        className={"form-control me-2 bin-editor-area " + (valid ? '' : 'is-invalid' )} 
        placeholder="Enter your tags...">
      </input>
    </div>
  )
}

export default TagEditor