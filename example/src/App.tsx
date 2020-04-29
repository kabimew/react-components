import React, { FC } from 'react';

import { Gap, Input } from './reactComponentLib';

const App: FC = () => {
  return (
    <>
      <div>
        Gap Start:
        <Gap py={3} px={3} />
        Gap end
      </div>
      <Input bgcolor="white" />
    </>
  );
};

export default App;
