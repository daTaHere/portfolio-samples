import { useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { mockPost } from '../data/mockPost';
import { ViewCard, PaginateSelector } from '../components/viewMain';
import type { Post } from '../types/post';

type ViewState = {
  viewData: Post[];
  pageIndex: number;
  pageSize: number;
  totalPages: number;
};

export default function ViewMain() {
  const [pageIndex, setPage] = useState(0);
  const onPageClick = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  const [viewState, setviewState] = useState<ViewState>({
    viewData: [],
    pageIndex: 0,
    pageSize: 0,
    totalPages: 0,
  });
  useEffect(() => {
    const mockGetRequest = mockPost;
    const cardData = mockGetRequest.pages[pageIndex].data;
    setviewState((prevState) => {
      const newView = { ...prevState };
      newView.viewData = cardData;
      newView.totalPages = mockGetRequest.totalPages;
      return newView;
    });
  }, [pageIndex]);

  return (
    <Container sx={{ my: 8 }}>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Dashboard
      </Typography>
      <PaginateSelector
        totalPages={viewState.totalPages}
        selectedPage={pageIndex}
        handleChange={onPageClick}
      />
      <Grid spacing={2} container>
        {viewState.viewData.map((data) => {
          return <ViewCard postData={data} />;
        })}
      </Grid>
    </Container>
  );
}
