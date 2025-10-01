import type { AvailableUser } from '../types/user';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const mockAvailableUsers: AvailableUser[] = [
  { id: 1, label: 'User1', value: 'user1', icon: AccountCircleRoundedIcon },
  { id: 2, label: 'User2', value: 'user2', icon: AccountCircleRoundedIcon },
  { id: 3, label: 'Admin', value: 'admin', icon: AccountCircleRoundedIcon },
];
