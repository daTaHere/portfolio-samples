import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import type { FooterIcon } from '../types/icons';

export const footerIcons: FooterIcon[] = [
  {
    url: 'https://github.com',
    icon: GitHubIcon,
    label: 'GitHub', // Accessible label for screen readers
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
