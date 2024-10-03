import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer as MUIDrawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { faHome, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import phonetopImg from '../images/phonetopImg.png';
import EmailTopImg from '../images/EmailTopImg.png';

const Drawer: React.FC = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    return (
        <div>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <MUIDrawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
            >
                <List>
                    <ListItem component={Link} to="/" onClick={toggleDrawer(false)}>
                        <FontAwesomeIcon icon={faHome} />
                        <ListItemText className="nav-link active" primary="Home" />
                    </ListItem>
                    <ListItem component={Link} to="/pharmacies" onClick={toggleDrawer(false)}>
                        <ListItemText className="nav-link" primary="Pharmacies" />
                    </ListItem>
                    <ListItem component={Link} to="/medical-tourism" onClick={toggleDrawer(false)}>
                        <ListItemText className="nav-link" primary="Medical Tourism" />
                    </ListItem>
                    <ListItem component={Link} to="/aboutus" onClick={toggleDrawer(false)}>
                        <ListItemText className="nav-link" primary="About Us" />
                    </ListItem>
                    <ListItem component={Link} to="/contact" onClick={toggleDrawer(false)}>
                        <ListItemText className="nav-link" primary="Contact" />
                    </ListItem>
                    <ListItem component={Link} to="/contact" className="partner-link" onClick={toggleDrawer(false)}>
                        <FontAwesomeIcon icon={faBusinessTime} />
                        <ListItemText className="nav-link" primary="Become our business partner" />
                    </ListItem>
                    <ListItem component={Link} to="/contact"  onClick={toggleDrawer(false)}>
                    <Link to="/" className="nav-link-top">
                            <span className="icon-background">
                                <img src={phonetopImg} alt="phonetopImg" />
                            </span>
                            Call Us: <b>1300 950073</b>
                        </Link>
                    </ListItem>
                    <ListItem component={Link} to="/contact"  onClick={toggleDrawer(false)}>
                    <Link to="/" className="nav-link-top">
                            <span className="icon-background">
                                <img src={EmailTopImg} alt="EmailTopImg" />
                            </span>
                            <a className='outlinenone' href="mailto:info@medask.com.pk" style={{ color: '170C40', textDecoration: 'none' }}>info@medask.com.pk</a>
                        </Link>
                    </ListItem>
                    <ListItem component={Link} to="/contact"  onClick={toggleDrawer(false)}>
                    <Link to="/" className="nav-link available-info" id='available-info'>
                            We’re Available: Monday - Sunday (24/7)
                        </Link>
                    </ListItem>
                    
                </List>
            </MUIDrawer>
        </div>
    );
};

export default Drawer;