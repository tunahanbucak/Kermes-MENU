import React, { useState } from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Tabs, Grid, Tab, AppBar, Typography, Toolbar, Box, } from '@mui/material';
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import Menu from './Menu';

export default function Header() {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{
      overflow: 'auto',
      background: 'gray'
    }}
    >
      <React.Fragment>
        <AppBar position="static" sx={{ background: "#063990" }}>
          <Toolbar>
            <LocalFloristIcon />
            <Typography> HARTLAP ERKEK OGRENCI YURDU KERMESI</Typography>
            <Typography></Typography>
            <Tabs
              sx={{ marginLeft: 'auto' }}
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
            >
              <Tab label="Ana Sayfa" />
              <Tab label="Kategoriler" />
              <Tab label="Adres ve Iletisim" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={12}>
            {value === 0 && <HomePage />}
            {value === 1 && <Menu />}
            {value === 2 && <ContactPage />}
          </Grid>
        </Grid>
      </React.Fragment >
    </Box>
  );
};


