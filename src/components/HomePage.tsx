import { useEffect, useState } from 'react';
import image from './assets/kermes.jpg';
import { Box, Collapse, Container, Grid, IconButton, Typography, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, } from '@mui/material';
import { Link as Scroll } from 'react-scroll';
import IMG from './assets/srntp.jpg';
import IMG1 from './assets/serntp.jpg';
import Carousel from 'react-material-ui-carousel';
import React from 'react';
import MENU1 from './assets/menu_resim.jpg';
import MENU2 from './assets/menu_resim1.jpg';
import MENU3 from './assets/menu_resim2.jpg';

export default function HomePage() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpand = () => {
        setExpanded(!expanded);
    };
    const [activeIndex, setActiveIndex] = useState(0);
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    const CarouselItem = styled('div')(({ theme }) => ({
        height: '750px',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    }));
    const items = [
        {
            image: IMG1,
        },
        {
            image: IMG,
        },
    ];
    const StyledCard = styled(Card)(({ }) => ({
        maxWidth: 445,
        margin: '20px',
        background: 'rgba(0,0,0,0.5)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    }));
    const StyledCardContent = styled(CardContent)(({ }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '120px',
    }));
    const StyledTypography = styled(Typography)(({ }) => ({
        color: '#fff',
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: '2rem',
    }));
    const StyledHeading = styled(Typography)(({ }) => ({
        color: '#fff',
        fontFamily: 'serif',

        fontWeight: 'bold',
        fontSize: '4rem',
        marginBottom: '24px',
        textAlign: 'center',
        marginTop: '300px'
    }));

    return (
        <>
            <Box sx={{ overflow: 'auto' }}>
                <Collapse
                    in={checked}
                    {...(checked ? { timeout: 1000 } : {})}>
                    <div style={{ textAlign: 'center', }}>
                        <Container maxWidth="md">
                            <Grid container alignItems="center" justifyContent="center"  >
                                <Grid item>
                                    <Typography sx={{
                                        height: '100vh',
                                        fontSize: '4.8rem',
                                        fontFamily: 'initial',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                        component="h1"
                                        variant="h2"
                                        gutterBottom
                                    >
                                        Kermesimize Hoş Geldiniz
                                    </Typography>
                                    <Scroll to='place-to-visit' smooth={true}>
                                        <IconButton>
                                            <ExpandMoreIcon sx={{
                                                color: '#FFF',
                                                fontSize: '5rem',
                                                marginTop: '-700px'
                                            }}
                                            />
                                        </IconButton>
                                    </Scroll>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </Collapse>
                <Container maxWidth="md" id='place-to-visit'>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={12} md={6} xl={6}>
                            <Box textAlign='left' >
                                <Typography variant="h2" component="h2" gutterBottom >
                                    KERMESIMIZ HAKKINDA
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    İlim irfan yuvası haline gelen Hamidiye Öğrenci Yurtlarımızda vatanını, bayrağını ve dinine seven nesiiler yetiştirilmektedir. Bu kermesten elde edilen gelirlerle sizlerin çocuklarının iaşesi sağlanmaktadır. Eğitim masrafları giderilmektedir. Büyük bir emekle hayır sahipleri bu kermese hazırlık yaptı ve maddi manevi destek oldu. Emeği geçen herkese teşekkür ederim. Gıda'dan mobilyaya, çeyiz eşyalarından ev yemeklerini oldukça geniş bir yelpazeye sahip kermesimizde misafirlerimiz için özel olarak aile salonlarımız mevcuttur. Rahat bir şekilde gezebilecekleri, geniş alan üzerine kurulmuş hayır kermesimiz 23 Nisan tarihine kadar Kahramanmaraşlıların hizmetinde olacak. Gelin görün alın, alışverişiniz hayra dönüşsün düsturu ile açtığımız kermesimiz memleketimize hayırlı olsun
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} xl={6}>
                            <Box sx={{ width: '100%' }}>
                                <img width='100%' src={image} alt="kermes" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <StyledHeading variant="h2">MENULERIMIZ</StyledHeading>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <StyledCard
                                sx={{
                                    '& .MuiCardActionArea-focusHighlight': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                }}
                            >
                                <CardActionArea onClick={handleExpand}>
                                    <CardMedia sx={{ height: 440 }} component="img" height="140" image={MENU1} alt="Image" />
                                    <StyledCardContent>
                                        <StyledTypography gutterBottom variant="h5">
                                            GUNUN MENUSU
                                        </StyledTypography>
                                    </StyledCardContent>
                                </CardActionArea>
                            </StyledCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <StyledCard
                                sx={{
                                    '& .MuiCardActionArea-focusHighlight': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                }}
                            >
                                <CardActionArea onClick={handleExpand}>
                                    <CardMedia sx={{
                                        height: 440
                                    }}
                                        component="img"
                                        height="140"
                                        image={MENU2}
                                        alt="Image"
                                    />
                                    <StyledCardContent>
                                        <StyledTypography gutterBottom variant="h5" >
                                            FIX MENU
                                        </StyledTypography>
                                    </StyledCardContent>
                                </CardActionArea>
                            </StyledCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <StyledCard
                                sx={{
                                    '& .MuiCardActionArea-focusHighlight': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                }}
                            >
                                <CardActionArea onClick={handleExpand}>
                                    <CardMedia sx={{
                                        height: 440
                                    }}
                                        component="img"
                                        height="140"
                                        image={MENU3}
                                        alt="Image"
                                    />
                                    <StyledCardContent>
                                        <StyledTypography gutterBottom variant="h5" >
                                            ALAKART MENU
                                        </StyledTypography>
                                    </StyledCardContent>
                                </CardActionArea>
                            </StyledCard>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Box
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    maxWidth: 'md',
                    position: 'initial',
                    mt: 24,
                }}
            >
                <Carousel
                    animation="slide"
                    interval={3000}
                    indicatorContainerProps={{ style: { marginTop: '20px' } }}
                    activeIndicatorIconButtonProps={{ style: { color: 'black' } }}
                    indicatorIconButtonProps={{ style: { color: 'white' } }}
                    onChange={(index) => {
                        if (typeof index === 'number') {
                            setActiveIndex(index);
                        }
                    }}
                >
                    {items.map((item, index) => (
                        <CarouselItem
                            key={index}
                            style={{
                                backgroundImage: `url(${item.image})`,
                            }}
                        >
                        </CarouselItem>
                    ))}
                </Carousel>
            </Box>
        </>
    );
}




