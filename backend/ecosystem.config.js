module.exports = {
  apps : [
    {
      name: 'appointments',
      script: './src/server.js',
      watch: true,
      env_file: ".env.custom",
      autorestart: true,
    }
  ]
};
