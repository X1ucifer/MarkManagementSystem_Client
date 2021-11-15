import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignIn from "./login"

export default function Index() {
  return (
    <Container maxWidth="sm">
      <SignIn />
    </Container>
  );
}