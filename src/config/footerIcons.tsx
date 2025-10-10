/*
  The footerIcon config file centralizes the modification
  of the footer media icons. 
  Example:
  icon object
  {
    url: string -> Define the url you want to redirected onClick
    icon: React.Element -> Add Clickable icon (ie @material-icons, @fontawesome)
    label: string -> Accessible label for screen readers
  }

*/

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import type { FooterIcon } from '../types/icons';

export const footerIcons: FooterIcon[] = [
  {
    url: 'https://github.com',
    icon: GitHubIcon,
    label: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com',
    icon: LinkedInIcon,
    label: 'LinkedIn',
  },
  {
    url: 'mailto: Your Email hear',
    icon: EmailIcon,
    label: 'Email',
  },
];
