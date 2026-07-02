'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
 palette: {
  
    primary: {
      main: '#09c', 
      contrastText: '#ffffff'
    },
    background: {
      default: '#0f172a',  //#1e293b
      paper: '#1e293b',  
        //#
    },
   text: {
      primary: '#f8fafc',   // أبيض مائل للرمادي خفيف جداً عشان ميزغللش العين في العناوين
      secondary: '#94a3b8', // رمادي هادي للنصوص التوضيحية والـ Placeholders
    },
  
  },
});

export default theme;