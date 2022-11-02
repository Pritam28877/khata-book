// libs
import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
function Loader() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={11}>
        <h2>
          <div> Oops! You have stepped into the unchartered waters</div>
        </h2>
      </Grid>
    </Grid>
  );
}

export default memo(Loader);
