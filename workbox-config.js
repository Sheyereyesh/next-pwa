module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{Identifier,png,json,js}'
	],
	swDest: 'public/service-worker.js',
	swSrc: 'sw.js',
};