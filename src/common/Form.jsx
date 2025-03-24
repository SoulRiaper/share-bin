import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"

export const FormContext = createContext();

function Form ({children}) {
  const [data, setData] = useState({});

  const updateData = useCallback((property, value) => { 
    setData(prev => (Object.assign(prev, {[property]: value})));
  }, []);

  return (
    <FormContext.Provider value={{ data, updateData}}>
      {children}
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