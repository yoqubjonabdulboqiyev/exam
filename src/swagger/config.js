const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'This swagger is documentation for exam',
        version: '1.0.0',
        description:
            "This is the backend documentation for the frontend",
    },
    servers: [
        {
            url: 'http://localhost:5002',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ["src/swagger/*.swagger.js"],
};

// const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// ...
const swaggerSpec = swaggerJSDoc(options);



module.exports = {
    swaggerUi,
    swaggerSpec
}