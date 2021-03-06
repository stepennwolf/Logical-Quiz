var path = require('path'),
    fs   = require('fs'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    pkg = JSON.parse( fs.readFileSync( "package.json" ) );

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'logical-quiz'
    },
    port: 3000,
    db: 'mongodb://localhost/logical-quiz',
    pkg: pkg
  },

  test: {
    root: rootPath,
    app: {
      name: 'logical-quiz'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://stepennwolf:xCs495scX765ovER@kahana.mongohq.com:10091/app29299981',
    pkg: pkg
  },

  production: {
    root: rootPath,
    app: {
      name: 'logical-quiz'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/logical-quiz-production'
    
  }
};

module.exports = config[env];
