'use client';

import { CompletePage } from 'client/pageContainer';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function Complete() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      redirect('/auth/signin');
    }
  }, []);

  return (
    <div>
      <CompletePage />
    </div>
  );
}
