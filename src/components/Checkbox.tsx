import React, { ReactNode } from 'react';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox } from '@react-aria/checkbox';

type CheckboxProps = {
  onChange: (isChecked: boolean) => void;
  children: ReactNode;
};

export const Checkbox = (props: CheckboxProps) => {
  const state = useToggleState(props);
  const ref = React.useRef() as React.RefObject<HTMLInputElement>;
  const { inputProps } = useCheckbox(props, state, ref);

  return (
    <label style={{ display: 'block' }}>
      <input {...inputProps} ref={ref} />
      {props.children}
    </label>
  );
};
