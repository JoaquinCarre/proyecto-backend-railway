import minimist from "minimist";

const options = { default: { p: 8080, m: 'fork' }, alias: { p: 'PORT_', m: 'MODE' } };

const params = minimist(process.argv.slice(2), options);

export default params;