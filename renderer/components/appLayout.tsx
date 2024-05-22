import { ReactComponent } from '@/types/react.type';
import { IconButton, Flex } from '@chakra-ui/react';
import { Navbar } from './navbar';
import { FiMinus } from "react-icons/fi";
import { FiSquare } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { DarkModeSwitch } from './darkModeSwitch';


export const AppLayout: ReactComponent = ({ children }) => {
  return (
    <Flex>
      <Flex direction='column' className='p-3 w-72 h-screen dark:bg-app-dark1 bg-slate-100'>
        <Navbar />
      </Flex>
      <div className='w-full h-screen overflow-y-scroll px-5 py-3'>
        <Flex justifyContent='space-between' alignItems='center'>
          <DarkModeSwitch />
          <Flex justifyContent='end' alignItems='center'>
            <IconButton size='sm' aria-label='minimize' icon={<FiMinus size={22} className='pt-2' />} colorScheme='yellow' variant='ghost' onClick={() => window.ipc.send('window-min')} />
            <IconButton size='sm' aria-label='maximize' icon={<FiSquare size={13} />} colorScheme='yellow' variant='ghost' onClick={() => window.ipc.send('window-max')} />
            <IconButton size='sm' aria-label='close' icon={<FiX size={17} />} colorScheme='yellow' variant='ghost' onClick={() => window.ipc.send('window-close')} />
          </Flex>
        </Flex>
        {children}
      </div>
    </Flex>
  );
};
