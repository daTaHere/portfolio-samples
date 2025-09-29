import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Box,
  // useMediaQuery,
  Container,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Logo from '../../assets/react.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  ThemeSelector,
  LoginMenu,
  MainNavMenu,
  NotificationMenu,
  ProfileMenu,
} from '../menus';
import { useAuthContext } from '../../context/AuthContext';

export const NavBar: React.FC = () => {
  const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  // const isLaptop = useMediaQuery(theme.breakpoints.up('md'));

  const { user } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            component="img"
            src={Logo}
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          />
          <MainNavMenu />
          {user && (
            <Box>
              <NotificationMenu />
              <ProfileMenu onClose={handleClose} />
            </Box>
          )}

          {!user && (
            <>
              <IconButton onClick={handleClick}>
                <MenuRoundedIcon
                  fontSize="large"
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    color: theme.palette.background.paper,
                    borderRadius: 1.5,
                    p: 0.5,
                  }}
                />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <LoginMenu />
                <ThemeSelector onClose={handleClose} />
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
