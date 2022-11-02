import React from 'react';
import useStyles from './styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Paper, TextField } from '@material-ui/core';
import { formatCurrencyOptions, ICurrencyConfig } from './helpers';
import tickIcon from 'src/assets/images/tickIcon.svg';
import ArrowIcon from '@components/Book/desktop/components/icons/ArrowIcon';
import { useCurrencyContext } from '@components/CurrencyProvider/context';
import { DEFAULT_CURRENCY } from 'src/constants/currency';
import { getCurrencyOption } from 'src/helpers/currency';
import {
  onCurrencyChanged,
  onCurrencyDropdownClicked,
} from '@components/Settings/desktop/analytics';

interface IProps {
  fullWidth: boolean;
}

function CurrencyDropDown(props: IProps) {
  const { fullWidth } = props;
  const classes = useStyles();
  const options = formatCurrencyOptions();
  const { updateCurrency } = useCurrencyContext();

  const RenderDropDownPaper = ({ children, ...props }: any) => {
    return (
      <Paper {...props} className={classes.dropdownListPaper}>
        {children}
      </Paper>
    );
  };

  return (
    <Autocomplete
      id="drop-down"
      options={options}
      fullWidth={fullWidth}
      forcePopupIcon={true}
      closeIcon={false}
      openOnFocus
      selectOnFocus={false}
      getOptionLabel={(option) => option.label}
      value={getCurrencyOption()}
      popupIcon={<ArrowIcon className={classes.popupIcon} />}
      className={classes.root}
      classes={{
        listbox: classes.listBox,
        groupUl: classes.dropdownOption,
        popper: classes.dropdownOption,
      }}
      onChange={(e, v) => {
        updateCurrency(v?.id || DEFAULT_CURRENCY);
        onCurrencyChanged(v?.id || DEFAULT_CURRENCY);
      }}
      PaperComponent={RenderDropDownPaper}
      renderOption={(option: ICurrencyConfig, { selected }) => {
        return (
          <div className={classes.dropdownOption}>
            <div className={classes.optionLeftSide}>
              <span className={classes.labelText}>{option['label']}</span>
            </div>
            {selected && <img src={tickIcon} alt="tick" />}
          </div>
        );
      }}
      renderInput={(params: any) => {
        return (
          <TextField
            onClick={() => {
              onCurrencyDropdownClicked();
            }}
            {...params}
            className={classes.dropdownInput}
            id="text"
            placeholder="Change Currency"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
              readOnly: false,
            }}
          />
        );
      }}
    />
  );
}

export default CurrencyDropDown;
