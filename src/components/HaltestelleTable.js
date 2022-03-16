import React, { Component } from 'react'
import { Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import EditHaltestelle from './EditHaltestelle';
import CreateHaltestelle from './CreateHaltestelle';


class HaltestelleTable extends Component {

    state = {
        page: 0,
        rowsPerPage: 10,
        originalRows: [
            this.createData('India', 'IN', 1324171354, 3287263),
            this.createData('China', 'CN', 1403500365, 9596961),
            this.createData('Italy', 'IT', 60483973, 301340),
            this.createData('United States', 'US', 327167434, 9833520),
            this.createData('Canada', 'CA', 37602103, 9984670),
            this.createData('Australia', 'AU', 25475400, 7692024),
            this.createData('Germany', 'DE', 83019200, 357578),
            this.createData('Ireland', 'IE', 4857000, 70273),
            this.createData('Mexico', 'MX', 126577691, 1972550),
            this.createData('Japan', 'JP', 126317000, 377973),
            this.createData('France', 'FR', 67022000, 640679),
            this.createData('United Kingdom', 'GB', 67545757, 242495),
            this.createData('Russia', 'RU', 146793744, 17098246),
            this.createData('Nigeria', 'NG', 200962417, 923768),
            this.createData('Brazil', 'BR', 210147125, 8515767)],
        rows: [
            this.createData('India', 'IN', 1324171354, 3287263),
            this.createData('China', 'CN', 1403500365, 9596961),
            this.createData('Italy', 'IT', 60483973, 301340),
            this.createData('United States', 'US', 327167434, 9833520),
            this.createData('Canada', 'CA', 37602103, 9984670),
            this.createData('Australia', 'AU', 25475400, 7692024),
            this.createData('Germany', 'DE', 83019200, 357578),
            this.createData('Ireland', 'IE', 4857000, 70273),
            this.createData('Mexico', 'MX', 126577691, 1972550),
            this.createData('Japan', 'JP', 126317000, 377973),
            this.createData('France', 'FR', 67022000, 640679),
            this.createData('United Kingdom', 'GB', 67545757, 242495),
            this.createData('Russia', 'RU', 146793744, 17098246),
            this.createData('Nigeria', 'NG', 200962417, 923768),
            this.createData('Brazil', 'BR', 210147125, 8515767),],
        selectedRow: null,
        searched: "",
    };

    constructor(props) {
        super(props);
        this.createData = this.createData.bind(this);
        this.setPage = this.setPage.bind(this);
        this.setRows = this.setRows.bind(this);
        this.setRowsPerPage = this.setRowsPerPage.bind(this);
        this.setSelectedRow = this.setSelectedRow.bind(this);
        this.handleChangeSearched = this.handleChangeSearched.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handleChoosenRow = this.handleChoosenRow.bind(this);
        this.handleChangeOpenCreateHaltestelle = this.handleChangeOpenCreateHaltestelle.bind(this);
        this.handleChangeOpenEditHaltestelle = this.handleChangeOpenEditHaltestelle.bind(this);
    };

    setPage = (page) => {
        this.setState({ page: page });
    };

    setRowsPerPage = (rowsPerPage) => {
        this.setState({ rowsPerPage: rowsPerPage });
    };

    setRows = (rows) => {
        this.setState({ rows: rows })
    }

    setSelectedRow = (choosenrow) => {
        const selectedRow = choosenrow.code.toString();
        this.setState({ selectedRow: selectedRow });
        this.setState({ selectedWholeRow: choosenrow})
    }

    handleChangeSearched = (event) => {
        this.setState({ searched: event.target.value });
    }

    handleUser = (event) => {
        this.props.customer(event.target.checked);
    }

    handleChangePage = (event, newPage) => {
        this.setPage(newPage);
    };

    handleChangeRowsPerPage = (event) => {
        this.setRowsPerPage(event.target.value);
        this.setPage(0);
    };

    handleChoosenRow = (event) => {
        this.setState({ choosenRow: event.target.value })
    };  
    
    handleChangeOpenEditHaltestelle = () => {
        if (this.state.selectedRow != null) {
            const open = true;
            const close = false;
            this.setState({ openEditHaltestelle: open });
            this.setState({ openCreateHaltestelle: close });
        }
    }

    handleChangeOpenCreateHaltestelle = () => {
            const open = true;
            const close = false;
            this.setState({ openCreateHaltestelle: open });
            this.setState({ openEditHaltestelle: close });
    }

    deleteRow = () => {

    }

    createData(name, code, population, size) {
        const density = population / size;
        return { name, code, population, size, density };
    };

    requestSearch = () => {
        const searchValue = this.state.searched;
        const tempRows = this.state.originalRows;
        const close = false;
        const filteredRows = tempRows.filter(tempRows => tempRows.name.toLowerCase().includes(searchValue.toLowerCase()));
        this.setRows(filteredRows);
        console.log(searchValue);
        this.setState({ openCreateHaltestelle: close });
        this.setState({ openEditHaltestelle: close });
    };

    render() {
        const columns = [
            { id: 'name', label: 'Name', minWidth: 170 },
            { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
            {
                id: 'population',
                label: 'Population',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toLocaleString('en-US'),
            },
            {
                id: 'size',
                label: 'Size\u00a0(km\u00b2)',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toLocaleString('en-US'),
            },
            {
                id: 'density',
                label: 'Density',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toFixed(2),
            },
        ];
        const Search = styled('div')(({ theme }) => ({
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        }));

        const SearchIconWrapper = styled('div')(({ theme }) => ({
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }));

        const StyledInputBase = styled(InputBase)(({ theme }) => ({
            color: 'inherit',
            '& .MuiInputBase-input': {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    width: '12ch',
                    '&:focus': {
                        width: '20ch',
                    },
                },
            },
        }));

        const customer = this.props.customer;
        const EditSelectedRow = this.state.selectedWholeRow;
        
        return (
            <Box>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Toolbar sx={{ bgcolor: 'warning.light' }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Haltestellen
                            </Typography>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    onChange={(e) => this.handleChangeSearched(e)}
                                    type={String}
                                    value={this.state.searched}
                                />
                            </Search>
                            <Button color="primary" className="App-ISBN-Input-Button" onClick={this.requestSearch}>
                                Abfragen
                            </Button>
                            {customer
                                ? <div></div>
                                : <Button onClick={this.handleChangeOpenEditHaltestelle}>
                                    Bearbeiten</Button>
                            }
                            {customer
                                ? <div></div>
                                : <Button onClick={this.handleChangeOpenCreateHaltestelle}>
                                    Anlegen</Button>
                            }
                            {customer
                                ? <div></div>
                                : <Button onClick={this.deleteRow}>
                                    Löschen</Button>
                            }
                        </Toolbar>
                    </Box>
                    {(!this.state.openCreateHaltestelle && !this.state.openEditHaltestelle)|customer?
                        <Box>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow >
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.rows
                                            .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} selected={row.code === this.state.selectedRow} onClick={() => this.setSelectedRow(row)} >
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={this.state.rows.length}
                                rowsPerPage={this.state.rowsPerPage}
                                page={this.state.page}
                                onPageChange={this.handleChangePage}
                                onRowsPerPageChange={this.handleChangeRowsPerPage}
                            /></Box>
                        : <div></div>}
                    {this.state.openEditHaltestelle && !customer?
                        <EditHaltestelle EditSelectedRow={EditSelectedRow}/>
                        : <div></div>}
                    {this.state.openCreateHaltestelle && !customer?
                        <CreateHaltestelle/>
                        : <div></div>}
                </Paper>
            </Box>
        );
    }
}
export default HaltestelleTable;