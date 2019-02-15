module.exports = {
  apps: [
    {
      name: 'API',
      script: 'npm',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      exec_mode: 'cluster',
      instances: 'max',
      args: 'start',
      autorestart: true,
      watch: false,
      max_memory_restart: '240M',
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
