import React from 'react';
import useStyles from './styles';
import TextField from '@material-ui/core/TextField';
// icons
import errorIcon from 'src/assets/images/errorIcon.svg';
import searchIcon from 'src/assets/images/search.svg';
import { CircularProgress } from '@material-ui/core';

interface IProps {
  name: string;
  value: string | number;
  placeholder: string;
  maxLength?: number;
  autoComplete?: string;
  onChangeHandler?: Function;
  style?: object;
  error?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  isSearchBar?: boolean;
}
const TextInputField = (props: IProps) => {
  const classes = useStyles();
  const {
    value,
    name,
    placeholder,
    style,
    onChangeHandler,
    autoComplete,
    error,
    maxLength,
    readOnly,
    autoFocus,
    multiline,
    disabled,
    loading,
    className,
    isSearchBar,
  } = props;
  return (
    <div className={`${classes.textInputContainer} ${className}`}>
      <TextField
        disabled={disabled}
        variant="outlined"
        value={value}
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        style={style}
        className={`${classes.textInputField} ${error && classes.error} `}
        onChange={(event) => {
          onChangeHandler && onChangeHandler(event);
        }}
        autoComplete={autoComplete || 'off'}
        multiline={multiline}
        autoFocus={autoFocus}
        inputProps={{
          autoComplete: autoComplete || 'off',
          readOnly: readOnly,
          maxLength: maxLength,
        }}
        InputProps={{
          ...(loading ? { endAdornment: <CircularProgress size={20} /> } : {}),
          startAdornment: isSearchBar ? (
            <img src={searchIcon} alt="search" className={classes.searchIcon} />
          ) : null,
        }}
      />
      {error && (
        <img src={errorIcon} alt="error" className={classes.errorIcon} />
      )}
    </div>
  );
};
export default TextInputField;
