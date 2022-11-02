// libs
import React, { memo, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//components
import CheckBox from 'src/components/Checkbox';

// constants
import { COLORS_THEME } from '@styles/variables';

// icons
import selectMultipleIcon from 'src/assets/images/selectMultipleIcon.svg';
import selectedCheckboxIcon from 'src/assets/images/selectedCheckboxIcon.svg';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

interface IMultipleSelectionHeader {
  selectAll: boolean;
  onSelect: VoidFunction;
  enableMultipleSelection: boolean;
  handleMultipleSelectionClick: VoidFunction;
  selectedCount: number;
  onUnSelect?: VoidFunction;
  handleRestore: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  multipleSelectionWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  selectMultipleBtn: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '8px 12px',
    border: '1px solid #DBE0E5',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 500,
    textTransform: 'capitalize',
    color: COLORS_THEME.TEXT_DISABLED,
  },
  selectMultipleIcon: {
    width: '20px',
    height: '20px',
    marginRight: '8px',
  },
  checkboxWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  selectedCheckbox: {},
  selectedCount: {
    fontSize: '16px',
    fontWeight: 500,
    marginLeft: '7px',
    color: COLORS_THEME.GREY_BORDER,
  },
  restoreBtn: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '6px 12px',
    border: `1px solid ${COLORS_THEME.MID_BLUE}`,
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 500,
    textTransform: 'capitalize',
    color: COLORS_THEME.MID_BLUE,
  },
  checkboxIcon: {
    width: '21px',
    height: '21px',
    cursor: 'pointer',
  },
}));

function MultipleSelectionHeader({
  selectAll,
  onSelect,
  enableMultipleSelection,
  handleMultipleSelectionClick,
  selectedCount,
  onUnSelect,
  handleRestore,
}: IMultipleSelectionHeader) {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const [count, setCount] = useState(selectedCount);

  useEffect(() => {
    setCount(selectedCount);
  }, [selectedCount]);

  return (
    <div className={classes.multipleSelectionWrapper}>
      {enableMultipleSelection ? (
        <>
          <div className={classes.checkboxWrapper}>
            {selectedCount > 0 && !selectAll ? (
              <img
                src={selectedCheckboxIcon}
                alt="selected"
                onClick={onUnSelect}
                className={classes.checkboxIcon}
              />
            ) : (
              <CheckBox
                checked={selectAll}
                onChange={onSelect}
                className={classes.selectedCheckbox}
              />
            )}
            <Typography className={classes.selectedCount}>
              {t('selected', [count])}
            </Typography>
          </div>
          <Button className={classes.restoreBtn} onClick={handleRestore}>
            {t('restore')}
          </Button>
        </>
      ) : (
        <Button
          className={classes.selectMultipleBtn}
          onClick={handleMultipleSelectionClick}
        >
          <img
            src={selectMultipleIcon}
            alt="select multiple"
            className={classes.selectMultipleIcon}
          />
          {t('select_multiple')}
        </Button>
      )}
    </div>
  );
}
export default memo(MultipleSelectionHeader);
