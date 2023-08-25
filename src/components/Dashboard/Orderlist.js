import React, { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { DeleteIcon } from '@chakra-ui/icons';
import NavSidebar from './NavSidebar';
export default function Orderlist() {
	const orders = [
		{
			id: 1,
			orderId: '#CM9708',
			customerAvatar: 'assets/images/users/avatar-1.jpg',
			customerName: 'Jerry Geiger',
			project: 'Landing Page',
			address: 'New York',
			addressDetails: 'Meadow Lane Oakland',
			dateOrder: '01 January 2022',
			orderStatus: 'In Progress',
			statusColor: 'info-lighten',
			detailsLink: 'apps-ecommerce-orders-details.html',
		},
		// Add more orders here...
	];
	return (
		<div className='wrapper'>
			<NavSidebar></NavSidebar>
			<div className='content-page'>
				<div className='content'>
					<div className='container-fluid'>
						<Header></Header>
						<div className='row'>
							<div className='col-12'>
								<div className='card'>
									<div className='card-body'>
										<OrderSearchForm></OrderSearchForm>
										<OrderTable orders={orders} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const Header = () => {
	return (
		<>
			<div className='row'>
				<div className='col-12'>
					<div className='page-title-box'>
						<div className='page-title-right'>
							<ol className='breadcrumb m-0'>
								<li className='breadcrumb-item active'>Book Order</li>
							</ol>
						</div>
						<h4 className='page-title'>Orders List</h4>
					</div>
				</div>
			</div>
		</>
	);
};

const OrderSearchForm = () => {
	const [searchInput, setSearchInput] = useState('');
	const [selectedStatus, setSelectedStatus] = useState('Choose...');

	const handleSearchInputChange = (event) => {
		setSearchInput(event.target.value);
	};

	const handleStatusChange = (event) => {
		setSelectedStatus(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// You can perform any action with the form data here, like making an API request
		console.log('Search Input:', searchInput);
		console.log('Selected Status:', selectedStatus);
	};

	return (
		<div className='row mb-2'>
			<div className='col-xl-8'>
				<form
					className='row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between'
					onSubmit={handleSubmit}>
					<div className='col-auto'>
						<label htmlFor='inputPassword2' className='visually-hidden'>
							Search
						</label>
						<input
							type='search'
							className='form-control'
							id='inputPassword2'
							placeholder='Search...'
							value={searchInput}
							onChange={handleSearchInputChange}
						/>
					</div>
					<div className='col-auto'>
						<div className='d-flex align-items-center'>
							<label htmlFor='status-select' className='me-2'>
								Status
							</label>
							<select
								className='form-select'
								id='status-select'
								value={selectedStatus}
								onChange={handleStatusChange}>
								<option>Choose...</option>
								<option value='1'>Paid</option>
								<option value='2'>Awaiting Authorization</option>
								<option value='3'>Payment Failed</option>
								<option value='4'>Cash On Delivery</option>
								<option value='5'>Fulfilled</option>
								<option value='6'>Unfulfilled</option>
							</select>
						</div>
					</div>
					<div className='col-auto'>
						<button type='submit' className='btn btn-primary'>
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const OrderTable = ({ orders }) => {
	return (
		<div className='table-responsive'>
			<table className='table table-centered table-nowrap mb-0'>
				<thead className='table-light'>
					<tr>
						<th style={{ width: '20px' }}>
							<div className='form-check'>
								<input
									type='checkbox'
									className='form-check-input'
									id='customCheck1'
								/>
								<label className='form-check-label' htmlFor='customCheck1'>
									&nbsp;
								</label>
							</div>
						</th>
						<th>Order ID</th>
						<th>Customers</th>
						<th>Project</th>
						<th>Address</th>
						<th>Date Order</th>
						<th>Order Status</th>
						<th style={{ width: '125px' }}>Action</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order, index) => (
						<TableRow key={index} order={order} />
					))}
				</tbody>
			</table>
		</div>
	);
};

const TableRow = ({ order }) => {
	return (
		<tr>
			<td>
				<div className='form-check'>
					<input
						type='checkbox'
						className='form-check-input'
						id={`customCheck${order.id}`}
					/>
					<label
						className='form-check-label'
						htmlFor={`customCheck${order.id}`}>
						&nbsp;
					</label>
				</div>
			</td>
			<td>
				<a href={order.detailsLink} className='text-body fw-bold'>
					{order.orderId}
				</a>
			</td>
			<td>
				<div className='d-flex'>
					<div className='d-flex align-items-center'>
						<div className='flex-shrink-0'>
							<img
								src={order.customerAvatar}
								className='rounded-circle avatar-xs'
								alt='friend'
							/>
						</div>
						<div className='flex-grow-1 ms-2'>
							<h5 className='my-0'>{order.customerName}</h5>
						</div>
					</div>
				</div>
			</td>
			<td>{order.project}</td>
			<td>
				<h5 className='my-0'>{order.address}</h5>
				<p className='mb-0 txt-muted'>{order.addressDetails}</p>
			</td>
			<td>{order.dateOrder}</td>
			<td>
				<h5 className='my-0'>
					<span className={`badge badge-${order.statusColor}`}>
						{order.orderStatus}
					</span>
				</h5>
			</td>
			<td>
				<FaEdit size={20}></FaEdit> <FaTrash size={20} color='red'></FaTrash>
			</td>
		</tr>
	);
};
