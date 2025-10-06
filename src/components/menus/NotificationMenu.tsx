/*
 This NotificationMenu component renders a notifcation bell icon
 to notify user's that there are new messages in the inbox. 
 On click will render a drop down which will display a green dot
 next to unread messages. I will also provide a short portion of the 
 messages along with the senders Avatar.

 Future iteration, conditionaly render green dot only on unread messages.
 Sort message via unread before read and date send decending
*/

import { useState } from 'react';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Typography,
  Tooltip,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mockNotifications } from '../../data/mockNotifications';
import addimg from '../../assets/Avatar/addimg.png';

interface DotBadgeProps {
  color?: string; // custom color (default MUI theme.secondary.main)
  children?: React.ReactNode;
}

const DotBadge: React.FC<DotBadgeProps> = ({ color, children }) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          bgcolor: color || 'secondary.main',
          display: 'inline-block',
        }}
      />
      {children && (
        <Typography variant="body2" component="span">
          {children}
        </Typography>
      )}
    </Box>
  );
};

export const NotificationMenu = () => {
  const [anchorElNotifications, setAnchorElNotifications] =
    useState<null | HTMLElement>(null);
  const handleOpenNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };
  return (
    <>
      <IconButton onClick={handleOpenNotifications} sx={{ ml: 1 }}>
        <NotificationsIcon color="secondary" />
      </IconButton>
      <Menu
        anchorEl={anchorElNotifications}
        open={Boolean(anchorElNotifications)}
        onClose={handleCloseNotifications}
      >
        <Typography sx={{ px: 2, pt: 1, fontWeight: 600 }}>
          Notifications
        </Typography>
        <Divider />
        <List sx={{ maxHeight: 300, width: 300 }}>
          {mockNotifications.map((item, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={item.sender}
                  src={item.recipient.avatarUrl || addimg}
                  onError={(e: any) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = addimg;
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.sender}
                secondary={
                  <Typography variant="body2" color="textSecondary">
                    {item.message}
                  </Typography>
                }
              />
              <Tooltip title="Mark as unread">
                <DotBadge />
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Menu>
    </>
  );
};
