import { lazy } from "react";
const callBack = (componentPath, componentName) => {
  const promise = import(/* @vite-ignore */ componentPath);
  if (componentName === null) {
    return promise;
  } else {
    return promise.then((module) => ({ default: module[componentName] }));
  }
};
const lazyLoad = (componentPath, componentName = null, delay = 0) => {
  if (delay === 0) {
    return lazy(() => callBack(componentPath, componentName));
  } else {
    return lazy(() =>
      wait(delay).then(() => callBack(componentPath, componentName))
    );
  }
};

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
export default lazyLoad;
