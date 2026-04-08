import { spawn } from 'child_process';

console.log('Starting PHP server on port 8000...');
const php = spawn('php', ['-S', '127.0.0.1:8000'], { stdio: 'inherit', shell: true });

console.log('Starting Vite server...');
const vite = spawn('npx', ['vite'], { stdio: 'inherit', shell: true });

function shutdown() {
  console.log('Shutting down servers...');
  if (php) php.kill();
  if (vite) vite.kill();
  process.exit();
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
