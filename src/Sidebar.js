import React from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaTachometerAlt, FaUsers } from 'react-icons/fa';

function Sidebar() {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem icon={<FaTachometerAlt />}>
          Dashboard
          <Link to="/" />
        </MenuItem>
        <SubMenu title="Users" icon={<FaUsers />}>
          <MenuItem>
            All Users
            <Link to="/users" />
          </MenuItem>
          <MenuItem>
            Add User
            <Link to="/users/add" />
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
