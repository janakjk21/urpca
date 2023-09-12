import React from 'react';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import NavSidebar from './NavSidebar';

const UserTable = ({ users }) => {
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
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Date Joined</th>
						<th>Subscription Type</th>
						<th>Is Subscribed</th>
						<th style={{ width: '125px' }}>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<UserRow key={user._id} user={user} />
					))}
				</tbody>
			</table>
		</div>
	);
};

const UserRow = ({ user }) => {
	return (
		<tr>
			<td>
				<div className='form-check'>
					<input
						type='checkbox'
						className='form-check-input'
						id={`customCheck${user._id}`}
					/>
					<label
						className='form-check-label'
						htmlFor={`customCheck${user._id}`}>
						&nbsp;
					</label>
				</div>
			</td>
			<td>{user.name}</td>
			<td>{user.email}</td>
			<td>{user.role}</td>
			<td>{user.datejoined}</td>
			<td>{user.subscriptiontype}</td>
			<td>{user.Issubscribed ? 'Yes' : 'No'}</td>
			<td>
				<FaEdit size={20}></FaEdit> <FaTrash size={20} color='red'></FaTrash>
				<FaCheck></FaCheck>
			</td>
		</tr>
	);
};

export function Usertable() {
	const users = [
		{
			Issubscribed: false,
			subscriptiontype: 'free',
			_id: '64dc5e2eba0f14686c51f590',
			role: 'user',
			date: '2023-08-16T05:27:10.138Z',
			name: 'Sanjog',
			email: 'sanjog@gmail.com',
			password: '$2a$10$UwJI1rcTh/HUhw.jLfVgT..NZXnVgGjV5xlSu2rKoo54s1KJeXoD2',
			__v: 0,
			datejoined: '2023-09-12T15:54:45.296Z',
			subscriptiondate: '2023-09-12T15:54:45.296Z',
		},
		// Add more user data here...
	];

	return (
		<div className='wrapper'>
			<NavSidebar></NavSidebar>
			<div className='content-page'>
				<div className='content'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-12'>
								<div className='card'>
									<div className='card-body'>
										<UserTable users={users} />
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
