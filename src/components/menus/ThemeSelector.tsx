/*
  The ThemeSelector component renders a gear icon with a
  sub-menu to set the color theme. 
  System (default system settung), Light, and Dark 
*/

import { useState } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BrightnessMediumTwoToneIcon from '@mui/icons-material/BrightnessMediumTwoTone';
import { useColorScheme } from '@mui/material/styles';

type ThemeValue = 'system' | 'light' | 'dark';

interface ThemeOption {
  label: string;
  value: ThemeValue;
  icon: React.ElementType;
}

interface ThemeSelectorProps {
  onClose: () => void;
}

const themeOptions: ThemeOption[] = [
  { label: 'System', value: 'system', icon: BrightnessMediumTwoToneIcon },
  { label: 'Light', value: 'light', icon: LightModeOutlinedIcon },
  { label: 'Dark', value: 'dark', icon: DarkModeIcon },
];

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onClose }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setMode } = useColorScheme();

  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (value: ThemeValue) => {
    setMode(value);
    localStorage.setItem('theme-mode', value);
    setAnchorEl(null);
    onClose();
  };
  return (
    <>
      {/* Trigger for submenu */}
      <MenuItem
        onClick={handleOpen}
        id="theme-selector-button"
        aria-controls={open ? 'theme-selector-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <SettingsIcon fontSize="small" color="primary" />
        <Typography variant="body2" sx={{ px: 1 }}>
          Theme
        </Typography>
      </MenuItem>

      {/* Submenu */}
      <Menu
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        open={open}
        slotProps={{
          root: { 'aria-labelledby': 'theme-selector-button' },
        }}
      >
        {themeOptions.map((option) => {
          const Icon = option.icon;
          return (
            <MenuItem
              key={option.value}
              data-value={option.value}
              onClick={() => handleThemeSelect(option.value)}
            >
              <Icon fontSize="small" color="secondary" />
              <Typography variant="body2" sx={{ px: 1 }}>
                {option.label}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
