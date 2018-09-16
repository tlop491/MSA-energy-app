// import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

class RTData extends React.Component<any, any> {
    public render() {
        return (
            
            <div>

                <Table >
                    <TableHead>
                        <TableRow >
                            <TableCell style={{fontSize: '20px'}}>Generation</TableCell>
                            <TableCell style={{fontSize: '20px'}}> Interval</TableCell>
                            <TableCell style={{fontSize: '20px'}}>Price</TableCell>
                            <TableCell style={{fontSize: '20px'}}>Load</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{fontSize: '15px'}}>{this.props.generation}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.interval}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.price}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.load}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{fontSize: '15px'}}>{this.props.generation1}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.interval1}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.price1}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.load1}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{fontSize: '15px'}}>{this.props.generation2}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.interval2}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.price2}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.load2}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{fontSize: '15px'}}>{this.props.generation3}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.interval3}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.price3}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.load3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{fontSize: '15px'}}>{this.props.generation4}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.interval4}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.price4}</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{this.props.load4}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


            
            </div>
        );
    }
};

export default RTData; 



