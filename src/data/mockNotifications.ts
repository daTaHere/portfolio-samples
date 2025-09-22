import { mockUsers } from './mockUsers';

const user = mockUsers;

export const mockNotifications = [
  {
    id: 1,
    read: false,
    recipient: user[0],
    sender: 'Kristin Watson',
    date: '2 hours ago',
    time: '2:19 PM',
    message: `Krisitn Watsan like your comment on course Javascript Introduction!`,
  },
  {
    id: 2,
    read: true,
    recipient: user[1],
    sender: 'Brooklyn Simmons',
    date: 'Oct 9,',
    time: '1:20 PM',
    message: `Just launched a new Courses React for Beginner.`,
  },
  {
    id: 3,
    read: true,
    recipient: user[2],
    sender: 'Jenny Wilson',
    date: 'Oct 9,',
    time: '1:56 PM',
    message: `Krisitn Watsan like your comment on course Javascript Introduction!`,
  },
];
