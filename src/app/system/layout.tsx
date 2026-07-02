'use client';

import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar/sidebar'; 
import Navbar from './Navbar/Navbar';   

export default function SystemLayout({ children }: { children: React.ReactNode }) {
  const drawerWidth = 240; 

  return (
    <Box sx={{ 
      position: 'relative', 
      minHeight: '100vh', 
      width: '100vw', 
      backgroundColor: 'background.default',
      overflow: 'hidden'
    }}>
      <CssBaseline />
      
      {/* السايد بار في مكانه المظبوط يمين */}
      <Sidebar />

      {/*  صندوق الـ Navbar والمحتوى: واخد right: 0 عشان المتصفح يرميه في أقصى الشمال ويمسح الفراغ القديم! */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        right: 0,      // 
        width: `calc(100vw - ${drawerWidth}px)`, 
        height: '100vh',
        display: 'flex', 
        flexDirection: 'column', 
        overflow: 'hidden'
      }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, padding: 3, overflowY: 'auto' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}