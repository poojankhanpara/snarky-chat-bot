var bodyParser = require('body-parser');
var http_port = process.env.HTTP_PORT || 3005;
var axios = require('axios')


const initHttpServer = (app) => {
    app.use(bodyParser.json());

    app.get('/', (req, res) => {

    })

    app.post('/', (req, res) => {

    })

    app.listen(http_port, () => console.log('Listening http on port: ' + http_port));
};

module.exports = initHttpServer
