import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import {
  Box, List, ListItem, Divider, ListItemButton, ListItemIcon, Drawer, ListItemText, Toolbar,
} from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LogoutIcon from '@mui/icons-material/Logout';
import HeaderIndex from './Header/HeaderIndex';
import InicioIndex from './Inicio/InicioIndex';
import SubscribeIndex from './Subscribe/SubscribeIndex';
import CatalogoIndex from './Catalogo/CatalogoIndex';
import Products from './Products/Products';
import Brands from './Brands/Brands';
import Shops from './Shops/Shops';
import { useAdmin } from '../context/AdminContext';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const drawerWidth = 300;

function Home() {
  const { logout } = useAdmin();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }} bgcolor="#f4f4f4">
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            display: { xs: 'none', lg: 'block', sm: 'none' },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {['Header', 'Inicio', 'Footer', 'Catalogo', 'Products', 'Marcas', 'Tiendas'].map((text) => (
              <a style={{ textDecoration: 'none', color: '#000000DE' }} href={`#${text.toLowerCase()}`} key={text}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ViewInArIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              </a>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding onClick={() => logout()}>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        <Container
          component="main"
          maxWidth="xl"
          sx={{
            padding: 10,
          }}
        >
          <Stack spacing={3}>
            <HeaderIndex />
            <InicioIndex />
            <SubscribeIndex />
            <CatalogoIndex />
            <Products />
            <Brands />
            <Shops />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
