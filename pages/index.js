import Head from 'next/head'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Box from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LinkMui from '@mui/material/Link'
export default function Home() {
  const LINKS = [
    { name: 'Grid', link: '/grid' },
    { name: 'Appbar', link: '/appbar' },
    { name: 'Box', link: '/box' },
    { name: 'Stack', link: '/stack' },
    { name: 'AppBar Drawer', link: '/appbardrawer' },
  ]
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Material UI Components' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Typography align='center' variant='h5'>
        <LinkMui
          align='center'
          href='https://mui.com/material-ui'
          underline='none'
          target='_blank'
          rel='noopener'
        >
          Material UI All Components
        </LinkMui>
      </Typography>
      <Typography variant='h5'>Layout</Typography>
      <Box direction='row' sx={{ flexWrap: 'wrap' }}>
        {LINKS.map((LINK, idx) => {
          return (
            <div key={idx}>
              <Link href={LINK.link} style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  sx={{ paddingX: 5, marginX: 1, marginY: 1 }}
                >
                  {LINK.name}
                </Button>
              </Link>
            </div>
          )
        })}
      </Box>
    </>
  )
}
