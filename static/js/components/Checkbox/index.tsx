// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Checkbox from '@material-ui/core/Checkbox';

// constants
import { COLORS_THEME } from '@styles/variables';

const useStyles = makeStyles((theme) => ({
  root: {
    color: COLORS_THEME.GREY_BORDER,
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
    '&.Mui-checked': {
      color: `${COLORS_THEME.MID_BLUE} !important`,
    },
  },
}));

interface ICheckbox {
  checked: boolean;
  onChange: VoidFunction;
  className?: string;
}

function CheckBox({ checked, onChange, className }: ICheckbox) {
  const classes = useStyles();
  return (
    <Checkbox
      className={`${classes.root} ${className}`}
      checked={checked}
      onChange={onChange}
    />
  );
}
export default memo(CheckBox);
