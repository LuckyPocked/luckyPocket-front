'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { SendPage } from 'client/pageContainer';
export default function Send() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      redirect('/auth/signin');
    } else {
      const status = 401;
      if (status === 401) {
        redirect('/auth/signin');
      }
    }
  }, []);
  return (
    <div>
      <SendPage />
    </div>
  );
}
