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
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
    },
    staging: {},
    development: {},
  },
};
