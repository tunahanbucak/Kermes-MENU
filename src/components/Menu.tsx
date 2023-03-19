import { Grid,Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import MENU1 from './assets/menu_resim.jpg';
import MENU2 from './assets/menu_resim1.jpg';
import MENU3 from './assets/menu_resim2.jpg';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 445,
  margin: '20px',
  background: 'rgba(0,0,0,0.5)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '120px',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontFamily: 'serif',
  fontWeight: 'bold',
  fontSize: '2rem',
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontFamily: 'serif',

  fontWeight: 'bold',
  fontSize: '4rem',
  marginBottom: '24px',
  textAlign: 'center',
  marginTop: '300px'
}));

const Menu = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
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
            <CardMedia sx={{ height: 440 }} component="img" height="140" image={MENU2} alt="Image" />
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
            <CardMedia sx={{ height: 440 }} component="img" height="140" image={MENU3} alt="Image" />
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

  );
};

export default Menu;
