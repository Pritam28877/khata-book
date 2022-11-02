// libs
import React, { memo, useRef, useEffect, useState } from 'react';

export interface IIOElementProps extends React.HTMLAttributes<HTMLDivElement> {
  onVisible?: VoidFunction;
  onHidden?: VoidFunction;
  children?: React.ReactNode;
  once?: boolean;
  options?: IntersectionObserverInit;
  className?: string;
}

const EMPTY_FUNC = () => {
  /** DO NOTHING */
};

function IOElement({
  children,
  onVisible = EMPTY_FUNC,
  onHidden = EMPTY_FUNC,
  once = false,
  options = {},
  className = '',
  ...props
}: IIOElementProps) {
  const [isObserving, setIsObserving] = useState(true);
  const boxElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onVisible();
          once && setIsObserving(false);
        } else {
          onHidden();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    let node: HTMLDivElement | null;
    if (isObserving && boxElement.current !== null) {
      observer.observe(boxElement.current);
      node = boxElement.current;
    }

    return () => {
      if (isObserving && node !== null) {
        observer.unobserve(node);
      }
      observer.disconnect();
    };
  }, [isObserving, onHidden, onVisible, once, options]);

  return (
    <div className={className} ref={boxElement} {...props}>
      {children !== undefined && children}
    </div>
  );
}

export default memo(IOElement);
