import Image from 'next/image';
import React from 'react';
import HeaderItem from './HeaderItem';
import Link from 'next/link';

import {
  HomeIcon,
  BadgeCheckIcon,
  UserIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="USER" Icon={UserIcon} />
      </div>

      <Link href="/">
        <Image
          src="https://links.papareact.com/ua6"
          className="object-contain cursor-pointer"
          height={100}
          width={200}
          alt="Hulu Logo"
        />
      </Link>
    </header>
  );
}

export default Header;
