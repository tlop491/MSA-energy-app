import {AppBar, Toolbar, Typography} from '@material-ui/core/';
import * as React from 'react';

// import { Nav,  NavItem } from 'react-bootstrap';
// import { IndexLinkContainer } from "react-router-bootstrap";




export const Header: React.StatelessComponent<{}> = () => {

    return (
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="display2" color="secondary">
                    Energy Network Mangement
                    </Typography>
                </Toolbar>

            </AppBar>
    );
}