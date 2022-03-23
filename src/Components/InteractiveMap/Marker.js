import { LocationOn, NotListedLocation } from '@mui/icons-material/';
import { ClickAwayListener, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function Marker({ x, y, title, description, image }) {
    const [discovered, setDiscovered] = useState(false);
    const [open, setOpen] = React.useState(false);

    let tooltipContent = (
        <>
            <div></div>
        </>
    );

    return (
        <div className="map-marker" style={{ top: y, left: x }}>
            <Typography
                sx={[
                    {
                        display: 'block',
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
                            onClick={() => setOpen(true)}
                        />
                    ) : (
                        <NotListedLocation
                            color="secondary"
                            onClick={() => {
                                setOpen(true);
                                setDiscovered(true);
                            }}
                            sx={{}}
                        />
                    )}
                </Tooltip>
            </ClickAwayListener>
        </div>
    );
}
