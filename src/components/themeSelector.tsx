import { useState } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import { LightModeOutlined } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BrightnessMediumTwoToneIcon from '@mui/icons-material/BrightnessMediumTwoTone';
import { useColorScheme } from '@mui/material/styles';

type ThemeValue = 'system' | 'light' | 'dark';

interface ThemeOption {
  label: string;
  value: ThemeValue;
  icon: React.ElementType;
}

const themeOptions: ThemeOption[] = [
  { label: 'System', value: 'system', icon: BrightnessMediumTwoToneIcon },
  { label: 'Light', value: 'light', icon: LightModeOutlined },
  { label: 'Dark', value: 'dark', icon: DarkModeIcon },
];

export const ThemeSelector = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { mode, setMode } = useColorScheme();

  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<SVGSVGElement>) => {
    // e.currentTarget is SVGSVGElement, which extends HTMLElement → safe
    setAnchorEl(e.currentTarget as unknown as HTMLElement);
  };

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    const selectedValue = e.currentTarget.dataset.value as
      | ThemeValue
      | undefined;
    if (selectedValue) {
      setMode(selectedValue);
      localStorage.setItem('theme-mode', selectedValue); // persist choice
    }
    console.log('After mode:', mode);
    setAnchorEl(null);
  };

  return (
    <>
      <SettingsIcon
        fontSize="large"
        id="theme-selector-button"
        aria-controls={open ? 'theme-selector-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
        sx={{ pl: { xs: 1, sm: 0 }, cursor: 'pointer' }}
      />

      <Menu
        id="theme-selector-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
              onClick={handleClose}
            >
              <Icon fontSize="small" />
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
