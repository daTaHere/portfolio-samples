import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginateSelectorProps = {
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalPages: number;
  selectedPage: number;
};

export const PaginateSelector: React.FC<PaginateSelectorProps> = ({
  totalPages,
  selectedPage,
  handleChange,
}: PaginateSelectorProps) => {
  return (
    <Stack spacing={2} sx={{ my: 2 }}>
      <Pagination
        count={totalPages}
        page={selectedPage + 1}
        size="medium"
        color="secondary"
        onChange={handleChange}
      />
    </Stack>
  );
};
