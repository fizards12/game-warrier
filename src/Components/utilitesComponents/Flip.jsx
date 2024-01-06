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

const Flip = ({
  className = "",
  direction = "x",
  delay = 0,
  children = "",
  ParentComponent = null,
  parentProps = {},
  once = true,
}) => {
    const [inViewRef, inView] = useInView({
        triggerOnce: once,
        rootMargin: "0% 0% -30% 0%",
      });
      const [isVisible, setVisible] = useState(false);
    
      const Parent = !ParentComponent ? DefaultParent : ParentComponent;
    
      useEffect(() => {
        if (delay !== 0) {
          setTimeout(() => {
            setVisible(inView);
          }, delay);
        } else {
          setVisible(inView);
        }
    
        return () => {};
      }, [inView]);
      return (
        <CSSTransition
          in={isVisible}
          timeout={{ enter: 1000, exit: 0 }}
          classNames={`fade-${direction}`}
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

export default Flip;
