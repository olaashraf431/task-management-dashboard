'use client'; 

import React, { useEffect } from 'react'; // 🌟 ضفنا useEffect
import { ThemeProvider, createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import originalTheme from '@/theme'; 

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const rtlTheme = createTheme({
  ...originalTheme,
  direction: 'rtl', 
});

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  
  // 🌟 السطر السحري اتنقل هنا جوه useEffect عشان يتنفذ في المتصفح بس ونمنع الـ Hydration Error
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}