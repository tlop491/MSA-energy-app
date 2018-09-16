import { Grid } from '@material-ui/core/';
import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'
// import Energy from './components/Energy';
// import { Footer } from './components/Footer';
// import Form from './components/Form';
import { Header } from './components/Header';
// import RTData from './components/RTData'

// import './css/styles.css';



export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    {/* <Grid container={true}> */}
                        {/* <Grid item={true} sm={true}> */}
                            {/* <Paper> */}
                                <Route exact={true} path="/" component={App} />
                                {/* <Route path="/Form" component={Form} /> */}
                            {/* </Paper> */}
                        {/* </Grid> */}
                        <Grid item={true} >
                        {/* <Route exact={true} path="/" component={RTData} /> */}
                        </Grid>
                        
                        <Redirect from='*' to='/' />
                    {/* </Grid> */}
                </main>
                {/* <Footer /> */}
            </div>
        </BrowserRouter>

    );
}