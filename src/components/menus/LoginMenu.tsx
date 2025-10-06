/*
  The Login menu renders in the rigth of the top NavBar.
  Renders as hamburger menu icon during Logged out it. It mocks
  user login by providing a drop down to select a user to login.
  It also provides  ThemeSelector icon as a sub-menu for dark/light 
  theme selection

  Future iteration, implement actual login with session tokens.
*/

import { useState } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAuthContext } from '../../context/AuthContext';
import { mockAvailableUsers } from '../../data/mockAvailableUsers';
import LoginIcon from '@mui/icons-material/Login';

export const LoginMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const theme = useTheme();
  const { login } = useAuthContext();

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = (userId: number) => {
    login(userId);
    setAnchorEl(null);
  };

  return (
    <>
      {/* Trigger for submenu */}
      <MenuItem
        onClick={handleOpen}
        id="theme-selector-button"
        aria-controls={open ? 'theme-selector-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <LoginIcon fontSize="small" color="primary" />
        <Typography variant="body2" sx={{ px: 1 }}>
          Login
        </Typography>
      </MenuItem>

      {/* Submenu */}
      <Menu
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        open={open}
        slotProps={{
          root: { 'aria-labelledby': 'theme-selector-button' },
        }}
      >
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          slotProps={{}}
        >
          {mockAvailableUsers.map((user) => {
            const Icon = user.icon;
            return (
              <MenuItem
                key={user.id}
                data-value={user.value}
                onClick={() => handleLogin(user.id)}
              >
                <Icon
                  fontSize="small"
                  sx={{
                    color: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                />
                <Typography variant="body2" sx={{ px: 1 }}>
                  {user.label}
                </Typography>
              </MenuItem>
            );
          })}
        </Menu>
      </Menu>
    </>
  );
};
