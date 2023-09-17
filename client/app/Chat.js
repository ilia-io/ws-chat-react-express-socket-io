'use client';

import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([input, ...messages]);
    setInput('');
  };
  console.log(messages);
  return (
    <>
      <Container sx={{ p: 2 }} maxWidth="sm">
        <Box
          component="form"
          sx={{
            p: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
          // noValidate
          autoComplete="off"
          onSubmit={sendMessage}
        >
          <TextField
            required
            id="standard-basic"
            label="Message"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained">
            Send Message
          </Button>
        </Box>

        <List sx={{ height: '100vh' }}>
          {messages?.map((message, index) => (
            <ListItem sx={{ p: 1.2 }} key={index}>
              <Typography sx={{ fontSize: 14, lineHeight: 1.1 }}>
                {message}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Chat;
