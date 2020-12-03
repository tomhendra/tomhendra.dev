/** @jsxImportSource theme-ui */
import { NavbarLink, ModeToggle } from '.';
import { Box, Flex } from 'theme-ui';

export function Navbar({ ...props }) {
  return (
    <Box {...props}>
      <Flex
        as="nav"
        p={4}
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <NavbarLink href="/">tomhendra.dev</NavbarLink>
        <Flex
          sx={{
            width: 128,
            justifyContent: 'space-between',
          }}
        >
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <ModeToggle />
        </Flex>
      </Flex>
    </Box>
  );
}
