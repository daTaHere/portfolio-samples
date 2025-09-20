import React from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import type { Palette } from '@mui/icons-material';
import { theme } from '../theme/defaultTheme';

interface FormTextFieldProps {
  name: string;
  label: string;
  isRequired?: boolean;
  multiline?: boolean;
  rows?: number;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  label,
  isRequired = false,
  multiline,
  rows,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {isRequired ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label={label}
              color="secondary"
              required
              multiline={multiline}
              rows={rows}
              error={!!errors[name]}
              // helperText={errors[name]?.message as string}
              sx={{ bgcolor: 'white' }}
              slotProps={{
                input: {
                  sx: {
                    color: theme.palette.text.primary,
                  },
                },
                inputLabel: {
                  sx: {
                    color: theme.palette.text.secondary,
                    '& .MuiFormLabel-asterisk': { color: 'red' },
                    '& .MuiInputBase-input': {
                      color: theme.palette.text.primary,
                    },
                  },
                },
              }}
            />
          )}
        />
      ) : (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label={label}
              multiline={multiline}
              rows={rows}
              color="secondary"
              sx={{ bgcolor: 'white' }}
              slotProps={{
                input: {
                  sx: {
                    color: theme.palette.text.primary,
                  },
                },
                inputLabel: {
                  sx: {
                    color: theme.palette.text.secondary,
                  },
                },
              }}
            />
          )}
        />
      )}
    </>
  );
};
