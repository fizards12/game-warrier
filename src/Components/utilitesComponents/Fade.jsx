/* eslint-disable react/display-name */
import { forwardRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import "./animation.css";
const DefaultParent = forwardRef((props, ref) => (
  <div ref={ref} {...props}>
    {props.children}
  </div>
));

const Fade = ({
  className = "",
  direction = "right",
  delay = 0,
  children = "",
  isExist = true,
  duration=1000,
  ParentComponent = null,
  parentProps = {},
  once = true,
  animateExit=false
}) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: once,
  });
  const [isVisible, setVisible] = useState(false);
  const exitDuration = animateExit? 1000:0;
  const Parent = !ParentComponent ? DefaultParent : ParentComponent;

  useEffect(() => {
    if (delay !== 0) {
      setTimeout(() => {
        setVisible(inView && isExist);
      }, delay);
    } else {
      setVisible(inView && isExist);
    }

    return () => {};
  }, [inView, isExist]);
  return (
    <CSSTransition
      in={isVisible}
      timeout={{ enter: duration, exit: exitDuration }}
      classNames={`fade-${direction}`}
      onExit={()=>setVisible(isExist)}
    >
      {(state) => (
        <Parent
          {...parentProps}
          className={`${className} ${
            state === "entered" ? "" : "initial-state"
          }`}
          ref={(el) => {
            inViewRef(el);
          }}
        >
          {children}
        </Parent>
      )}
    </CSSTransition>
  );
};
export default Fade;
