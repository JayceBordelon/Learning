import '@mantine/core/styles.css';

import { AppShell, Burger, Image, createTheme, Group, MantineProvider, rem } from '@mantine/core';
import BrainLogo from '/brain.svg';
import { useDisclosure } from '@mantine/hooks';

const theme = createTheme({
  colors: {
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },
  primaryColor: 'deepBlue',

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Image src={BrainLogo} alt="Logo" h={30} />
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <div>📁 File Tree Coming Soon…</div>
        </AppShell.Navbar>

        <AppShell.Main>
          <h1>Welcome to Optifile</h1>
          <p>This is your dark-themed layout with logo + sidebar + responsive nav.</p>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
