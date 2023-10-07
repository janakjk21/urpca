import React, { useEffect, useState } from 'react';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import NavSidebar from './NavSidebar';
import { fetchUserFormData, updateUser, deleteUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserTable = (userdata) => {
	console.log(userdata.users, 'this is user table');
	const users = userdata.users;
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
					{users && users.length > 0 ? (
						users.map((user) => <UserRow key={user._id} user={user} />)
					) : (
						<tr>
							<td colSpan='5' className='text-center'>
								No users found.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

const UserRow = ({ user }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [editMode, setEditMode] = useState(false);
	const [formData, setFormData] = useState({
		name: user.name,
		email: user.email,
		role: user.role,
		subscriptiontype: user.subscriptiontype,
		Issubscribed: user.Issubscribed,
	});

	const handleEditClick = (e, userId) => {
		setEditMode(true);
	};

	const handleCancelClick = () => {
		setEditMode(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData, 'this is form data');
		// TODO: Submit form data
		dispatch(updateUser({ id: user._id, data: formData }));
		setEditMode(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteUser(user._id));
	};

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
			{editMode ? (
				<>
					<td>
						<input
							type='text'
							className='form-control'
							name='name'
							value={formData.name}
							onChange={handleChange}
						/>
					</td>
					<td>
						<input
							type='email'
							className='form-control'
							name='email'
							value={formData.email}
							onChange={handleChange}
						/>
					</td>
					<td>
						<input
							type='text'
							className='form-control'
							name='role'
							value={formData.role}
							onChange={handleChange}
						/>
					</td>
					<td>{user.datejoined}</td>
					<td>
						<input
							type='text'
							className='form-control'
							name='subscriptiontype'
							value={formData.subscriptiontype}
							onChange={handleChange}
						/>
					</td>
					<td>
						<div className='form-check'>
							<input
								type='checkbox'
								className='form-check-input'
								name='Issubscribed'
								checked={formData.Issubscribed}
								onChange={handleChange}
							/>
						</div>
					</td>
					<td>
						<button
							type='submit'
							className='btn btn-primary'
							onClick={handleSubmit}>
							Save
						</button>{' '}
						<button
							type='button'
							className='btn btn-secondary'
							onClick={handleCancelClick}>
							Cancel
						</button>
					</td>
				</>
			) : (
				<>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.role}</td>
					<td>{user.datejoined}</td>
					<td>{user.subscriptiontype}</td>
					<td>{user.Issubscribed ? 'Yes' : 'No'}</td>
					<td>
						<FaEdit
							size={20}
							onClick={(e) => {
								handleEditClick(e, user._id);
							}}
						/>{' '}
						<FaTrash
							size={20}
							color='red'
							onClick={(e) => {
								handleDelete(e, user._id);
							}}
						/>
						<FaCheck />
					</td>
				</>
			)}
		</tr>
	);
};

export function Usertable() {
	const dispatch = useDispatch();
	const userdata = useSelector((state) => state.user.data);

	const status = useSelector((state) => state.user.status);
	const tracker = useSelector((state) => state.user.tracker);

	useEffect(() => {
		dispatch(fetchUserFormData());
	}, [tracker]);
	console.log(userdata, 'this is user table');
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
										<UserTable users={userdata} />
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
