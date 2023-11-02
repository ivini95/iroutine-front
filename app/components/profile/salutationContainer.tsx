'use client';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';

interface IdataRes {
  name: string;
  id: string;
}

export default function SalutionContainer() {
  const [dataRes, setDataRes] = useState<null | IdataRes>(null);
  const [currentSalution, setCurrentSalution] = useState<string>('');

  async function getUserData() {
    const userId = Cookie.get('user_id');
    const authToken = Cookie.get('auth_token');
    const res = await fetch(`http://localhost:3000/users/${userId}`, {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await res.json();
    setDataRes(data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  function getCurrentData() {
    const newDate = new Date();
    const hour = newDate.getHours();

    if (hour >= 6 && hour < 12) {
      setCurrentSalution('Bom Dia!');
    } else if (hour >= 12 && hour <= 18) {
      setCurrentSalution('Boa Tarde!');
    } else if (hour > 18 && hour <= 24) {
      setCurrentSalution('Boa Noite!');
    } else {
      setCurrentSalution('Tá meio tarde né.');
    }
  }

  useEffect(() => {
    getCurrentData();
  }, []);

  //caso não esteja authorizado apagar cookie e redirecionar para login

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-base font-semibold">
        Olá<span> {dataRes?.name}</span>!
      </h2>
      <p className="text-sm text-primary font-semibold">{currentSalution}</p>
    </div>
  );
}
