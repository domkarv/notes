'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Loader from '@/components/Loader';

const SignupPage = () => {
  const router = useRouter();
  const userNameRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);
  const userPasswordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  console.log('Signup page');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = userNameRef.current?.value;
    const email = userEmailRef.current?.value;
    const password = userPasswordRef.current?.value;

    try {
      setLoading(true);
      const response = await axios.post('/api/user/signup', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        console.log('Signup response:', response.data);
        router.push('/login');
      }
    } catch (error: any) {
      console.log('Signup failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {loading && <Loader />}

      <form
        className="w-[35%] rounded-lg bg-white px-12 py-10 shadow-lg"
        autoComplete="off"
        onSubmit={handleSignup}
      >
        <h1 className="mb-4 text-2xl font-black">Sign Up</h1>
        <div className="mb-4">
          <label htmlFor="name" className="mb-1 block">
            Name
          </label>
          <input
            type="text"
            ref={userNameRef}
            required
            id="name"
            className="w-full rounded border border-gray-200 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block">
            Email
          </label>
          <input
            type="email"
            required
            ref={userEmailRef}
            id="email"
            className="w-full rounded border border-gray-200 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="mb-1 block">
            Password
          </label>
          <input
            type="password"
            required
            ref={userPasswordRef}
            id="password"
            className="w-full rounded border border-gray-200 p-2"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Sign Up
        </button>
        <div className="mt-2 px-4 pt-2 text-center">
          <p className="text-sm text-gray-400">Already have an account?</p>
          <Link href="/login" as="/login" className="underline">
            Login Here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
