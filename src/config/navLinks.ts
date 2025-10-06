/*
  The NavLink config file centralizes the modification top 
  NavBar center link section. You can add or remove link here.

  Example:
  Link object
  {
    label: string -> This is the Text rendered in NavBar
    path: string -> This defines the url path ie. domain.com/{path}
  }

*/

export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/view' },
  { label: 'Login', path: '/login' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'View Form', path: '/edit' },
];
