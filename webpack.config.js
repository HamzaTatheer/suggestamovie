const path = require('path');

module.exports = {
  entry: './src/server.js', // Specify the entry file of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
    filename: 'bundle.js', // Specify the name of the output bundle file
  },
  target:'node',
  // externals: {
  //   // Possible drivers for knex - we'll ignore them
  //   'sqlite3': 'sqlite3',
  //   'mariasql': 'mariasql',
  //   'mssql': 'mssql',
  //   'mysql': 'mysql',
  //   'oracle': 'oracle',
  //   'strong-oracle': 'strong-oracle',
  //   'oracledb': 'oracledb',
  //   'pg': 'pg',
  //   'pg-query-stream': 'pg-query-stream',
  //   'better-sqlite3': 'better-sqlite3',
  //   'tedious': 'tedious',
  //   'mysql2': 'mysql2'
  // },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the loader to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling
          options: {
            presets: ['@babel/preset-env'], // Specify the Babel preset
          },
        },
      },
    ],
  },
};
