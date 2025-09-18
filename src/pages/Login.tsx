import LoginForm from '../components/LoginForm';
import { Box } from '@mui/material';

function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <LoginForm />
    </Box>
  );
}

export default Login;
