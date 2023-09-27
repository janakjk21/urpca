import React, { useState } from 'react';
import contactus_background from '../../Assets/images/bg/vid.jpg';
import Nav from '../Nav';
import './login.css';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/dashboardslicers/signupSlice';
import { loginUser } from '../redux/dashboardslicers/loginSlice';

export default function Login() {
	return (
		<>
			<Nav></Nav>
			<Formsection></Formsection>;
		</>
	);
}

const Formsection = () => {
	const dispatch = useDispatch();
	const [signIn, setSignIn] = useState(true);
	const [name, setName] = useState(''); // State for name input
	const [email, setEmail] = useState(''); // State for email input
	const [password, setPassword] = useState(''); // State for password input
	const [role, setRole] = useState('admin'); // State for password input
	const slide = () => {
		setSignIn(!signIn);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleLogin = (e) => {
		// Replace with actual credentials
		e.preventDefault();
		if (signIn) {
			dispatch(loginUser({ email, password }));
			console.log('login');
		} else {
			console.log('sign in');

			dispatch(registerUser({ name, email, password, role }));
		}
		// Prevent page from refreshing
	};
	console.log(email, password);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				background: '#42495D',
			}}>
			<div className='App'>
				<div className='Panel FormPanel'>
					<h2>{signIn ? 'Sign in' : 'Create account'}</h2>
					<div className='Social'>{/* Social icons */}</div>
					<p>Or use your email account</p>
					<form>
						{/* Email and Password input fields */}
						{signIn || (
							<input
								type='text'
								placeholder='Name'
								value={name}
								onChange={handleNameChange}
							/>
						)}
						<input
							type='text'
							placeholder='Email'
							value={email}
							onChange={handleEmailChange}
						/>
						<input
							type='password'
							placeholder='Password'
							value={password}
							onChange={handlePasswordChange}
						/>
					</form>
					<a href='#'>Forgot your password?</a>
					<button
						onClick={(e) => {
							handleLogin(e);
						}}>
						{signIn ? 'Sign in' : 'Sign up'}
					</button>
				</div>
				<div className='Panel ActionPanel'>
					<h2>{signIn ? 'Hello friend!' : 'Welcome back!'}</h2>
					<p>
						{signIn
							? 'Enter your personal details and start your journey with us'
							: 'To keep connected with us please login with your personal info'}
					</p>
					<button onClick={slide}>{signIn ? 'Sign up!' : 'Sign in!'}</button>
				</div>
			</div>
		</div>
	);
};
