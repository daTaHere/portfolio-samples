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
import Avator1 from '../../assets/Avatar/avatar-1.jpg';
import Avator2 from '../../assets/Avatar/avatar-2.jpg';
import Avator3 from '../../assets/Avatar/avatar-3.jpg';
import addimg from '../../assets/Avatar/addimg.png';

interface Notification {
  id: number;
  read: boolean;
  sender: string;
  image: string;
  message: string;
}

interface DotBadgeProps {
  color?: string; // custom color (default MUI theme.secondary.main)
  children?: React.ReactNode;
}

const NotificationList: Notification[] = [
  {
    id: 1,
    read: false,
    image: Avator1,
    sender: 'Kristin Watson',
    // date: '2 hours ago',
    // time: '2:19 PM',
    message: `Krisitn Watsan like your comment on course Javascript Introduction!`,
  },
  {
    id: 2,
    read: true,
    image: Avator2,
    sender: 'Brooklyn Simmons',
    // date: 'Oct 9,',
    // time: '1:20 PM',
    message: `Just launched a new Courses React for Beginner.`,
  },
  {
    id: 3,
    read: true,
    image: Avator3,
    sender: 'Jenny Wilson',
    // date: 'Oct 9,',
    // time: '1:56 PM',
    message: `Krisitn Watsan like your comment on course Javascript Introduction!`,
  },
];

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
          {NotificationList.map((item, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={item.sender}
                  src={item.image || addimg}
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
