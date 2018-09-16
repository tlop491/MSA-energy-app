// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';


class DataTable extends React.Component<any,any> {
    public render() {
        
        return (
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>A</TableCell>
                <TableCell>B</TableCell>
                <TableCell>C</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>D </TableCell>
                <TableCell>E </TableCell>
                <TableCell>F</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        );
    }
};

export default DataTable; 