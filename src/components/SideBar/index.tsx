import React from 'react';
import MenuItem from '../MenuItem';
import { FaTachometerAlt, FaUser, FaBullhorn, FaSignOutAlt, FaQuestionCircle, FaCog } from 'react-icons/fa';

import { Container, Navigation, Divider } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <MenuItem icon={FaTachometerAlt} size={3} />
        <MenuItem icon={FaUser} size={3} />
        <MenuItem icon={FaBullhorn} size={3} />
        <MenuItem icon={FaCog} size={3} />
      </Navigation>
      <Navigation>
        <Divider />
        <MenuItem icon={FaQuestionCircle} size={3} />
        <MenuItem icon={FaSignOutAlt} size={3} />
      </Navigation>
    </Container>
  );
};

export default SideBar;
