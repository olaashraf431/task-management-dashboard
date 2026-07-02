'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { Container, Paper, Box, Typography, TextField, Button, Alert, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';

const validationSchema = Yup.object({
  name: Yup.string().min(3, 'الاسم يجب أن يكون 3 أحرف على الأقل').required('الاسم الكامل مطلوب'),
  email: Yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
  phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'رقم الهاتف يجب أن يكون رقماً مصرياً صحيحاً مكوناً من 11 رقم').required('رقم الهاتف مطلوب'),
  password: Yup.string().min(6, 'كلمة المرور يجب أن لا تقل عن 6 أحرف').required('كلمة المرور مطلوبة'),
  rePassword: Yup.string().oneOf([Yup.ref('password')], 'كلمة المرور غير متطابقة').required('تأكيد كلمة المرور مطلوب'),
});

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); 

  function formikRegister(values: any) {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then(function(res) {
        setIsLoading(false);
        if (res.data.message === "success") {
          toast.success("تم التسجيل بنجاح! جاري التوجيه لصفحة تسجيل الدخول...");
          setTimeout(() => {
            router.push("/login"); 
          }, 1500);
        }
      })
      .catch(function(err) {
        setIsLoading(false);
        setError(err.response?.data?.message || "حدث خطأ ما أثناء التسجيل");
        toast.error("فشل تسجيل الحساب");
      });
  }

  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '', password: '', rePassword: '' },
    validationSchema,
    onSubmit: formikRegister,
    validateOnChange: false, 
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  if (e.key === 'Enter') {
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
            إنشاء حساب جديد
          </Typography>

          {error && <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>}
          {isSuccess && <Alert severity="success" sx={{ borderRadius: 2 }}>{isSuccess}</Alert>}

          <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            
            <input type="text" name="fake-username" style={{ display: 'none' }} autoComplete="username" />
            <input type="password" name="fake-password" style={{ display: 'none' }} autoComplete="current-password" />

            <TextField label="الاسم الكامل" variant="standard" fullWidth name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name}
             disabled={isLoading} autoComplete="off" onKeyDown={handleKeyDown}/>
            
            <TextField label="البريد الإلكتروني" variant="standard" fullWidth name="email" type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} disabled={isLoading} autoComplete="off"
              onKeyDown={handleKeyDown}
              sx={{
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px transparent inset !important',
                  WebkitTextFillColor: '#fff',
                  transition: 'background-color 5000s ease-in-out 0s',
                },
              }} 
            />
            
            <TextField label="رقم الهاتف" variant="standard" fullWidth name="phone" type="tel" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} disabled={isLoading} autoComplete="off" onKeyDown={handleKeyDown} />
            
            <TextField label="كلمة المرور" variant="standard" fullWidth name="password" type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} disabled={isLoading} autoComplete="off"
              onKeyDown={handleKeyDown}
              sx={{
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px transparent inset !important',
                  WebkitTextFillColor: '#fff',
                  transition: 'background-color 5000s ease-in-out 0s',
                },
              }} 
            />
            
            <TextField label="تأكيد كلمة المرور" variant="standard" fullWidth name="rePassword" type="password" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.rePassword && Boolean(formik.errors.rePassword)} helperText={formik.touched.rePassword && formik.errors.rePassword} disabled={isLoading} autoComplete="off"
              onKeyDown={handleKeyDown}
              sx={{
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px transparent inset !important',
                  WebkitTextFillColor: '#fff',
                  transition: 'background-color 5000s ease-in-out 0s',
                },
              }} 
            />

            <Button variant="contained" color="primary" size="large" type="submit" fullWidth disabled={isLoading} sx={{ marginTop: 1, fontWeight: 'bold', borderRadius: 2, height: '48px' }}>
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'تسجيل حساب جديد'}
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              لديك حساب بالفعل؟{' '}
              <Link href="/login" style={{ textDecoration: 'none' }}>
                    <MuiLink 
                      component="span" // بنخليه span عشان الـ Link الأساسي جواه a فعلياً
                      sx={{ 
                        fontWeight: 'bold', 
                        color: 'primary.main', 
                        textDecoration: 'none', 
                        '&:hover': { textDecoration: 'underline' } 
                      }}
                    >
                      سجل دخولك الآن
                    </MuiLink>
                </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}