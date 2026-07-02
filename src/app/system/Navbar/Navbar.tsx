'use client';

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{ 
        right: 0, 
        top: 0,
        width: '100%', 
        backgroundColor: 'background.paper', 
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      {/* الـ Toolbar هيرص العناصر طبيعي بناءً على الـ RTL الجديد (العناوين يمين والزارير شمال) */}
      <Toolbar sx={{ justifyContent: 'space-between', display: 'flex' }}>
        
        {/* عنوان لوحة التحكم - هيقعد على اليمين جنب السايد بار الجديد بالظبط */}
        <Typography variant="h6" component="div" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
          لوحة التحكم
        </Typography>

        {/* صندوق الزراير - هيتزق أوتوماتيك لأقصى الشاشة ناحية الشمال */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          
          {/* زرار تسجيل الدخول */}
          <Button
            component={Link}
            href="/login" 
            variant="outlined"
            color="primary"
            sx={{ 
              fontWeight: 'bold', 
              borderRadius: 2,
              textTransform: 'none'
            }}
          >
            تسجيل الدخول
          </Button>

          {/* زرار إنشاء حساب */}
          <Button
            component={Link}
            href="/register" 
            variant="contained"
            color="primary"
            sx={{ 
              fontWeight: 'bold', 
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' }
            }}
          >
            إنشاء حساب
          </Button>
          
        </Box>

      </Toolbar>
    </AppBar>
  );
}