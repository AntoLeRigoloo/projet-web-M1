'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Pen from '../../../public/Pen.svg';
import Home from '../../../public/Home.svg';
import Book from '../../../public/Book.svg';
import User from '../../../public/User.svg';
import Button from '../interaction/button';
import Logo from '../../../public/Book - 1.svg';

export default function Menu(): React.ReactElement {
  const router = useRouter();
  const url = usePathname();

  return (
    <div className="flex-1 min-w-[300px] bg-white-500 rounded-xl shadow flex flex-col px-4 py-8 gap-8">
      <div className="flex gap-2 items-center">
        <Image
          src={Logo.src}
          alt="Book"
          height={Logo.height * 1.5}
          width={Logo.width * 1.5}
        />
        <span className="font-bold text-2xl">BookViewer</span>
      </div>
      <div className="flex h-px bg-background" />
      <div className="flex flex-1 flex-col gap-2">
        <Button
          text="Home"
          icon={Home}
          className={url === '/' ? 'bg-gray-200' : undefined}
          onClick={(): void => router.push('/')}
        />
        <Button
          text="Livres"
          icon={Book}
          className={url === '/books' ? 'bg-gray-200' : undefined}
          onClick={(): void => router.push('/books')}
        />
        <Button
          text="Auteurs"
          icon={Pen}
          className={url === '/authors' ? 'bg-gray-200' : undefined}
          onClick={(): void => router.push('/authors')}
        />
        <Button
          text="Utilisateurs"
          icon={User}
          className={url === '/users' ? 'bg-gray-200' : undefined}
          onClick={(): void => router.push('/users')}
        />
      </div>
    </div>
  );
}
