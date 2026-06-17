import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <Box sx={{ display: 'flex', minHeight: '100vh', direction: 'rtl', bgcolor: '#f8f9fa' }}>
      

      <Sidebar />
      

      {/* 2. الجزء الأيسر بياخد "كل المساحة المتبقية" أوتوماتيك بفضل flexGrow: 1 */}
      <Box 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        {/* الـ Navbar فوق */}
        <Navbar />
        
        {/* منطقة المحتوى (المهام) تحت الـ Navbar */}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 4, 
            overflowY: 'auto' 
          }}
        >
          {children}
        </Box>
      </Box>

    </Box>
  );
}