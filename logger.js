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
          accessKeyId: process.env.CLOUDWATCH_ACCESS_KEY_ID,
          secretAccessKey: process.env.CLOUDWATCH_ACCESS_SECRET_ACCESS_KEY,
        },
        region:process.env.CLOUDWATCH_REGION,
      }
      }),
  ],
});

// Export the logger instance
module.exports = logger;