import { NavLinkProps } from 'react-router-dom';

export interface IconButtonProps extends NavLinkProps {
  readonly iconName: string;
}
