import { lazy } from "react";

export const lazyLoad = (componentPath, componentName = null) => {
  return lazy(() => {
    const promise = import(`../Components/${componentPath}.jsx`);
    if (componentName === null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[componentName] }));
    }
  });
};
