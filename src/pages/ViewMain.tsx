import { useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { mockViewList } from '../data/mockView';
import { CardView } from '../components/viewMain/ViewCard';
import { PaginateSelector } from '../components/viewMain/PaginateSelector';
import type { ViewCard } from '../types/ViewCard';

type ViewState = {
  viewData: ViewCard[];
  viewCards: React.ReactElement[];
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  // isApproved: boolean;
  // isChecked: boolean | null;
};

export default function ViewMain() {
  const [pageIndex, setPage] = useState(0);
  const onPageClick = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  const [viewState, setviewState] = useState<ViewState>({
    viewData: [],
    viewCards: [],
    pageIndex: 0,
    pageSize: 0,
    totalPages: 0,
    // isApproved: true,
    // isChecked: null,
  });
  useEffect(() => {
    const mockGetRequest = mockViewList;
    const cardData = mockGetRequest.pages[pageIndex].data;
    setviewState((prevState) => {
      const newView = { ...prevState };
      newView.viewData = cardData;
      newView.viewCards = newView.viewData.map(mapStories);
      newView.totalPages = mockGetRequest.totalPages;
      return newView;
    });
  }, [pageIndex]);

  const mapStories = (data: ViewCard) => {
    return <CardView key={data.id} cardData={data} />;
  };

  return (
    <Container sx={{ my: 8 }}>
      <Typography variant="h4" sx={{ textAlign: 'center' }} gutterBottom>
        Dashboard
      </Typography>
      <PaginateSelector
        totalPages={viewState.totalPages}
        selectedPage={pageIndex}
        handleChange={onPageClick}
      />
      <Grid spacing={2} container>
        {viewState.viewCards}
      </Grid>
    </Container>
  );
}
