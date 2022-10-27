import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const index = () => {
  return (
    <>
      <Stack spacing={2} sx={{ width: '40%' }}>
        <Card>
          <Typography variant='h5' p={1}>
            1 - Card
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={1}>
            1 - Card
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={1}>
            1 - Card
          </Typography>
        </Card>
      </Stack>
      <Divider sx={{ marginY: 2 }} />
      <Stack
        divider={<Divider orientation='vertical' flexItem />}
        direction='row'
        spacing={2}
      >
        <Card>
          <Typography variant='h5' p={1}>
            1 - Card
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={1}>
            1 - Card
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={1}>
            1 - Card
          </Typography>
        </Card>
      </Stack>
      <Divider sx={{ marginY: 2 }} />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Card>
          <Typography variant='h5' p={5}>
            Responsive values
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={5}>
            Responsive values
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={5}>
            Responsive values
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={5}>
            Responsive values
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={5}>
            Responsive values
          </Typography>
        </Card>
      </Stack>
      <Divider sx={{ marginY: 2 }} />
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='baseline'
        spacing={3}
      >
        <Card>
          <Typography variant='h5' p={5}>
            Interactive
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={5}>
            Interactive
          </Typography>
        </Card>
        <Card>
          <Typography variant='h5' p={5}>
            Interactive
          </Typography>
        </Card>
      </Stack>
    </>
  )
}

export default index
