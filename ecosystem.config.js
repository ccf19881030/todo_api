module.exports = {
  apps : [{
    name: 'todo_api',
    script: 'src/app.js',
    instances: 1,
    autorestart: true,
    watch: '.',
    max_memory_restart: '0.5G'
  }, {
    script: './src/app.js',
    watch: ['./src/app.js']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
