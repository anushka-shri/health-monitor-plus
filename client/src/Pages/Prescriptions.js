// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './pagesCSS/Prescription.css';
// import * as BiIcons from 'react-icons/bi';
// import * as MdIcons from 'react-icons/md';
// import { Image, List } from 'semantic-ui-react'

// const Prescriptions = () => {
// 	const [prescriptions, setPrescription] = useState([]);

// 	const getPrescription = async () => {
// 		try {
// 			const res = await axios.get(
// 				'http://localhost:3005/api/v1/prescription/getUserPrescription',
// 			);
// 			console.log(res.data.data);
// 			setPrescription(res.data.data);
// 			console.log(prescriptions);
// 		} catch {}
// 	};

// 	useEffect(() => {
// 		getPrescription();
// 	}, []);

// 	const renderImages = (p) => {
// 		return p.map((item) => (
// 			<img
// 				src={`http://localhost:3005/${item}`}
// 				alt='Girl in a jacket'
// 				width='200px'
// 				height='150px'
// 			/>
// 		));
// 	};
// 	const handleDownloadClick = (event, p) => {
// 		p.map((item) => {
// 			var URL = `http://localhost:3005/${item}`;

// 			axios({
// 				url: URL,
// 				method: 'GET',
// 				responseType: 'blob',
// 			}).then((response) => {
// 				const downloadUrl = window.URL.createObjectURL(
// 					new Blob([response.data]),
// 				);
// 				const link = document.createElement('a');
// 				link.href = downloadUrl;
// 				link.setAttribute('download', 'prescription.png'); //any other extension
// 				document.body.appendChild(link);
// 				link.click();
// 			});
// 		});
// 	};

// 	return (
// 		<>
// 			<div className='pres_cards_cont'>
// 				<h1 className='prescription_added_heading'>Prescriptions Added</h1>
// 				{prescriptions.map((prescription, i) => (
// 					<div class='added_p_card' key={i}>
// 						<header class='card-header'>
// 							<p class='card-header-title'>Title: {prescription.Title}</p>
// 						</header>
// 						<div class='card-content'>
// 							<div class='content-flex'>
// 								{/* <div>
// 									<span className='card_notes_datesh'>
// 										Notes:{prescription.Notes}
// 									</span>

// 									<br />
// 									<span className='card_notes_datesh'>
// 										Date:
// 									</span>
// 									{prescription.DateOfRec.split('T')[0]}
// 									<br />
// 									<span className='card_notes_datesh'>
// 										Doctor:{prescription.Doctor.Name}
// 									</span>
// 									<br />
// 									<span className='card_notes_datesh'>
// 										Hospital:{prescription.Doctor.Hospital}
// 									</span>
// 								</div> */}

// 								<List divided verticalAlign='middle'>
//     <List.Item>
//       <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
//       <List.Content>
//         <List.Header as='a'>Daniel Louise</List.Header>
//       </List.Content>
//     </List.Item>
//     <List.Item>
//       <Image avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
//       <List.Content>
//         <List.Header as='a'>Stevie Feliciano</List.Header>
//       </List.Content>
//     </List.Item>
//     <List.Item>
//       <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
//       <List.Content>
//         <List.Header as='a'>Elliot Fu</List.Header>
//       </List.Content>
//     </List.Item>
//   </List>

// 								<div className='render_pres_card '>
// 									{renderImages(prescription.Prescription)}
// 								</div>
// 							</div>
// 						</div>
// 						<footer class='card-footer'>
// 							<a
// 								onClick={(event) =>
// 									handleDownloadClick(event, prescription.Prescription)
// 								}
// 								href='#'
// 								class='card-footer-item'>
// 								Prescription
// 								<BiIcons.BiDownload className='download_icon_card' />
// 							</a>
// 							<a href='#' class='card-footer-item'>
// 								Edit
// 								<BiIcons.BiEdit className='download_icon_card' />
// 							</a>
// 							<a href='#' class='card-footer-item'>
// 								Delete
// 								<MdIcons.MdDeleteSweep className='download_icon_card' />
// 							</a>
// 						</footer>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);
// };

// export default Prescriptions;




import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import axios from 'axios';
import './pagesCSS/Prescription2.css';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import { Button,Form } from 'semantic-ui-react'


function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{
		id: 'Select All',
		numeric: false,
		disablePadding: true,
		label: 'Select All',
	},
	{
		id: 'DoctorName',
		numeric: true,
		disablePadding: false,
		label: 'Title',
	},
	{ id: 'Hospital', numeric: true, disablePadding: false, label: 'Doctor' },
	{
		id: 'Specialization',
		numeric: true,
		disablePadding: false,
		label: 'Date',
	},
	{ id: 'Notes', numeric: true, disablePadding: false, label: 'Notes' },
	{ id: 'Prescriptions', numeric: true, disablePadding: false, label: 'Precriptions' },
	{ id: 'Actions', numeric: true, disablePadding: false, label: 'Actions' },
];

function EnhancedTableHead(props) {
	const {
		classes,
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
	} = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ 'aria-label': 'select all desserts' }}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === headCell.id ? order : false}>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}>
							{headCell.label}
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</span>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	highlight:
		theme.palette.type === 'light'
			? {
					color: theme.palette.secondary.main,
					backgroundColor: lighten(theme.palette.secondary.light, 0.85),
			  }
			: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark,
			  },
	title: {
		flex: '1 1 100%',
	},
}));

const EnhancedTableToolbar = (props) => {
   
	
	const deletePres = async (deletePres) => {
		

		try {
			const res = await axios.post(
				'http://localhost:3005/api/v1/prescription/deletePres',
				{
					deletePres
				},
			);

			if (res.data.status === 'success') {
				window.alert('Prescription deleted!');
				window.location.reload();
			} else if (res.data.status === 'failed') {
				console.log('error');
			}
		} catch {}
	};


	const handleDeleteClick = (event, selected) => {
		
		deletePres(selected);
	};
   const handleFilter = (event) => {
	return <div>
	<Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </div>
   }


	const classes = useToolbarStyles();
	const { numSelected , selected} = props;

	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}>
			{numSelected > 0 ? (
				<Typography
					className={classes.title}
					color='inherit'
					variant='subtitle1'
					component='div'>
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					className={classes.title}
					variant='h6'
					id='tableTitle'
					component='div'>
					
				</Typography>
			)}

			{numSelected > 0 ? (
				<Tooltip title='Delete'>
					<IconButton aria-label='delete' onClick={(event) => handleDeleteClick(event,selected)}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title='Filter list'>
				    
					<IconButton aria-label='filter list' onClick={(event) => handleFilter(event)} >
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
};

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(1),
	},
	table: {
		minWidth: 850,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

export default function EnhancedTable() {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [doctors, setDoctor] = useState([]);

	const [prescriptions, setPrescription] = useState([]);

	const getPrescription = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/prescription/getUserPrescription',
			);
			console.log(res.data.data);
			setPrescription(res.data.data);
			console.log(prescriptions);
		} catch {}
	};

	useEffect(() => {
		getPrescription();
	}, []);
	

	var rows = prescriptions.map((element) => ({
		Title: element.Title,
		Date: element.DateOfRec.split('T')[0],
		DoctorName: element.Doctor.Name,
		Notes: element.Notes,
		prescriptions:element.Prescription
	}));
	console.log(rows);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.Title);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		
		const selectedIndex = selected.indexOf(name);
		
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}
        
		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangeDense = (event) => {
		setDense(event.target.checked);
	};
    
	const handleDownloadClick = (event, p) => {
				p.map((item) => {
					var URL = `http://localhost:3005/${item}`;
		
					axios({
						url: URL,
						method: 'GET',
						responseType: 'blob',
					}).then((response) => {
						const downloadUrl = window.URL.createObjectURL(
							new Blob([response.data]),
						);
						const link = document.createElement('a');
						link.href = downloadUrl;
						link.setAttribute('download', 'prescription.png'); //any other extension
						document.body.appendChild(link);
						link.click();
					});
				});
			};
	const renderImages = (p) => {
				return p.map((item) => (
					<img
						src={`http://localhost:3005/${item}`}
						alt='Girl in a jacket'
						width='100px'
						height='100px'
					/>
				));
			};
	const isSelected = (name) => selected.indexOf(name) !== -1;

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	return (
		<div>
			<h1 className='prescription_added_heading'>Prescriptions Added</h1>
		
		<div className='Prescription2_container'>
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<EnhancedTableToolbar numSelected={selected.length} selected={selected} />
					<TableContainer>
						<Table
							className={classes.table}
							aria-labelledby='tableTitle'
							size={dense ? 'small' : 'medium'}
							aria-label='enhanced table'>
							<EnhancedTableHead
								classes={classes}
								numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={rows.length}
							/>
							<TableBody>
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										
										const isItemSelected = isSelected(row.Title);
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow
												hover
												onClick={(event) => handleClick(event, row.Title)}
												role='checkbox'
												aria-checked={isItemSelected}
												tabIndex={-1}
												key={row.Title}
												selected={isItemSelected}>
												<TableCell padding='checkbox'>
													<Checkbox
														checked={isItemSelected}
														inputProps={{ 'aria-labelledby': labelId }}
													/>
												</TableCell>
												<TableCell
													component='th'
													id={labelId}
													scope='row'
													padding='none'>
													{}
												</TableCell>
												<TableCell align='right'>{row.Title}</TableCell>
												<TableCell align='right'>{row.DoctorName}</TableCell>
												<TableCell align='right'>
													{row.Date}
												</TableCell>
												<TableCell align='right'>{row.Notes}</TableCell>
												<TableCell align='right'>
												{renderImages(row.prescriptions)}
												</TableCell>
												<TableCell align='right'>
												<a
								onClick={(event) =>
									handleDownloadClick(event, row.prescriptions)
								}
								href='#'
								class='card-footer-item'>
								<b>Download</b>
								<div>
								
								<BiIcons.BiDownload className='download_icon_card' />
								</div>
								
							</a>
							
							
							
												</TableCell>
											</TableRow>
										);
									})}
								{emptyRows > 0 && (
									<TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component='div'
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
					/>
				</Paper>
				<FormControlLabel
					control={<Switch checked={dense} onChange={handleChangeDense} />}
					label='Dense padding'
				/>
			</div>
		</div>
		</div>
	);
}
