import Avator1 from '../assets/Avatar/avatar-1.jpg';
import Avator2 from '../assets/Avatar/avatar-2.jpg';
import Avator3 from '../assets/Avatar/avatar-3.jpg';

export const mockUsers = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    avatarUrl: Avator1,
    roles: [],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@email.com',
    avatarUrl: Avator2,
    roles: ['user'],
  },
  {
    id: 3,
    firstName: 'Buster',
    lastName: 'Huynh',
    email: 'buster.huynh@email.com',
    avatarUrl: Avator3,
    roles: ['admin'],
  },
  {
    id: 4,
    firstName: 'Shady',
    lastName: 'Tran',
    email: 'shady.tran@email.com',
    avatarUrl: Avator2,
    roles: ['borrower'],
  },
  {
    id: 5,
    firstName: 'Data',
    lastName: 'Here',
    email: 'data.here@email.com',
    avatarUrl: Avator1,
    roles: ['Merchant'],
  },
];
