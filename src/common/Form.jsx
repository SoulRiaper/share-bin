import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"

export const FormContext = createContext();

function Form ({children}) {
  const [data, setData] = useState({});

  const updateData = useCallback((property, value) => { 
    setData(prev => (Object.assign(prev, {[property]: value})));
  }, []);

  const saveData = () => {
    console.log(data);
  }

  return (
    <FormContext.Provider value={{ data, updateData}}>
      {children}
      <div className="d-flex justify-content-between">
        <div></div>
        <button onClick={saveData} className="btn btn-sm btn-outline-success">Save bin</button>
      </div>
    </FormContext.Provider>
  )
}

export const useForm = (propName) => {
  const { updateData } = useContext(FormContext);
  return useCallback((value) => {
    updateData(propName, value)
  }, [propName, updateData]);
}

export const useValidation = (value, validationFunc) => {
  const [valid, setValid] = useState(true);
  useEffect(() => {
      setValid(validationFunc(value))
    }, [value, validationFunc])
  return valid;
}

export default Form