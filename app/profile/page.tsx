'use client';

import { useEffect, useState } from 'react';
import NavigateProfile from '../components/profile/navigateProfile';
import SalutionContainer from '../components/profile/salutationContainer';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const [message, setMessage] = useState<null | string>(null);

  const router = useRouter();

  async function getUserData() {
    const userId = Cookie.get('user_id');
    const authToken = Cookie.get('auth_token');
    const res = await fetch(`http://localhost:3000/users/${userId}`, {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    var data = await res.json();
    if (!res.ok) {
      if (typeof data.message == 'string') {
        setMessage(data.message);
      } else {
        setMessage(data.message[0]);
      }
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (message) {
      Cookie.remove('auth_token');
      Cookie.remove('user_id');

      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return message ? (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>{message} Redirecionando...</p>
    </div>
  ) : (
    <main className="h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <SalutionContainer />
        <NavigateProfile />
      </div>
    </main>
  );
}
