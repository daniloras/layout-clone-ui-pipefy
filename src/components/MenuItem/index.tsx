import React from 'react';
import { ContainerIcon } from './styles';
import { IconBaseProps } from 'react-icons';

interface LayoutProps {
  icon: React.ComponentType<IconBaseProps>;
  size: number;
}

const Layout: React.FC<LayoutProps> = ({ icon: Icon, size = 20 }) => {
  return (
    <ContainerIcon>
      <Icon size={size} />
    </ContainerIcon>
  );
};

export default Layout;
