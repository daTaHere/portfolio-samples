import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Box,
  Tooltip,
  useMediaQuery,
  Container,
  Button,
  Link as MLink,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import SettingsIcon from '@mui/icons-material/Settings';
// import DotBadge from '../../dashboard/navbars/utils/DotBadge';
import Logo from '../assets/react.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import NotificationList from '../../dashboard/navbars/utils/Notification';
import addimg from '../assets/Avatar/addimg.png';
import Avator1 from '../assets/Avatar/avatar-1.jpg';
import Avator2 from '../assets/Avatar/avatar-2.jpg';
import Avator3 from '../assets/Avatar/avatar-3.jpg';

import { ThemeSelector } from './themeSelector';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
  isLoggedIn: boolean;
  roles: string[];
}

interface NavbarDefaultProps {
  headerstyle?: string;
  logout?: () => void;
  login?: (id: string) => void;
  currentUser: User;
}

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

type roles = 'user1' | 'user2' | 'admin' | 'borrower' | 'merchant';

interface avalibleUsers {
  label: string;
  value: roles;
  icon: React.ElementType;
}

const userOptions: avalibleUsers[] = [
  { label: 'User1', value: 'user1', icon: AccountCircleRoundedIcon },
  { label: 'User2', value: 'user2', icon: AccountCircleRoundedIcon },
  { label: 'Admin', value: 'admin', icon: AccountCircleRoundedIcon },
  { label: 'Borrower', value: 'borrower', icon: AccountCircleRoundedIcon },
  { label: 'Merchant', value: 'merchant', icon: AccountCircleRoundedIcon },
];

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

export const NavBarV2: React.FC<NavbarDefaultProps> = ({
  headerstyle = 'navbar-default',
  logout,
  login,
  currentUser,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isLaptop = useMediaQuery(theme.breakpoints.up('md'));

  const [anchorElNotifications, setAnchorElNotifications] =
    useState<null | HTMLElement>(null);
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(
    null
  );
  // --------------     login button --------------------------------------------------
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // --------------     login button --------------------------------------------------

  const handleOpenNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };

  const handleOpenProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  return (
    <AppBar
      position="static"
      color={headerstyle === 'dark' ? 'primary' : 'default'}
      sx={{ boxShadow: 1 }}
    >
      <Toolbar>
        <Box
          component="img"
          src={Logo}
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        />

        {/* <Box sx={{ flexGrow: 1 }} /> */}
        <Container
          maxWidth="xl"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button color="inherit" size="large" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" size="large" component={Link} to="/view">
            Dashboard
          </Button>
          <Button color="inherit" size="large" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" size="large" component={Link} to="/contact">
            Contact Us
          </Button>
          {/* <MLink
            component={Link}
            variant="h6"
            to="/"
            color="secondary"
            sx={{ mx: 1, fontSize: 22 }}
          >
            Home
          </MLink>
          <MLink
            component={Link}
            variant="h6"
            to="/contact"
            color="secondary"
            sx={{ mx: 1, fontSize: 22 }}
          >
            Contact Us
          </MLink>
          <MLink
            component={Link}
            variant="h6"
            to="/views"
            color="secondary"
            sx={{ mx: 1, fontSize: 22 }}
          >
            Stories
          </MLink> */}
        </Container>
        {currentUser.isLoggedIn && (
          <>
            {/* Notifications */}
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

            {/* Profile */}
            <IconButton
              color="inherit"
              onClick={handleOpenProfile}
              sx={{ ml: 2 }}
            >
              <Avatar src={currentUser.avatarUrl || addimg} />
            </IconButton>
            <Menu
              anchorEl={anchorElProfile}
              open={Boolean(anchorElProfile)}
              onClose={handleCloseProfile}
            >
              <MenuItem disabled>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={currentUser.avatarUrl || addimg}
                    sx={{ mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1">
                      {currentUser.firstName} {currentUser.lastName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {currentUser.email}
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
              <Divider />
              <MenuItem onClick={logout}>Sign Out</MenuItem>
            </Menu>
          </>
        )}

        {!currentUser.isLoggedIn && (
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

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{}}
            >
              {/* {userOptions.map((user) => {
                const Icon = user.icon;
                return (
                  <MenuItem
                    key={user.value}
                    data-value={user.value}
                    onClick={handleClose}
                  >
                    <Icon
                      fontSize="small"
                      sx={{
                        // bgcolor: theme.palette.secondary.main,
                        color: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                    />
                    <Typography variant="body2" sx={{ px: 1 }}>
                      {user.label}
                    </Typography>
                  </MenuItem>
                );
              })} */}
              <ThemeSelector />
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
