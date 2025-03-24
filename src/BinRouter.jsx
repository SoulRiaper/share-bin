import React, { useEffect, useState } from "react";
import BinEditor from "./BinEditor";
import BinForm from "./BinForm";
import Form from "./common/Form";
import TagEditor from "./TagEditor";
import parsePath from "./utils/pathParser";

function BinRouter ({children, defaultComponent}) {
  const [child, setChild] = useState(null)

  const handleHash = () => {
    const hash = location.hash.slice(1);
    let validChild = (defaultComponent);
    React.Children.forEach(children, (ch) => {
      const { pattern } = ch.props;
      const additionalProps = parsePath(hash, pattern)
      if (additionalProps != null) {
        validChild = React.cloneElement(ch, {...additionalProps})
      }
    })
    if (validChild) {
      setChild(validChild);
    }
  }

  const windowListener = () => { handleHash() };

  useEffect(() => {
    window.addEventListener('hashchange', windowListener);
    windowListener();
    return () => {
      window.removeEventListener('hashchange', windowListener)
    }
  }, []);

  return (
    <>
      {child}
    </>
  )
}

export default BinRouter;