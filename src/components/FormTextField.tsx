// import { TextField } from '@mui/material';
// import { Controller, useFormContext } from 'react-hook-form';

// type FormTextFieldProps = {
//   name: string;
//   label: string;
//   required?: boolean;
//   multiline?: boolean;
//   rows?: number;
// };

// export const FormTextField: React.FC<FormTextFieldProps> = ({
//   name,
//   label,
//   required = false,
//   multiline = false,
//   rows,
// }) => {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field }) => (
//         <TextField
//           {...field}
//           fullWidth
//           label={label}
//           required={required}
//           multiline={multiline}
//           rows={rows}
//           error={!!errors[name]}
//           helperText={errors[name]?.message as string}
//           slotProps={{
//             inputLabel: {
//               sx: { '& .MuiFormLabel-asterisk': { color: 'red' } },
//             },
//           }}
//           sx={{ bgcolor: 'white' }}
//         />
//       )}
//     />
//   );
// };

import React from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface FormTextFieldProps {
  name: string;
  label: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  label,
  required = false,
  multiline,
  rows,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          required={required}
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
  );
};
