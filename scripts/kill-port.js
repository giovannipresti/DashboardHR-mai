const { exec } = require('child_process');

const isWindows = process.platform === 'win32';
const killCommand = isWindows
  ? `FOR /F "tokens=5" %P IN ('netstat -a -n -o ^| findstr :3000') DO TaskKill /PID %P /F`
  : `lsof -ti:3000 | xargs kill -9`;

exec(killCommand, (error) => {
  if (error && error.code !== 1) {
    console.error(`Error killing process: ${error}`);
  }
});