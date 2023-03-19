import { Container, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Typography, } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MENU1 from './assets/1.jpg';
import MENU2 from './assets/4.jpg';
import MENU3 from './assets/3.jpg';



const cards = [
  {
    id: 1,
    title: 'Adana Kebabı',
    Image: 'https://i.imgur.com/KujKM7D.jpg',
  },
  {
    id: 2,
    title: 'İskender Kebap',
    image: 'https://i.imgur.com/KujKM7D.jpg',
  },
  {
    id: 3,
    title: 'Lahmacun',
    image: 'https://i.imgur.com/KujKM7D.jpg',
  },
  {
    id: 4,
    title: 'Pide',
    image: 'https://i.imgur.com/KujKM7D.jpg',
  },
  {
    id: 5,
    title: 'Mantı',
    image: 'https://i.imgur.com/TtKnq3C.jpg',
  },
  {
    id: 6,
    title: 'Köfte',
    image: 'https://i.imgur.com/xm2QyCY.jpg',
  },
];


const books = [
  {
    id: 1,
    title: 'AYRAN',
    image: 'https://i.imgur.com/Djg6Ugg.jpg',
  },
  {
    id: 2,
    title: 'KOLA',
    image: 'https://i.imgur.com/tjiZLX9.jpg',
  },
  {
    id: 3,
    title: 'MEYVE SUYU',
    image: 'https://i.imgur.com/JZZ1ERg.jpg',
  },
  {
    id: 4,
    title: 'SALGAM',
    image: 'https://i.imgur.com/KujKM7D.jpg',
  },
  {
    id: 5,
    title: 'BOZA',
    image: 'https://i.imgur.com/TtKnq3C.jpg',
  },
  {
    id: 6,
    title: 'TURK KAHVESI',
    image: 'https://i.imgur.com/xm2QyCY.jpg',
  },
];

const maps = [
  {
    id: 1,
    title: 'KADAYIF',
    image: 'https://i.imgur.com/Djg6Ugg.jpg',
  },
  {
    id: 2,
    title: 'KUNEFE',
    image: 'https://i.imgur.com/tjiZLX9.jpg',
  },
  {
    id: 3,
    title: 'Baklava',
    image: 'https://i.imgur.com/JZZ1ERg.jpg',
  },
  {
    id: 4,
    title: 'BULBUL YUVASI',
    image: 'https://i.imgur.com/KujKM7D.jpg',
  },
  {
    id: 5,
    title: 'KATMER',
    image: 'https://i.imgur.com/TtKnq3C.jpg',
  },
  {
    id: 6,
    title: 'GULLAC',
    image: 'https://i.imgur.com/xm2QyCY.jpg',
  },
];




const theme = createTheme();

export default function Album() {
  return (
    <>
      <ThemeProvider theme={theme}>


        <Box
          sx={{
            bgcolor: 'yellow',
            pt: 10,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              YEMEK
            </Typography>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    image={MENU1}
                    alt={card.title}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>


      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: 'red',
            pt: 10,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              ICECEK
            </Typography>

            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {books.map((book) => (
              <Grid item key={book.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"

                    image={MENU3}
                    alt={book.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {book.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>

      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: 'green',
            pt: 10,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              TATLI
            </Typography>

            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">

          <Grid container spacing={4}>
            {maps.map((map) => (
              <Grid item key={map.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={MENU2}
                    alt={map.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {map.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>

    </>
  );
}