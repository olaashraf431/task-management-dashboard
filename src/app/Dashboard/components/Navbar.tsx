'use client'; // لأننا نستخدم أزرار وتفاعلات وقوائم (State)

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  InputBase, 
  Badge, 
  Avatar, 
  Menu, 
  MenuItem, 
  Box, 
  Typography 
} from '@mui/material';

import { 
  Search as SearchIcon, 
  Notifications as NotificationsIcon,
  Menu as MenuIcon 
} from '@mui/icons-material';

export default function Navbar() {
  // الـ State الخاص بفتح وإغلاق قائمة المستخدم المنسدلة
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#ffffff', 
        color: '#2d3748', 
        boxShadow: 'none', 
        borderBottom: '1px solid #e2e8f0',
        height: '64px',
        justifyContent: 'center'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'between', width: '100%' }}>
        
        {/* 1. الجانب الأيمن: زر الموبايل وعنوان لوحة التحكم */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* هذا الزر سيظهر في الشاشات الصغيرة فقط، يمكنك تنسيقه لاحقاً مع زميلتك لفتح السايدبار */}
          <IconButton edge="end" color="inherit" sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            لوحة التحكم
          </Typography>
        </Box>

        {/* 2. المنتصف: شريط البحث الاحترافي */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center', 
          backgroundColor: '#f7fafc', 
          border: '1px solid #e2e8f0', 
          borderRadius: '8px', 
          px: 2, 
          py: 0.5, 
          width: '320px',
          mx: 'auto'
        }}>
          <SearchIcon sx={{ color: '#a0aec0', mr: 1, ml: 1 }} />
          <InputBase
            placeholder="ابحث عن أي شيء..."
            sx={{ width: '100%', fontSize: '0.875rem' }}
          />
        </Box>

        {/* 3. الجانب الأيسر: الإشعارات والملف الشخصي */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          
          {/* أيقونة الإشعارات مع Badge (رقم التنبيهات) */}
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error" >
              <NotificationsIcon sx={{ color: '#718096' }} />
            </Badge>
          </IconButton>

          {/* خط فاصل رمادي صغير */}
          <Box sx={{ width: '1px', height: '24px', backgroundColor: '#e2e8f0' }}></Box>

          {/* معلومات وصورة المستخدم - قابلة للضغط لفتح القائمة */}
          <Box 
            onClick={handleProfileMenuOpen} 
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}
          >
            <Box sx={{ textAlign: 'left', display: { xs: 'none', sm: 'block' } }}>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#1a202c' }}>
               ايمان يوسف
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: '#a0aec0' }}>
                مدير النظام
              </Typography>
            </Box>
            
            {/* الصورة الشخصية (Avatar) */}
            <Avatar sx={{ bgcolor: '#3182ce', width: 36, height: 36, fontSize: '0.9rem', fontWeight: 'bold' }}>
              أ
            </Avatar>
          </Box>

        </Box>

        {/* القائمة المنسدلة (Dropdown Menu) للملف الشخصي */}
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          sx={{ '& .MuiPaper-root': { borderRadius: '8px', minWidth: '150px', mt: 1 } }}
        >
          <MenuItem onClick={handleMenuClose} sx={{ fontSize: '0.875rem' }}>الملف الشخصي</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ fontSize: '0.875rem' }}>الإعدادات</MenuItem>
          <Box sx={{ borderTop: '1px solid #e2e8f0', my: 0.5 }}></Box>
          <MenuItem onClick={handleMenuClose} sx={{ fontSize: '0.875rem', color: '#e53e3e' }}>
            تسجيل الخروج
          </MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}