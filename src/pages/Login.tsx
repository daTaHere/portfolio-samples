import LoginForm from '../components/LoginForm';
import { Box } from '@mui/material';

function Login() {
  return (
    <Box
      display="flex"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
    >
      <LoginForm />
    </Box>
  );
}

export default Login;
