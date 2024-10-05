/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    verbose: true,
	moduleNameMapper: {
		'\\.(scss|css)$': 'identity-obj-proxy',
	},
}