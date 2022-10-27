import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const GridPage = () => {
  return (
    <>
      <Typography variant='h5'>
        item lg={4} md={4} sm={6} xs={12}
      </Typography>

      <Grid
        container
        padding={5}
        spacing={2}
        rowSpacing={3}
        direction='row' // row default -- column
        // justifyContent='space-evenly'
        // alignItems='center'
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        bgcolor='#fcfcfc'
      >
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card>
            <Typography variant='h5' p={2}>
              1 - Card
            </Typography>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card>
            <Typography variant='h5' p={2}>
              3 - Card
            </Typography>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card>
            <Typography variant='h5' p={2}>
              3 - Card
            </Typography>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card>
            <Typography variant='h5' p={2}>
              4 - Card
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default GridPage
