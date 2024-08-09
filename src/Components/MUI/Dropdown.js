import React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';

import '../Navbar/Navbar.css';

const data = [
  { name: "Sobre Nós", href: "/about-us" },
  { name: "Política", href: "/policy" },
  { name: "O que é rinha de galo?", href: "/what-is" },
  { name: "Suporte", href: "/support" }
];

export default function TopDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const list = (
    <Box sx={{ width: 'auto' }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List className='dropdown-component'>
        {data.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={item.href} onClick={() => setIsOpen(false)}>
                <span className="links-dropdown">{item.name}</span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="btn-explore">Explorar</Button>
      <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
}
