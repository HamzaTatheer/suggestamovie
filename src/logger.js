const { createLogger, transports } = require('winston');
const WinstonCloudWatch = require('winston-cloudwatch');

// Create a Winston logger instance
const logger = createLogger({
  transports: [
    new transports.Console(),
    new WinstonCloudWatch({
      logGroupName: 'suggestamovie',
      logStreamName: 'general',
      awsOptions: {
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
        region:process.env.AWS_DEPLOY_REGION,
      }
      }),
  ],
});

// Export the logger instance
module.exports = logger;