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
        <Button color="primary" size="small">
          Small
        </Button>
        <Button color="secondary" size="medium">
          Medium
        </Button>
        <Button color="error" size="large">
          Large
        </Button>
      </div>
      <div>VariantButton</div>
      <div>
        <Button color="primary" size="small" variant="outlined">
          Outlined
        </Button>
      </div>
    </>
  );
};
