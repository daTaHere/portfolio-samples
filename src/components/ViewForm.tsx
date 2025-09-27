import {
  Button,
  Typography,
  Stack,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { DropzoneComponent } from './DropzoneComponent';
import { FormTextField } from './FormTextField';
import RichEditor from './RichEditor';
import type { ViewFormData } from '../pages/View';

type ViewFormProps = {
  handleFileSelect: (file: File) => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => void;
};

export const ViewForm: React.FC<ViewFormProps> = ({
  handleFileSelect,
  onSubmit,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<ViewFormData>();
  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <Typography variant="h5" textAlign="center">
          Edit Story
        </Typography>
        <FormTextField name="title" label="Title" />
        <FormTextField name="email" label="Email" />

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <RichEditor
              value={field.value}
              onChange={(html) => field.onChange(html)}
            />
          )}
        />
        {errors.content && (
          <Typography color="error" variant="caption">
            {errors.content.message}
          </Typography>
        )}

        <Controller
          name="selectedImage"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl>
              <Select {...field} displayEmpty>
                <MenuItem disabled value="">
                  <em>Upload Image for</em>
                </MenuItem>
                <MenuItem value="mainImage">Main</MenuItem>
                <MenuItem value="slide1">Slide 1</MenuItem>
                <MenuItem value="slide2">Slide 2</MenuItem>
                <MenuItem value="slide3">Slide 3</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <DropzoneComponent onFileSelect={handleFileSelect} />
      </Stack>
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
};
