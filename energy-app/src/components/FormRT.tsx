import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

// import InputLabel from '@material-ui/core/InputLabel';


import * as React from 'react';


class Form extends React.Component<any,any> {
    public render() {
        
        return (
            <FormControl fullWidth={true} >
            <form onSubmit={this.props.getRT} >
                {/* <InputLabel  htmlFor="addressUnit">Customer Address</InputLabel><br /> */}
                <Button variant="contained" color="primary" type="submit" fullWidth={true}>Get ICP Data</Button>
            </form>
            </FormControl>
        );
    }
};

export default Form; 