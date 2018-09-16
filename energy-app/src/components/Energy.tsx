// import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

class Energy extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{fontSize: '20px'}}>Address:</TableCell>


                            <TableCell  style={{fontSize: '20px'}}> ICP Number:</TableCell>

                            <TableCell style={{fontSize: '20px'}}>ICP Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {
                                this.props.addressNumber && this.props.addressStreet && this.props.addressSuburb &&
                                <TableCell style={{fontSize: '15px'}}>{this.props.addressNumber} {this.props.addressStreet}, {this.props.addressSuburb} </TableCell>
                            }
                            {
                                this.props.icpIdentifier &&
                                <TableCell style={{fontSize: '15px'}}>{this.props.icpIdentifier} </TableCell>
                            }
                            {
                                this.props.icpStatus &&
                                <TableCell style={{fontSize: '15px'}}>{this.props.icpStatus}</TableCell>
                            }
                        </TableRow>
                        <TableRow >
                            {
                                this.props.error &&
                                <TableCell style={{fontSize: '15px'}}>{this.props.error} </TableCell>
                            }
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        );
    }
};

export default Energy; 


