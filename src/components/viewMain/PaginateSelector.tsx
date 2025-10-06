/*
  This is the pagiation component in the Viewmain Page.
  It renders up to 8 Post Card components. With a pagination contorl
  at the top of the view. 

  Future iteration, this component will be refactored for 
  infinite pagination along with column mobile layout that allows 
  infinite scolling.
*/

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
