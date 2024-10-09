import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import phonetopImg from '../images/phonetopImg.png';
import EmailTopImg from '../images/EmailTopImg.png';
import { Drawer as MUIDrawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Drawer: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>

                   <IconButton
                               id="basic-button"
                               aria-controls={open ? 'basic-menu' : undefined}
                               aria-haspopup="true"
                               aria-expanded={open ? 'true' : undefined}
                               onClick={handleClick}>
            <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
   
            >
                {/* Menu Items with Links */}
                <MenuItem onClick={handleClose} component={Link} to="/">
                    Home
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/pharmacies">
                    Pharmacies
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/medical-tourism">
                    Medical Tourism
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/aboutus">
                    About Us
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/contact">
                    Contact
                </MenuItem>
            </Menu>
        </div>
    );
};

export default Drawer;
