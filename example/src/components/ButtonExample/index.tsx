import React, { FC } from 'react';

import { Button } from '../../reactComponentLib';

export const ButtonExample: FC = () => {
  return (
    <>
      <div>ColorButton</div>
      <div>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Seconday</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
      </div>
      <div>SizeButton</div>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
    </>
  );
};
