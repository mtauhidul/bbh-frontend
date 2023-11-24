import MenuIcon from '@mui/icons-material/Menu';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About'];

export default function Navbar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const getCurrentUrl = () => {
    const url = window.location.href;
    const urlParts = url.split('/');
    const currentUrl = urlParts[urlParts.length - 1];
    return currentUrl;
  };

  return (
    <Box
      sx={{
        display: 'flex',
      }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: '#fff',
          '& .MuiToolbar-root': {
            justifyContent: 'flex-end',
          },
        }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}>
            {navItems.map((item) => (
              <Button
                onClick={() =>
                  item === 'Home'
                    ? navigate('/')
                    : navigate(`/${item.toLowerCase()}`)
                }
                key={item}
                sx={{
                  color: '#fff',
                  padding: '5px 0px',
                  margin: '0px 10px',
                  fontSize: '16px',
                  borderRadius: '0px',
                  borderBottom: '2px solid transparent',
                  '&:hover': {
                    borderBottom: '2px solid #fff',
                    transition: 'all 0.1s ease-in-out',
                  },
                }}>
                {item}
              </Button>
            ))}
            {/* <Button
              onClick={() => navigate('/registration')}
              variant='outlined'
              sx={{
                color: '#fff',
                borderColor: '#fff',
                margin: '0px 12px',
                fontSize: '16px',
                '&:hover': {
                  color: 'black',
                  borderColor: 'black',
                  backgroundColor: '#fff',
                },
              }}
              startIcon={<CampaignIcon />}>
              Reunion registration
            </Button>
            <Button
              onClick={() => navigate('/user')}
              variant='outlined'
              sx={{
                color: '#fff',
                borderColor: '#fff',
                margin: '0px 12px',
                fontSize: '16px',
                '&:hover': {
                  color: 'black',
                  borderColor: 'black',
                  backgroundColor: '#fff',
                },
              }}>
              Get Registration ID
            </Button> */}
            <Button
              onClick={() => navigate('/auction')}
              variant='outlined'
              sx={{
                color: '#fff',
                borderColor: '#fff',
                margin: '0px 12px',
                fontSize: '16px',
                '&:hover': {
                  color: 'black',
                  borderColor: 'black',
                  backgroundColor: '#fff',
                },
              }}
              startIcon={<SportsCricketIcon />}>
              Tournament Auction
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
