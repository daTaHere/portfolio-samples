/*
  Template Login page two fields and submit button. 

  Future iteration, this will be a working demo login/reg feature. 
  It will include a small backend and a service file to create a 
  new user. Implementing password hashing, unique email (check aginist back db), 
  email/mobile-text validation.
*/

import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';

const Login = () => {
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
};

export default Login;
