import Avatar1 from '../assets/Avatar/avatar-1.jpg';
import Avatar2 from '../assets/Avatar/avatar-2.jpg';
import Avatar3 from '../assets/Avatar/avatar-3.jpg';

export const mockUsers = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    avatarUrl: Avatar1,
    roles: ['registered'],
    created: '2025-09-01T10:00:00Z',
    modified: '2025-09-01T10:00:00Z',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    avatarUrl: Avatar2,
    roles: ['registered'],
    created: '2025-09-03T12:30:00Z',
    modified: '2025-09-03T12:30:00Z',
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@email.com',
    avatarUrl: Avatar3,
    roles: ['admin'],
    created: '2025-09-05T15:00:00Z',
    modified: '2025-09-03T12:30:00Z',
  },
];
