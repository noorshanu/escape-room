"use client"
import { useEffect, useMemo, useState } from "react";

const useIsInViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  try {
    var observer = useMemo(

      () =>
        new IntersectionObserver(([entry]) =>{
          if (!isIntersecting && entry.intersectionRatio) {
            setIsIntersecting(entry.isIntersecting)
          }
        }
          
          
        ),
      []
    );
  } catch (error) {
    console.log("error");
  }
  

  useEffect(() => {
    observer?.observe(ref.current);

    return () => {
      observer?.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default useIsInViewport
