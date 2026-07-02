'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Paper, Box, Typography, TextField, Button, Alert, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';

const validationSchema = Yup.object({
  email: Yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب لتسجيل الدخول'),
  password: Yup.string().min(6, 'كلمة المرور يجب أن لا تقل عن 6 أحرف').required('كلمة المرور مطلوبة'),
});

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function formikLogin(values: any) {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    // الـ API بتاع اللوجن في سيرفر Route اسمه signin
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .then(function(res) {
        setIsLoading(false);
        if (res.data.message === "success") {
          //  حفظ التوكن في الـ LocalStorage عشان نثبت الـ Access
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }
          toast.success("تم تسجيل الدخول بنجاح !");
          
          setTimeout(() => {
            router.push('/system');
          }, 1500);
        }
      })
      .catch(function(err) {
        setIsLoading(false);
        toast.error("خطأ في البريد الإلكتروني أو كلمة المرور");
      });
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: formikLogin,
  });
const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  if (e.key === 'Enter') {
    //  نمنع المتصفح إنه يعمل Submit للفورم
    e.preventDefault(); 
    
    const target = e.target as HTMLInputElement;
    // بنجيب كل الحقول المتاحة في الفورم واللي مش مقفولة
    const form = target.form;
    if (form) {
      const index = Array.from(form.elements).indexOf(target);
      // بنجيب الحقل اللي عليه الدور بالظبط
      const nextElement = form.elements[index + 1] as HTMLElement;
      
      if (nextElement && nextElement.focus) {
        nextElement.focus(); //  انقل الفوكس على الحقل اللي بعده
      } else {
        // لو مفيش حقل بعده (يعني وصلنا لآخر حاجة)، يعمل سبميت للفورم عادي
        form.requestSubmit();
      }
    }
  }
};
  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'background.default' }}>
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, backgroundColor: 'background.paper', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant="h5" component="h1" align="center" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
            تسجيل الدخول
          </Typography>

          {error && <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>}
          {isSuccess && <Alert severity="success" sx={{ borderRadius: 2 }}>{isSuccess}</Alert>}

          <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
           {/* //  الحقول الوهمية لخدعة المتصفح محطوطة هنا في المكان الصح المستخبّي */}
           <input type="text" name="fake-username" style={{ display: 'none' }} autoComplete="username" />
           <input type="password" name="fake-password" style={{ display: 'none' }} autoComplete="current-password" />
           
            <TextField 
            onKeyDown={handleKeyDown}
            autoComplete="off"
            sx={{
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px transparent inset !important',
                  WebkitTextFillColor: '#fff',
                  transition: 'background-color 5000s ease-in-out 0s',
                },
              }} 
            label="البريد الإلكتروني" variant="standard" fullWidth name="email" type="email" slotProps={{ htmlInput: { dir: 'rtl' } }} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} disabled={isLoading} />
            <TextField
             onKeyDown={handleKeyDown}
             autoComplete="off"

             sx={{
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px transparent inset !important',
                  WebkitTextFillColor: '#fff',
                  transition: 'background-color 5000s ease-in-out 0s',
                },
              }} 
             label="كلمة المرور" variant="standard" fullWidth name="password" type="password" slotProps={{ htmlInput: { dir: 'rtl' } }} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} disabled={isLoading} />
            
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth disabled={isLoading} sx={{ marginTop: 1, fontWeight: 'bold', borderRadius: 2, height: '48px' }}>
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'تسجيل دخول'}
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                ليس لديك حساب بالفعل؟{' '}
                <Link href="/register" style={{ textDecoration: 'none' }}>
                      <MuiLink 
                        component="span" 
                        sx={{ 
                          fontWeight: 'bold', 
                          color: 'primary.main', 
                          textDecoration: 'none', 
                          '&:hover': { textDecoration: 'underline' } 
                        }}
                      >
                      انشاء حساب جديد
                      </MuiLink>
                  </Link>
              </Typography>
          </Box>

        </Paper>
      </Container>
    </Box>
  );
}