module.exports = {
  apps: [
    {
      name: 'API',
      script: 'npm',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      exec_mode: 'cluster',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '240M',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      node_args: 'start',
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
