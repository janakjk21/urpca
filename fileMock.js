// mocks.js

// Mock image imports
module.exports = {
	'\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/fileMock.js', // Image files
	'\\.(css|less|scss|sass)$': '<rootDir>/styleMock.js', // CSS files
	// Add more mock configurations for other file types if needed
};
