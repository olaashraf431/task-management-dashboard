'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // أول ما الموقع يفتح، هوب يحوله على صفحة اللوجن
    router.push('/login'); 
  }, [router]);

  return null; 
}