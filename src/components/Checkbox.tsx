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
    <div className="flex items-center">
      <input
        {...inputProps}
        ref={ref}
        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      />
      <label style={{ display: 'block' }} className="ml-2 block text-sm leading-5 text-gray-900">
        {props.children}
      </label>
    </div>
  );
};
