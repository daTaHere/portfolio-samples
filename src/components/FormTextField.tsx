import React from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

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
              required
              multiline={multiline}
              rows={rows}
              error={!!errors[name]}
              helperText={errors[name]?.message as string}
              sx={{ bgcolor: 'white' }}
              slotProps={{
                inputLabel: {
                  sx: {
                    '& .MuiFormLabel-asterisk': { color: 'red' },
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
              sx={{ bgcolor: 'white' }}
            />
          )}
        />
      )}
    </>
  );
};
