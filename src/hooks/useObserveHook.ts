import { useState, useEffect } from 'react';

interface IProps {
  el: string;
  callback?: (entries?: Array<Object>) => void;
  watch?: (any[] | [])
};
let observer: any;
const useObserveHook = (props: IProps) => {

  const { el, callback, watch = [] } = props;

  useEffect(() => {
    let node: any = document.querySelector(el);

    if (node) {

      observer = new IntersectionObserver((entries) => {
        callback && callback(entries)
      });
      observer.observe(node);

    }
    return () => {
      if (observer && node) {
        observer.unobserve(node);
        observer.disconnect()
      }

    }
  }, watch)
};
export default useObserveHook;