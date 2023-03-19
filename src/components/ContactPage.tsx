import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const styles = {
  container: {
     
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  card: {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: 'gray',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  icon: {
    marginRight: '16px',
    color: '#3f51b5',
  },
};

const ContactPage = () => {
  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="h4" sx={styles.title}>
            Adres ve İletişim Bilgileri
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={styles.icon} fontSize="large" />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Adres
                </Typography>
              </Box>
              <Box sx={{ pl: 8 }}>
                <Typography variant="body1">
                  Mevlana Mahallesi, 47029. Sk. No:1 Kahramanmaraş Merkez
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={styles.icon} fontSize="large" />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  E-posta
                </Typography>
              </Box>
              <Box sx={{ pl: 8 }}>
                <Typography variant="body1">
                  info@example.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={styles.icon} fontSize="large" />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Telefon (1)
                </Typography>
              </Box>
              <Box sx={{ pl: 8 }}>
                <Typography variant="body1">
                  555-555-5555
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={styles.icon} fontSize="large" />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Telefon (2)
                </Typography>
              </Box>
              <Box sx={{ pl: 8 }}>
                <Typography variant="body1">
                  555-555-5555
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </Box>
      );
};

      export default ContactPage;
