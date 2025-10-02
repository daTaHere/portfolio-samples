import { useState } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { usePostsQuery } from '../hooks/post/usePostQuery';
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
