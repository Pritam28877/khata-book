// libs
import React, { memo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Divider from '@material-ui/core/Divider';

//constants
import { COLORS_THEME } from '@styles/variables';

//icons
import DeleteIcon from 'src/components/Book/desktop/components/icons/DeleteIcon';
import EditIcon from 'src/components/Book/desktop/components/icons/EditIcon';

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: 7,
  },
  menuContainer: {
    width: ' 219px',
    margin: '8px 0',
    background: COLORS_THEME.WHITE,
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    borderRadius: '4px',
  },
  list: {
    padding: '8px 0',
  },
  listItem: {
    padding: '13px 18px 12px 18px ',
    '&:hover': {
      backgroundColor: COLORS_THEME.LIGHT_BLUE,
      '& $listItemTitle': {
        color: COLORS_THEME.SECONDARY2,
      },
    },
  },
  deleteListItem: {
    '&:hover': {
      backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
      '& $listItemTitle': {
        color: COLORS_THEME.DARK_PRIMARY,
      },
    },
  },
  listItemAvatar: {
    minWidth: 'unset',
  },
  listItemTitle: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
    marginLeft: '10px',
    wordBreak: 'break-all',
  },

  editIcon: {
    width: '15px',
    height: '15px',
  },
  divider: {
    width: '187px',
    margin: '0 auto',
  },
}));

interface IKebabMenu {
  open: boolean;
  anchorEl: React.RefObject<HTMLButtonElement>;
  handleCloseMenu: (event: React.MouseEvent<EventTarget>) => void;
  handleDelete?: (event: React.MouseEvent<EventTarget>) => void;
  handleEdit?: (event: React.MouseEvent<EventTarget>) => void;
  editText: string;
  deleteText: string;
}

function KebabMenu({
  open,
  anchorEl,
  handleCloseMenu,
  handleDelete,
  handleEdit,
  editText,
  deleteText,
}: IKebabMenu) {
  const classes = useStyles();
  const [editStrokeColor, setEditStrokeColor] = useState(
    COLORS_THEME.MEDIUM_GREY
  );
  const [deleteStrokeColor, setDeleteStrokeColor] = useState(
    COLORS_THEME.MEDIUM_GREY
  );

  return (
    <Popper
      open={open}
      anchorEl={anchorEl.current}
      role={undefined}
      className={classes.popper}
      transition
      placement={'bottom-end'}
    >
      <Paper className={classes.menuContainer}>
        <ClickAwayListener onClickAway={handleCloseMenu}>
          <List className={classes.list}>
            <ListItem
              classes={{
                root: classes.listItem,
              }}
              button={true}
              onClick={handleEdit}
              onMouseOver={() => setEditStrokeColor(COLORS_THEME.SECONDARY2)}
              onMouseLeave={() => setEditStrokeColor(COLORS_THEME.MEDIUM_GREY)}
            >
              <ListItemAvatar
                classes={{
                  root: classes.listItemAvatar,
                }}
              >
                <EditIcon
                  className={classes.editIcon}
                  stroke={editStrokeColor}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className={classes.listItemTitle}>
                    {editText}
                  </Typography>
                }
              />
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem
              classes={{
                root: `${classes.listItem} ${classes.deleteListItem}`,
              }}
              button={true}
              onClick={handleDelete}
              onMouseOver={() =>
                setDeleteStrokeColor(COLORS_THEME.DARK_PRIMARY)
              }
              onMouseLeave={() =>
                setDeleteStrokeColor(COLORS_THEME.MEDIUM_GREY)
              }
            >
              <ListItemAvatar
                classes={{
                  root: classes.listItemAvatar,
                }}
              >
                <DeleteIcon width={15} height={18} stroke={deleteStrokeColor} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className={`${classes.listItemTitle}`}>
                    {deleteText}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
}
export default memo(KebabMenu);
