module.exports = {
  apps: [
    {
      name: 'API',
      script: 'npm',
      args: 'start',

      exec_mode: 'cluster',
      instances: 'max',

      autorestart: true,
      max_memory_restart: '240M',

      watch: ['src'],
      watch_delay: 1000,
      ignore_watch: ['node_modules', 'dist'],
      watch_options: {
        followSymlinks: false,
      },
    },
  ],

  deploy: {
    production: {
      key: '.ssh/ssh.pem',
      user: 'root',
      host: '91.121.50.14:51400',
      ref: 'origin/master',
      repo: 'https://github.com/jhnoa/server-backend.git',
      path: '/root/node-server/server-backend',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
    },
    staging: {},
    development: {
      key: '.ssh/ssh.pem',
      user: 'root',
      host: '91.121.50.14:51400',
      ref: 'origin/master',
      repo: 'https://github.com/jhnoa/server-backend.git',
      path: '/root/node-server/server-backend',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js',
    },
  },
};
