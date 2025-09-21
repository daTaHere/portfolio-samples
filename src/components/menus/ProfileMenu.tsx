import { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Divider,
  Box,
} from '@mui/material';

import addimg from '../../assets/Avatar/addimg.png';
import { useAuth } from '../../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeSelector } from './themeSelector';

interface ProfileMenuProps {
  onClose: () => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ onClose }) => {
  const { user, logout } = useAuth();
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(
    null
  );
  const handleOpenProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };
  const handleLogOut = () => {
    logout();
    handleCloseProfile();
    onClose();
  };

  const handleMenuClose = () => {
    handleCloseProfile();
    onClose();
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleOpenProfile} sx={{ ml: 2 }}>
        <Avatar src={user?.avatarUrl || addimg} />
      </IconButton>
      <Menu
        anchorEl={anchorElProfile}
        open={Boolean(anchorElProfile)}
        onClose={handleCloseProfile}
      >
        <MenuItem>
          <Box display="flex" alignItems="center">
            <Avatar src={user?.avatarUrl || addimg} sx={{ mr: 1 }} />
            <Box>
              <Typography variant="subtitle1">
                {user?.firstName} {user?.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user?.email}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <LogoutIcon fontSize="small" color="primary" />
          <Typography variant="body2" sx={{ px: 1 }}>
            Sign Out
          </Typography>
        </MenuItem>
        <ThemeSelector onClose={handleMenuClose} />
      </Menu>{' '}
    </>
  );
};
