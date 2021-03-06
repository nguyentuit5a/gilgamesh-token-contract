module.exports = {
	networks: {
		development: {
			host: "localhost",
			port: 8545,
			gas: 4600000,
			network_id: "*", // Match any network id
		},
	},
	solc: {
		optimizer: {
			enabled: true,
			runs: 200,
		},
	},
};
