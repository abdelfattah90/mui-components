import Box from '@mui/material/Box'

const index = () => {
  return (
    <>
      <Box
        sx={{
          width: 400,
          height: 400,
          bgcolor: '#8a496b',
          borderRadius: 5,
          marginX: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: '50%',
            bgcolor: '#d1b9ed',
            borderRadius: 5,
            marginX: 2,
            padding: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          Box 2
        </Box>
      </Box>

      <br />
      <br />
      <a href='https://smartdevpreneur.com/how-to-align-mui-typography-vertically-center-right-left'>
        How to Align MUI Typography Vertically/Center/Right/Left
      </a>
    </>
  )
}

export default index
