import { LocationOn, NotListedLocation } from '@mui/icons-material/';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    ClickAwayListener,
    Tooltip,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';

export default function Marker({ x, y, title, cardTitle, description, image }) {
    const [discovered, setDiscovered] = useState(false);
    const [open, setOpen] = React.useState(false);

    let tooltipContent = (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
                style={{
                    backgroundColor: 'theme.palette.background.default',
                }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );

    return (
        <div className="map-marker" style={{ top: y - 22, left: x - 12 }}>
            <Typography
                sx={[
                    {
                        display: 'block',
                        position: 'absolute',
                        width: 'max-content',
                        bottom: '20px',
                        fontFamily: 'Merriweather',
                        color: 'black',
                    },
                    !discovered && {
                        display: 'none',
                    },
                ]}
            >
                {title}
            </Typography>
            <ClickAwayListener onClickAway={() => setOpen(false)}>
                <Tooltip
                    title={tooltipContent}
                    onClose={() => setOpen(false)}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                >
                    {discovered ? (
                        <LocationOn
                            color="primary"
                            sx={{
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={() => setOpen(true)}
                        />
                    ) : (
                        <NotListedLocation
                            color="secondary"
                            sx={{
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={() => {
                                setOpen(true);
                                setDiscovered(true);
                            }}
                        />
                    )}
                </Tooltip>
            </ClickAwayListener>
        </div>
    );
}
