import React, { useState } from 'react';
import NavSidebar from './NavSidebar';
import { useSelector, useDispatch } from 'react-redux'
// import { addEmployee } from '../../redux/actions/employeeActions'

export default function EmployeForm() {
	return (
		<div className='wrapper'>
			<NavSidebar></NavSidebar>

			<div className='content-page'>
				<div className='content'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-10' style={{ padding: '10px' }}>
								<div className='card'>
									<div className='card-body'>
										<div>
											<h1>Book form </h1>
											<EmployeeForm />
										</div>
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

function EmployeeForm() {
	const [formData, setFormData] = useState({
		imgFile: null, // Updated to store the selected image file
		name: '',
		designation: '',
	});

	const { imgFile, name, designation } = formData;

	const handleChange = (e) => {
		if (e.target.name === 'imgFile') {
			// Update imgFile with the selected file
			setFormData({
				...formData,
				[e.target.name]: e.target.files[0],
			});
		} else {
			
			// For other input fields (name and designation)
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You would normally send formData and imageFile to your backend here

	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					type='text'
					id='name'
					className='form-control'
					name='name'
					value={name}
					onChange={handleChange}
					required
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='designation' className='form-label'>
					Designation
				</label>
				<input
					type='text'
					id='designation'
					className='form-control'
					name='designation'
					value={designation}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='imgFile' className='form-label'>
					Upload Image
				</label>
				<input
					type='file'
					id='imgFile'
					className='form-control'
					name='imgFile'
					accept='image/*' // Allow only image file types
					onChange={handleChange}
					required
				/>
			</div>

			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
}
