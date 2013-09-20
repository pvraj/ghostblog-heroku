// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'localhost',

        // Example mail config
        // Visit http://docs.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'sendgrid',
        //      host: 'smtp.sendgrid.net',
        //      options: {
        //          service: 'Sendgrid',
        //          auth: {
        //              user: '', // Super secret username
        //              pass: ''  // Super secret password
        //          }
        //      }
        //  },
        // ```

        database: {
            client: 'pg',
            connection: {
                // filename: path.join(__dirname, '/content/data/ghost-dev.db'),
                database: 'ghost'
            },
            debug: false
        },
        server: {
            host: 'localhost',
            port: process.env.PORT || 5000
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: "localhost",
        mail: {
            transport: 'sendgrid',
            host: 'smtp.sendgrid.net',
            options: {
                service: 'Sendgrid',
                auth: {
                    user: process.env.SENDMAIL_USERNAME,
                    pass: process.env.SENDMAIL_PASSWORD
                }
            }
        },
        database: {
            client: 'pg',
            connection: {
                // filename: path.join(__dirname, '/content/data/ghost.db'),
                user: process.env.PG_USER,
                password: process.env.PG_PASSWORD,
                host: process.env.PG_HOST,
                port: process.env.PG_PORT,
                database: process.env.PG_DATABASE
            },
            debug: false
        },
        server: {
            host: 'localhost',
            port: process.env.PORT || 5000
        }
    }
};

// Export config
module.exports = config;