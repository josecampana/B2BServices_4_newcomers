# micro-service

# micro-service

## Starting it

- Clone the repo
- Install the dependencies with `npm i`
- Run it:
  - `NODE_ENV=production npm start`
  - in dev mode with `NODE_ENV=production npm run dev`

## Developing the service...

This services uses @b2b/service-next. Check the latest documentation at [bit.ly/b2bservice-next](https://bit.ly/b2bservice-next).

### Pointing to APIs in your local

If you need to override some APIs to your local, the easiest way to do it is creating a file `./config/localhost.js` and set NODE_ENV: `NODE_ENV=localhost`

This ./config/localhost.js was added to [git ignore's project](.gitignore) so it won't be pushed to the repo.

```javascript
module.exports = {
  api: {
    basePath: 'https://services.ifb.ingka.com',
    partnerportal: 'https://partner.ikea.com/api',
    providedServices: 'http://localhost:3002/provided-services',
  },
};
```

:information: this example points the providedServices endpoints you your local at port 3002.

Now launch the service:

- `NODE_ENV=localhost npm start`
- or with `NODE_ENV=localhost npm run dev`

### Debuging the app

Create the file `./vscode/launch.json` in your project with:

```javascript
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "console": "integratedTerminal",
      "name": "production",
      "request": "launch",
      "runtimeArgs": ["run-script", "dev"],
      "runtimeExecutable": "npm",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "env": {
        "LOG_LEVEL": "trace",
        "NODE_ENV": "production",
        "GOOGLE_APPLICATION_CREDENTIALS": "/XXXXXXXX/firestore-credentials.json"
      }
    }
  ]
}
```

If you want to debug using your ./config/localhost.js add this new new debug configuration:

```javascript
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "console": "integratedTerminal",
      "name": "production",
      "request": "launch",
      "runtimeArgs": ["run-script", "dev"],
      "runtimeExecutable": "npm",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "env": {
        "LOG_LEVEL": "debug",
        "NODE_ENV": "production",
        "GOOGLE_APPLICATION_CREDENTIALS": "/XXXXXXXX/firestore-credentials.json"
      }
    },
    {
      "console": "integratedTerminal",
      "name": "localhost",
      "request": "launch",
      "runtimeArgs": ["run-script", "dev"],
      "runtimeExecutable": "npm",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "env": {
        "LOG_LEVEL": "debug",
        "NODE_ENV": "localhost",
        "GOOGLE_APPLICATION_CREDENTIALS": "/XXXXXXXX/firestore-credentials.json"
      }
    }
  ]
}
```

## ENV Vars

Check the **mandatory env vars** that are in bold.

- **GOOGLE_APPLICATION_CREDENTIALS** (for development only): **absolute path** to the JSON file including the credentials to connect Firestore
- NODE_ENV: get the correct environment config file from `./config`
- LOG_LEVEL : overrides options.logLevel (default `info`)
- PORT : overrides options.hosting.port (default `3000`)
- SERVER_ADDRESS : overrides options.hosting.address (default `localhost`)
- BASE_PATH : overrides options.hosting.basePath (default `/`)
- SERVER_BASE : overrides options.hosting.serverBase
- SWAGGER_URL : overrides options.swaggerURL (default `/docs`)
- LOWER_CASE_PARAMS : overrides options.lowercaseParams separated by comma (default `retailUnit,language`)
- STATIC_URL : overrides options.staticURL (default `/`)
- STATIC_FILES : overrides options.staticFiles
- RESPONSE_CACHE_CONTROL : overrides options.cacheResponse.value (default ``)
- DISABLE_API_VALIDATION_REQUEST **will set to false** : overrides options.validation.validateRequests (default unset => API Request validation enabled)
- DISABLE_API_VALIDATION_RESPONSE **will set to false** : overrides options.validation.validateResponses (default unset => API Response validation enabled)
- EXTRA_SERVICES : overrides options.extraServiceList separated by comma (default `health,ping`)

### CORS ENV vars

- CORS_ORIGIN: comma separated list of domains to configure the Access-Control-Allow-Origin CORS header
- CORS_METHODS: comma separated list of methods to configures the Access-Control-Allow-Methods CORS header
- CORS_MAXAGE_SECONDS: configures the Access-Control-Max-Age CORS header
- CORS_CREDENTIALS: Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted
- CORS_PREFLIGHT_CONTINUE: true to pass the CORS preflight response to the next handler
- CORS_ALLOWED_HEADERS: comma separated list of header names that configures the Access-Control-Allow-Headers CORS header. Expects a comma-delimited string (ex: 'Content-Type,Authorization') or an array (ex: 'Content-Type,Authorization'). If not specified, defaults to reflecting the headers specified in the request's Access-Control-Request-Headers header
- CORS_EXPOSED_HEADERS: comma separated list that configures the Access-Control-Expose-Headers CORS header. Expects a comma-delimited string (ex: 'Content-Range,X-Content-Range') or an array (ex: Content-Range,X-Content-Range'). If not specified, no custom headers are exposed

### Translations extra service

- TRANSLATION_TAG : overrides options.translation.tag for the translation extra service (default `unknown`)

### Cache

Here some documentation of how to work with [cache and @b2b/service-next](https://bit.ly/b2b-service-next-cache)

- REDIS_HOST : overrides options.redis.host
- REDIS_PORT : overrides options.redis.port (default `6379`)
- REDIS_PASSWORD : overrides options.redis.password
- REDIS_DB : overrides options.redis.db (default `0`)
- REDIS_NUMBER_RETRIES : overrides options.redis.maxRetries (default `500`)
- REDIS_ALWAYS_CLOSE_CONNECTION `options.redis.alwaysCloseConnection` (default `false`)
- CACHE_TTL : overrides options.cache.ttl in seconds (default `3600`)
- CACHE_TYPE : overrides options.cache.type (default `none`)

This project was created using **@mad/churri** (aka La Churrera) - create a new one with `npx @mad/churri@latest`
