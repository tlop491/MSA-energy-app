import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import * as React from 'react';


class Form extends React.Component<any,any> {
    public render() {
        
        return (
            <FormControl fullWidth={true} >
            <form onSubmit={this.props.getIcp} >
                {/* <InputLabel  htmlFor="addressUnit">Customer Address</InputLabel><br /> */}
                <Typography variant="display4" color="primary">Address </Typography>
                <Input type="text" id="addressUnit" name="addressUnit"  placeholder='Unit Number...'  fullWidth={true}/><br />
                <Input type="text" id="addressStreet" name="addressStreet" placeholder="Street..."  fullWidth={true}/><br />

                <Input type="text" id="addressSuburb" name="addressSuburb" placeholder="Suburb..."  fullWidth={true}/><br />

                <Input type="text" id="addressRegion" name="addressRegion" placeholder="Region..."  fullWidth={true}/><br />
                <Button variant="contained" color="primary" type="submit" fullWidth={true}>Get ICP Data</Button>
            </form>
            </FormControl>
        );
    }
};

export default Form; 