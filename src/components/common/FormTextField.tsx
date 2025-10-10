/*
 Custom InputField component 
 Styling required * red and background to white.
 Setting input field size and binding field state to react-form-hook with zod for state managment
 Example:
    <FormTextField
    name="message" --> binding state field
    label="Message" --> display animated field label
    isRequired={true} --> opt:bool defined required default false, if true conditionally render red *
    multiline --> opt:number define field row numbers default 1
    rows={4}
    />
*/

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
              color="secondary"
              size="small"
              required
              multiline={multiline}
              rows={rows}
              error={!!errors[name]}
              sx={{ bgcolor: 'white', borderRadius: 1 }}
              slotProps={{
                inputLabel: {
                  sx: {
                    '& .MuiFormLabel-asterisk': {
                      color: 'red',
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
              size="small"
              fullWidth
              label={label}
              multiline={multiline}
              rows={rows}
              color="secondary"
            />
          )}
        />
      )}
    </>
  );
};
