import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
  damping: 0.07,
}

export default function Scroll() {

  useEffect(() => {
    Scrollbar.init(document.body, options)
  }, [])

  return null;
}