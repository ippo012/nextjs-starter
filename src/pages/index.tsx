import React from 'react';
import { NextPage } from 'next';
import { Button } from 'components/Button';
import { Checkbox } from 'components/checkbox';

const IndexPage: NextPage = () => {
  return (
    <>
      <Button onPress={() => alert('Button pressed!')}>Press me</Button>
      <Checkbox onChange={(isChecked) => alert(isChecked ? 'Checked!' : 'Unchecked')}>
        Check me
      </Checkbox>
    </>
  );
};

export default IndexPage;
