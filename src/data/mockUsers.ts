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

// import Avatar1 from '../assets/Avatar/avatar-1.jpg';
// import Avatar2 from '../assets/Avatar/avatar-2.jpg';
// import Avatar3 from '../assets/Avatar/avatar-3.jpg';

// export const users = [
//   {
//     id: 1,
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@email.com',
//     avatarUrl: Avatar1,
//     roles: ['registered'],
//     created: '2025-09-01T10:00:00Z',
//   },
//   {
//     id: 2,
//     firstName: 'Jane',
//     lastName: 'Smith',
//     email: 'jane.smith@email.com',
//     avatarUrl: Avatar2,
//     roles: ['registered'],
//     created: '2025-09-03T12:30:00Z',
//   },
//   {
//     id: 3,
//     firstName: 'Alice',
//     lastName: 'Johnson',
//     email: 'alice.johnson@email.com',
//     avatarUrl: Avatar3,
//     roles: ['admin'],
//     created: '2025-09-05T15:00:00Z',
//   },
// ];
