import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// material components
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Arrow from '@material-ui/icons/ArrowForwardIosRounded';
import Link from '@material-ui/core/Link';

// components
import TextOverflowTooltip from '@components/TextOverflowTooltip';

// constants
import { COLORS_THEME } from 'src/styles/variables';

// styles
const useStyles = makeStyles((theme) => ({
  breadcrumbName: {
    maxWidth: '200px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '12px',
    fontWeight: 500,
  },
  arrowSeparator: {
    color: COLORS_THEME.LIGHT_MEDIUM_GREY,
    width: '8px',
    height: '9px',
  },
  active: {
    color: COLORS_THEME.MEDIUM_GREY,
    textDecoration: 'none !important',
  },
  nonActive: {
    textDecoration: 'underline ',
    color: COLORS_THEME.DARK_GREY,
  },
}));

interface IBreadCrumbs {
  breadCrumbsList: { name: string; href: string; onClick?: Function }[];
}

export default function BreadCrumbs({ breadCrumbsList }: IBreadCrumbs) {
  const history = useHistory<{ [key: string]: boolean }>();
  const classes = useStyles();
  const handleBreadCrumbClick = (href: string) => {
    history.push(href);
  };
  const handleClick = (event: React.SyntheticEvent, onClick?: Function) => {
    event.preventDefault();
    onClick && onClick();
  };

  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<Arrow className={classes.arrowSeparator} />}
      >
        {breadCrumbsList.map((breadCrumb, i) =>
          breadCrumbsList.length === i + 1 ? (
            <span
              key={breadCrumb.href}
              onClick={() => handleBreadCrumbClick(breadCrumb.href)}
            >
              <Link
                onClick={(e: React.SyntheticEvent) =>
                  handleClick(e, breadCrumb.onClick)
                }
                href=""
                aria-current="page"
                className={classes.active}
              >
                <TextOverflowTooltip
                  text={breadCrumb.name}
                  className={classes.breadcrumbName}
                  arrow={true}
                  placement="top-start"
                />
              </Link>
            </span>
          ) : (
            <span
              key={breadCrumb.href}
              onClick={() => handleBreadCrumbClick(breadCrumb.href)}
            >
              <Link
                className={classes.nonActive}
                onClick={(e: React.SyntheticEvent) =>
                  handleClick(e, breadCrumb.onClick)
                }
                href=""
              >
                <TextOverflowTooltip
                  text={breadCrumb.name}
                  className={classes.breadcrumbName}
                  arrow={true}
                  placement="top-start"
                />
              </Link>
            </span>
          )
        )}
      </Breadcrumbs>
    </div>
  );
}
