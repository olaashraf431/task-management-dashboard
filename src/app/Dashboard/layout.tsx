import React from 'react'
import Navbar from './components/Navbar';

export default function layout({children}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 w-full">
        {/* الجزء الخاص بال sidebar  علا  */}
        <div className="w-64 h-full bg-white border-l border-gray-200">
       <p className='text-gray-400 p-4'> المساحة الجانبية </p>
        </div>
      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        {/* الـ Navbar الخاص بكِ (ستصممينه هنا مباشرة بارتفاع ثابت) */}
        <Navbar />
   <main className="p-6 flex-1">
          {children}
        </main>
        </div>
 
    </div>
  )
}
