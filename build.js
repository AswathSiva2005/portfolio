#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Set environment variables
process.env.CI = 'false';
process.env.NODE_ENV = 'production';

// Path to react-scripts
const reactScriptsPath = path.join(__dirname, 'node_modules', 'react-scripts', 'bin', 'react-scripts.js');

// Execute react-scripts build with node directly
const child = spawn('node', [reactScriptsPath, 'build'], {
  stdio: 'inherit',
  env: process.env
});

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
