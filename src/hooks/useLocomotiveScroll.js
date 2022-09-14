import { useEffect, useRef } from "react";
import LocomotiveScroll, { Scroll } from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocomotiveScroll = (ref) => {
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if(ref.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: ref.current,
        smooth: true
      })
    }

    return () => {
      locomotiveScrollRef.current?.destroy();
    }
  }, [ref]);
  return [locomotiveScrollRef];
  
};
export default useLocomotiveScroll;