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
              // sx={{ bgcolor: 'white', borderRadius: 1 }}
              // slotProps={{
              //   input: {
              //     sx: {
              //       color: theme.palette.text.primary,
              //     },
              //   },
              //   inputLabel: {
              //     sx: {
              //       color: theme.palette.text.secondary,
              //     },
              //   },
              // }}
            />
          )}
        />
      )}
    </>
  );
};
