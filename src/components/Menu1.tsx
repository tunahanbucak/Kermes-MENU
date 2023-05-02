import * as React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Box, Grid } from '@mui/material'
import Image from './assets/mihlama.webp'
import Image1 from './assets/sucuk.webp'
import Image2 from './assets/omlet.webp'
import Image3 from './assets/menemen.webp'
import Image4 from './assets/coban_salata.webp'
import Image5 from './assets/tavuklu_sezar_salata.webp'
import Image6 from './assets/balik_salata.webp'
import Image7 from './assets/mevsim_salata.webp'
import Image8 from './assets/sucuklu_pizza.webp'
import Image9 from './assets/peynirli_pizza.webp'
import Image10 from './assets/margarita.webp'
import Image11 from './assets/mista.webp'
import Image12 from './assets/ayva_tatlisi.webp'
import Image13 from './assets/kabak_tatlisii.webp'
import Image14 from './assets/sufle.webp'
import Image15 from './assets/sutlac.webp'
import Image16 from './assets/karisik_tost.webp'
import Image17 from './assets/kasarli _tost.webp'
import Image18 from './assets/sucuklu _tost.webp'
import Image19 from './assets/kavurma.webp'
import Image20 from './assets/cay.webp'
import Image21 from './assets/turk_kahvesi.webp'
import Image22 from './assets/sicak_cikolata.webp'
import Image23 from './assets/salep.webp'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { menus } from '../utils/data'

export default function ButtonSizes() {
    const [showInfo, setShowInfo] = React.useState(false);
    const [selectedButton, setSelectedButton] = React.useState(1);
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        id && handleClick(+id);
    }, [id])

    const handleClick = (buttonId: React.SetStateAction<number>) => {
        setShowInfo(true);
        setSelectedButton(buttonId);
    };

    const getButtonInfo = (buttonId: number) => {
        console.log(buttonId)

        switch (buttonId) {
            case 1:
                return {
                    image: Image,
                    text: 'Mihlama',
                    image1: Image1,
                    text1: 'Sucuklu yumurta',
                    image2: Image2,
                    text2: 'Kiymali omlet',
                    image3: Image3,
                    text3: 'menemen',


                };
            case 2:
                return {
                    image: Image4,
                    text: 'Coban salata',
                    image1: Image5,
                    text1: 'Tavuklu sezar salata',
                    image2: Image6,
                    text2: 'Ton balikli salata',
                    image3: Image7,
                    text3: 'Mevsim salata',

                };
            case 3:
                return {
                    image: Image8,
                    text: 'Sucuklu pizza',
                    image1: Image9,
                    text1: 'Peynirli pizza',
                    image2: Image10,
                    text2: 'Margarita',
                    image3: Image11,
                    text3: 'Mista',

                };
            case 4:
                return {
                    image: Image12,
                    text: 'Ayva tatlisi',
                    image1: Image13,
                    text1: 'Kabak tatlisi',
                    image2: Image14,
                    text2: 'Sufle',
                    image3: Image15,
                    text3: 'Sutlac',

                };
            case 5:
                return {
                    image: Image16,
                    text: 'Karisik tost',
                    image1: Image17,
                    text1: 'Kasarli tost',
                    image2: Image18,
                    text2: 'Sucuklu tost',
                    image3: Image19,
                    text3: 'Kavurma kasarli tost',

                };
            case 6:
                return {
                    image: Image20,
                    text: 'Cay',
                    image1: Image21,
                    text1: 'Turk kahvesi',
                    image2: Image22,
                    text2: 'Sicak cikolata',
                    image3: Image23,
                    text3: 'Salep',

                };
            default:
                return {
                    image: '',
                    text: '',
                    image1: '',
                    text1: '',
                    image2: '',
                    text2: '',
                    image3: '',
                    text3: '',
                }
        }
    };
    const { image, text, image1, text1, image2, text2, image3, text3 } = getButtonInfo(selectedButton);

    return (
        <Box sx={{ '& button': { m: 2 } }}>
            <div style={{
                backgroundColor: 'rgba(128,154,146)',
                gap: '15px',
                display: 'flex',
                overflow: 'auto',
            }}
            >
                {menus.map(menu => {
                    return (
                        <Button
                            style={{
                                fontFamily: 'initial',
                                color: '#fff',
                                fontSize: '1.1rem'
                            }}
                            variant="text"
                            size="medium"
                            onClick={() => nav(`/menu/${menu.id}`)}>
                            {menu.name}
                        </Button>
                    )
                })}
            </div>
            {showInfo && (
                <Grid container spacing={3}>
                    <Grid item xs={12}  >
                        <div style={{
                            display: 'flex',
                            width: '%100',
                            gap: '10px',
                            overflow: 'auto'
                        }}
                        >
                            <Card sx={{
                                borderRadius: '10px',
                                maxWidth: 545,
                                background: 'rgba(0,0,0,0.5)',
                                margin: '10px'
                            }}
                            >
                                <CardActionArea >
                                    <CardMedia sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                        component="img"
                                        height="440"
                                        image={image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h3" component="div">
                                            {text}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{
                                borderRadius: '10px',
                                maxWidth: 545,
                                background: 'rgba(0,0,0,0.5)',
                                margin: '10px'
                            }}
                            >
                                <CardActionArea >
                                    <CardMedia sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                        component="img"
                                        height="440"
                                        image={image1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h3" component="div">
                                            {text1}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{
                                borderRadius: '10px',
                                maxWidth: 545,
                                background: 'rgba(0,0,0,0.5)',
                                margin: '10px'
                            }}
                            >
                                <CardActionArea >
                                    <CardMedia sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                        component="img"
                                        height="440"
                                        image={image2}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h3" component="div">
                                            {text2}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{
                                borderRadius: '10px',
                                maxWidth: 545,
                                background: 'rgba(0,0,0,0.5)',
                                margin: '10px'
                            }}
                            >
                                <CardActionArea >
                                    <CardMedia sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                        component="img"
                                        height="440"
                                        image={image3}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h3" component="div">
                                            {text3}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
}
