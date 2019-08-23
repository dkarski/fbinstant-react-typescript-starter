const uuid = require('uuid/v1');
const execSync = require('child_process').execSync;

process.env.UUID = uuid();

execSync('yarn archive', { stdio: [0, 1, 2]} );
execSync('node .webpack/upload.js', { stdio: [0, 1, 2]} );
