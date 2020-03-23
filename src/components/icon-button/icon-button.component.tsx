import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { IconButtonProps } from './icon-button.types';

import './icon-button.styles.scss';

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  className,
  ...restProps
}) => (
  <NavLink
    {...restProps}
    className={classNames(className, 'button icon-button is-rounded')}
  >
    <i className={classNames('fas', iconName)} />
  </NavLink>
);

export default IconButton;
