#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

const platform = os.platform();
const arch = os.arch();

let binaryName;
if (platform === 'darwin' && arch === 'arm64') {
  binaryName = 'dp-key-darwin-arm64';
} else if (platform === 'darwin' && arch === 'x64') {
  binaryName = 'dp-key-darwin-amd64';
} else if (platform === 'linux' && arch === 'x64') {
  binaryName = 'dp-key-linux-amd64';
} else if (platform === 'win32' && arch === 'x64') {
  binaryName = 'dp-key-windows-amd64.exe';
} else {
  console.error(`Unsupported platform: ${platform}-${arch}`);
  process.exit(1);
}

const binaryPath = path.join(__dirname, '..', 'binaries', binaryName);
const child = spawn(binaryPath, process.argv.slice(2), { stdio: 'inherit' });

child.on('exit', (code) => {
  process.exit(code || 0);
});
