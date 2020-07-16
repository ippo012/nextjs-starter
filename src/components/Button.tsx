import React, { ReactNode } from 'react';
import { useButton } from '@react-aria/button';

type ButtonProps = {
  onPress: () => void;
  children: ReactNode;
};

export const Button = (props: ButtonProps) => {
  const ref = React.useRef() as React.RefObject<HTMLButtonElement>;
  const { buttonProps } = useButton(props, ref);

  return (
    <button
      {...buttonProps}
      ref={ref}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {props.children}
    </button>
  );
};
