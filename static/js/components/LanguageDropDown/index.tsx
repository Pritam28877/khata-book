import React, { useCallback } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import {
  languageConfig,
  ILanguageConfig,
  LANG_FROM,
} from 'src/components/LanguagePicker/constants';
import { DEFAULT_LOCALE } from 'src/constants/locale';
import { useLanguageContext } from 'src/components/LanguageProvider/context';
import { getLocale } from 'src/helpers/locale';

import tickIcon from 'src/assets/images/tickIcon.svg';
import ArrowIcon from 'src/components/Book/desktop/components/icons/ArrowIcon';

import useStyles from './styles';

interface IDropdown {
  fullWidth?: boolean;
  label?: string;
  defaultValue?: string;
  from?: LANG_FROM;
  onClick?: () => void;
  onLanguageSelected?: (language: string) => void;
  onLanguageChanged?: (language: string) => void;
}

const LanguageDropdown = ({
  fullWidth,
  label,
  onClick,
  onLanguageSelected,
  onLanguageChanged,
  from = LANG_FROM.INITIAL,
}: IDropdown) => {
  const classes = useStyles();
  const { updateLocale } = useLanguageContext();
  const handleChange = (e: object, value: any) => {
    changeLanguage(value);
  };

  const RenderDropDownPaper = (props: object) => {
    return <Paper {...props} className={classes.dropdownListPaper} />;
  };

  const changeLanguage = useCallback(
    (config: ILanguageConfig): void => {
      const oldLanguage = getLocale();
      // analytics
      onLanguageSelected && onLanguageSelected(config.value);

      // analytics
      if (oldLanguage !== config.value)
        onLanguageChanged && onLanguageChanged(config.value);

      updateLocale(config.value);
    },
    [updateLocale, onLanguageSelected]
  );

  const getSelectedLanguage = () => {
    const selectedValue = getLocale() || DEFAULT_LOCALE;
    return languageConfig.find((option) => option.value === selectedValue);
  };

  return (
    <Autocomplete
      id="drop-down"
      options={languageConfig}
      fullWidth={fullWidth}
      forcePopupIcon={true}
      closeIcon={false}
      openOnFocus
      selectOnFocus={false}
      popupIcon={
        from === LANG_FROM.INITIAL ? (
          <KeyboardArrowDownIcon className={classes.arrowIcon} />
        ) : (
          <ArrowIcon className={classes.popupIcon} />
        )
      }
      onChange={handleChange}
      onOpen={onClick}
      value={getSelectedLanguage() || null}
      className={`${classes.root} ${
        from == LANG_FROM.INITIAL && classes.onBoardingLangDropdown
      }`}
      classes={{
        listbox: classes.listBox,
        groupUl: classes.dropdownOption,
        popper: `${classes.dropdownOption} ${
          from == LANG_FROM.INITIAL && classes.onBoardingPopper
        }`,
      }}
      PaperComponent={RenderDropDownPaper}
      getOptionLabel={(option: ILanguageConfig) => `${option.text}`}
      renderOption={(option: ILanguageConfig, { selected }) => (
        <div className={classes.dropdownOption}>
          <div className={classes.optionLeftSide}>
            {from == LANG_FROM.SETTINGS && (
              <span className={classes.label}>{option['labelText']}</span>
            )}
            <span className={classes.labelText}>{option['text']}</span>
          </div>
          {selected && <img src={tickIcon} alt="tick" />}
        </div>
      )}
      renderInput={(params: any) => {
        return (
          <TextField
            {...params}
            className={classes.dropdownInput}
            id="text"
            placeholder={label}
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
              readOnly: true,
            }}
          />
        );
      }}
    />
  );
};

export default LanguageDropdown;
