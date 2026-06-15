// 'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240; 

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="right" 
      sx={{
        width: drawerWidth, 
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#800020',         //#1e293b
          color: '#ffffff',
        },
      }}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing.
    </Drawer>
  );
}