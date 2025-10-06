/*
  The ViewMain page is the page layout for our paginate Post Card views.
  It contains a header section, pagination selector section, and maps upto
  8 cards for most of the body. 

  Future iteration, this page will implement filter by date created,
   section (frontend, backend, devops), and featured.
*/
import { useState } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { usePostsQuery } from '../hooks/post/usePostsQuery';
import { ViewCard, PaginateSelector } from '../components/viewMain';

export default function ViewMain() {
  const [page, setPage] = useState(0);
  const { data: posts, isLoading, isError } = usePostsQuery(page);
  const onPageClick = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  return (
    <Container sx={{ my: 8 }}>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Dashboard
      </Typography>

      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : isError ? (
        <Typography>Error loading posts</Typography>
      ) : (
        <>
          <PaginateSelector
            totalPages={posts!.totalPages}
            selectedPage={page}
            handleChange={onPageClick}
          />
          <Grid spacing={2} container>
            {posts!.data.map((post) => (
              <ViewCard key={post.id} postData={post} />
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
