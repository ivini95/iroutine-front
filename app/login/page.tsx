'use client';

import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal } from 'lucide-react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<any>();

  const router = useRouter()

  async function login() {
    event?.preventDefault();
    setIsLoading(true);
    setAlert(false);
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
      var data = await res.json();
      if (!res.ok) {
        setAlert(true);
        if (typeof data.message == 'string') {
          setAlertMessage(data.message);
        } else {
          setAlertMessage(data.message[0]);
        }
      } else {
        Cookie.set('user_id', data.userId)
        Cookie.set('auth_token', data.accessToken)
        router.push('/profile')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    setTimeout(() => {
      setAlert(false);
    }, 3000);
    //redirecionar e salvar token
  }

  return (
    <main className="h-screen">
      {alert ? (
        <Alert className="h6 w-72 absolute top-14 left-1/2 transform -translate-x-1/2 bg-background text-primary border-primary">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Login error!</AlertTitle>
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      ) : (
        <></>
      )}
      <form className="flex flex-col items-center justify-center h-full gap-8">
        <Input
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          type="text"
          name="user"
          data-testid="userInput"
          placeholder="Usuário"
          className="h-10 w-72 rounded-lg border-2 border-primary text-primary bg-transparent text-center"
        />
        <Input
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          type="password"
          name="password"
          data-testid="passwordInput"
          placeholder="Senha"
          className="h-10 w-72 rounded-lg border-2 border-primary  text-primary bg-transparent text-center"
        />
        {/* <Link href={'profile'}></Link> */}
        <Button
          onClick={login}
          type="submit"
          className="h-16 w-40 font-semibold text-sm "
        >
          {isLoading ? 'Loading...' : 'Login'}
        </Button>

        <p className="text-xs">
          Não possui conta?{' '}
          <Link
            data-testid="createUserLink"
            className="text-primary decoration-primary"
            href={'createUser'}
          >
            Criar.
          </Link>
        </p>
      </form>
    </main>
  );
}
