// src/app/ToastProvider.tsx
'use client'; // 🌟 لازم نكتب دي عشان ده Client Component

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center" // مكان الظهور (فوق في النص)
      reverseOrder={false}
      toastOptions={{
        // تقدري تظبطي الستايل هنا عشان يمشى مع الكحلي الفخم بتاعكِ
        style: {
          background: '#333',
          color: '#fff',
          fontFamily: 'sans-serif',
        },
        success: {
          duration: 3000, // يختفي بعد 3 ثواني
          style: {
            background: '#fff', // لون أخضر للنجاح
                    color: '#222',
          },
        },
        error: {
          duration: 4000,
          style: {
            background: '#fff', // لون أحمر للخطأ
                        color: '#222',

          },
        },
      }}
    />
  );
}