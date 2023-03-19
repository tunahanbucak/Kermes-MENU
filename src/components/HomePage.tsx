import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import image from './assets/kermes.jpg';
import { Box, Collapse, Container, Grid, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const Content = styled('section')({
//     backgroundColor: 'gray',
//     padding: '40px 0',
// });

// const ImageWrapper = styled('div')({
//     height: '100vh',
//     width: '97vh',
//     position: 'relative',
//     overflow: 'hidden',
//     '& img': {
//         objectFit: 'cover',
//         objectPosition: '50% 50%',
//         height: '100%',
//         width: '100%',
//     },
// });

export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0); // default value is 0

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}>
                <div style={{ textAlign: 'center', }}>
                    <Container maxWidth="md">
                        <Grid container alignItems="center" justifyContent="center"  >
                            <Grid item>
                                <Typography sx={{ height: '100vh', fontSize: '4.8rem', fontFamily: 'initial', color: '#fff', display: 'flex', marginTop: '80px', alignItems: 'center', justifyContent: 'center' }} component="h1" variant="h2" gutterBottom>
                                    Kermesimize Hoş Geldiniz
                                </Typography>
                                <IconButton>
                                    <ExpandMoreIcon sx={{ color: '#FFF', fontSize: '5rem', marginTop: '-700px' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Collapse>
            <Box>
                <Container maxWidth="md">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} sm={12} md={6} xl={6}>
                            <Box textAlign='left' >
                                <Typography variant="h2" component="h2" gutterBottom>
                                    KERMESIMIZ HAKKINDA
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    İlim irfan yuvası haline gelen Hamidiye Öğrenci Yurtlarımızda vatanını, bayrağını ve dinine seven nesiiler yetiştirilmektedir. Bu kermesten elde edilen gelirlerle sizlerin çocuklarının iaşesi sağlanmaktadır. Eğitim masrafları giderilmektedir. Büyük bir emekle hayır sahipleri bu kermese hazırlık yaptı ve maddi manevi destek oldu. Emeği geçen herkese teşekkür ederim. Gıda'dan mobilyaya, çeyiz eşyalarından ev yemeklerini oldukça geniş bir yelpazeye sahip kermesimizde misafirlerimiz için özel olarak aile salonlarımız mevcuttur. Rahat bir şekilde gezebilecekleri, geniş alan üzerine kurulmuş hayır kermesimiz 23 Nisan tarihine kadar Kahramanmaraşlıların hizmetinde olacak. Gelin görün alın, alışverişiniz hayra dönüşsün düsturu ile açtığımız kermesimiz memleketimize hayırlı olsun
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}  sm={12} md={6} xl={6}>
                            <Box sx={{width: '100%'}}>
                                <img width='100%' src={image} alt="kermes" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

function useStyles() {
    throw new Error('Function not implemented.');
}

