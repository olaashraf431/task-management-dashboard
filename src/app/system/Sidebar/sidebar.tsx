'use client';

import React from 'react';
import { Box } from '@mui/material';

const drawerWidth = 240; 

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: drawerWidth,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0, 
        backgroundColor: 'background.paper', 
        color: '#ffffff',
        boxSizing: 'border-box',
        borderLeft: '1px solid rgba(255, 255, 255, 0.12)', 
        zIndex: 1300, 
        padding: '20px',
      }}
    >
     Sidebar Content
      <br />
     
    </Box>
  );
}