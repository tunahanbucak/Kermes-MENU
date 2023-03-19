import { Box, styled, } from '@mui/material';
import React, { useState } from 'react';
import IMG from './assets/srntp.jpg';
import IMG1 from './assets/serntp.jpg';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@mui/material/styles';

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

function Animation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useTheme();

    return (
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
    );
}
export default Animation;

