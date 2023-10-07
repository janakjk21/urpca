import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	fetchEmployeeFormData,
	updateEmployee,
	deleteEmployee,
	submitEmployeeForm,
} from '../redux/dashboardslicers/employeeSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NavSidebar from './NavSidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';

const initialState = {
	name: '',
	designation: '',
	image: null,
};

export default function EmployeeForm() {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.employee.status);
	const employeeFormData = useSelector((state) => state.employee.data);
	const trackerStatus = useSelector((state) => state.employee.tracker);

	const [employeeId, setEmployeeId] = useState('');

	useEffect(() => {
		dispatch(fetchEmployeeFormData());
	}, [trackerStatus]);

	if (status === 'loading') {
		return (
			<div className='spinner-border text-primary' role='status'>
				<span className='sr-only'>Loading...</span>
			</div>
		);
	}

	if (status === 'error') {
		return <div>Error loading employee data.</div>;
	}

	return (
		<div>
			<div className='wrapper'>
				<NavSidebar></NavSidebar>
				<div className='content-page'>
					<div className='content'>
						<div className='container-fluid'>
							<EmployeeFormComponent />
							<div className='d-flex mt-2 flex-wrap'>
								{status === 'succeeded' &&
									employeeFormData.map((employee) => (
										<EmployeeCard key={employee._id} employee={employee} />
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const EmployeeFormComponent = () => {
	const employeeFormData = useSelector((state) => state.employee.data);
	const [formData, setFormData] = useState({
		name: '',
		designation: '',
		image: null,
	});

	const { name, designation, image } = formData;
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const employee = employeeFormData.find((employee) => employee._id === id);
			setFormData({
				name: employee.name,
				designation: employee.designation,
			});
		}
	}, [id]);

	const handleChange = (e) => {
		if (e.target.name === 'image') {
			setFormData({
				...formData,
				[e.target.name]: e.target.files[0],
			});
		} else {
			const { name, value } = e.target;
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};
	console.log(formData, name, designation, image, 'formData');
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formDataToSend = new FormData();
		formDataToSend.append('name', name);
		formDataToSend.append('designation', designation);

		formDataToSend.append('image', image);

		if (id) {
			try {
				dispatch(updateEmployee({ id, data: formDataToSend }));
				navigate('/employeeform'); // Change this to the appropriate route
				console.log('Data saved successfully',formDataToSend);
			} catch (error) {
				console.error('Error saving data:', error);
			}
		} else {
			try {
				dispatch(submitEmployeeForm(formDataToSend));
				console.log('Data saved successfully');
			} catch (error) {
				console.error('Error saving data:', error);
			}
		}
	};

	return (
		<div className='container mt-2'>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						className='form-control'
						id='name'
						name='name'
						value={name}
						onChange={handleChange}
						placeholder='Name'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='designation' className='form-label'>
						Designation
					</label>
					<input
						type='text'
						className='form-control'
						id='designation'
						name='designation'
						value={designation}
						onChange={handleChange}
						placeholder='Designation'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='image' className='form-label'>
						Image
					</label>
					<input
						type='file'
						className='form-control'
						id='image'
						name='image'
						onChange={handleChange}
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

const EmployeeCard = ({ employee }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteEmployee(employee._id));
	};

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{employee.name}</h5>
					<p className='card-text'>Designation: {employee.designation}</p>
					<button
						className='btn btn-danger ml-2'
						onClick={(e) => {
							handleDelete(e);
						}}>
						<FaTrash /> Delete
					</button>
				</div>
			</div>
		</div>
	);
};
