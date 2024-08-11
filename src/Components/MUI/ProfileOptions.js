import React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';

import '../Navbar/Navbar.css';

const data = [
  { name: "Vizualizar perfil", href: "/profile" },
  { name: "Historico de Rinhas", href: "/history" },
  { name: "Editar Perfil", href: "/profile/edit" },
  { name: "Suporte", href: "/support" },
  { name: "Sair", href: "/logout" }
];

export default function ProfileOptions() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const list = (
    <Box sx={{ width: 'auto' }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List className='profile-drop-component'>
        {data.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={item.href} onClick={() => setIsOpen(false)}>
                <span className="links-profile">{item.name}</span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="btn-profile"><AccountCircleIcon/></Button>
      <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
}
