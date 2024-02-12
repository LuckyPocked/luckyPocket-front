'use client';

import { WritePage } from 'client/pageContainer';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function Write() {
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

  return <WritePage />;
}
