import { ReactComponent } from '@/types/react.type'; 
import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  page: string;
  className?: string;
}

export const Navigation: ReactComponent<Props> = ({
  children,
  page,
  className,
}) => {
  const location = useRouter();
  const onPage = location.pathname === page; // check if user is on provided page

  return (
    <Link href={page}>
      <Button>Button</Button>
      <Flex
        py={2}
        px={4}
        mt={1}
        alignItems='center'
        className={`rounded-md border-2 font-medium ${
          onPage
            ? 'dark:bg-app-dark3 dark:border-app-dark4'
            : 'opacity-80 transition-all dark:border-app-dark1 duration-100 hover:opacity-100 dark:hover:bg-app-dark2 dark:hover:border-app-dark2 '
        } ${className}`}
      >
        {children}
      </Flex>
    </Link>
  );
};
