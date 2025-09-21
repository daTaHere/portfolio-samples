import { useState } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useAuth } from '../../context/AuthContext';

import LoginIcon from '@mui/icons-material/Login';

type roles = 'user1' | 'user2' | 'admin' | 'borrower' | 'merchant';

interface avalibleUsers {
  id: number;
  label: string;
  value: roles;
  icon: React.ElementType;
}

const userOptions: avalibleUsers[] = [
  { id: 1, label: 'User1', value: 'user1', icon: AccountCircleRoundedIcon },
  { id: 2, label: 'User2', value: 'user2', icon: AccountCircleRoundedIcon },
  { id: 3, label: 'Admin', value: 'admin', icon: AccountCircleRoundedIcon },
  {
    id: 4,
    label: 'Borrower',
    value: 'borrower',
    icon: AccountCircleRoundedIcon,
  },
  {
    id: 5,
    label: 'Merchant',
    value: 'merchant',
    icon: AccountCircleRoundedIcon,
  },
];

export const LoginMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const theme = useTheme();
  const { login } = useAuth();

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = (userId: number) => {
    console.log('hit');
    console.log(userId);

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
          {userOptions.map((user) => {
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
