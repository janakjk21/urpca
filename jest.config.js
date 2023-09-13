module.exports = {
	transform: {
		'^.+\\.jsx?$': 'babel-jest', // Transform JavaScript/JSX files with Babel
		'^.+\\.svg$': '<rootDir>/svgTransform.js', // Custom SVG transformer for SVG files
	},
	moduleNameMapper: {
		'^@/(.*svg)(\\?inline)$': '<rootDir>/src/$1', // Map SVG import paths
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS/SCSS/Sass files
	},
	moduleFileExtensions: [
		'js',
		'jsx',
		'json',
		'node',
		'svg',
		'png',
		'jpg',
		'jpeg',
		'gif',
	],
	transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ignore node_modules for transformations
	// Add other Jest configuration options here if needed
};
