import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { ServerOptions } from './serverOptions';
import { Navigation } from './navigation';
import { Paths } from '@/utils/paths';
import { TbPlanet } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiServer } from 'react-icons/bi';

export const Navbar: React.FC = () => {
  return (
    <Flex direction='column' h='full' justifyContent='space-between'>
      <Flex direction='column'>
        <ServerOptions />
        <Navigation page={Paths.fileList} className='mt-5'>
          <div className='w-5 mr-2'>
            <TbPlanet className='text-xl ' />
          </div>
          Overview
        </Navigation>
        <Navigation page={Paths.server}>
          <div className='w-5 mr-2'>
            <BiServer className='text-lg ' />
          </div>
          Servers
        </Navigation>
        <Navigation page={Paths.settings}>
          <div className='w-5 mr-2'>
            <IoSettingsOutline className='text-lg ' />
          </div>
          Settings
        </Navigation>
      </Flex>
      <Link
        href='https://hyfic.github.io/snorlax'
        target='_blank'
        className='text-sm  opacity-50'
      >
        Snorlax v1.0.0
      </Link>
    </Flex>
  );
};
