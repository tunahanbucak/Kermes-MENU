import { Box, CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { menus } from '../utils/data';

export default function Menu() {
    return (
        <div>
            <Box sx={{ overflow: 'auto' }}>
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
                >
                    {menus.map(menu => {
                        return (
                            <Card
                                component={Link}
                                to={`/menu/${menu.id}`}
                                sx={{
                                    borderRadius: '10px',
                                    padding: '10px',
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
                                        image={menu.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h3" component="div">
                                            {menu.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </div>
            </Box>
        </div>
    );
}

