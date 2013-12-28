// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    production: {
        url: process.env.MY_URL,
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
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                host: process.env.POSTGRES_HOST,
                database: process.env.POSTGRES_DATABASE,
                port: '5432'
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    },

    development: {
        url: 'http://my-ghost-blog.com',
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    }
};

// Export config
module.exports = config;