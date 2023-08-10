'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Loader from '../../components/Loader';

type User = {
  name: string;
  email: string;
  photo: string;
};

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get('api/user/info');
        const { user } = response.data;
        setUser(user);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    userData();
  }, []);

  const { name, email, photo } = user as User;

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.get('/api/user/logout');
      router.push('/login');
    } catch (error: any) {
      console.log('Logout failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
      {loading && <Loader />}
      <div className="mb-4 mt-12 h-24 w-24 overflow-hidden rounded-full">
        <Image
          src={photo || '/images/default-profile.png'}
          alt="Profile Photo"
          priority={true}
          width={150}
          height={150}
        />
      </div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-gray-600">{email}</p>
      <button
        onClick={handleLogout}
        className="mt-4 w-24 rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
