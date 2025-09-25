export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/view' },
  { label: 'Login', path: '/login' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Edit Form', path: '/edit' },
];
