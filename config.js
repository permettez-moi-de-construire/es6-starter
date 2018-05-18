const envalid = require('envalid')

const envConfig = {
  NODE_ENV: envalid.str({
    choices: ['development', 'staging', 'test', 'production']
  }),
  PORT: envalid.port()
}

module.exports = function (envInput) {
  return envalid.cleanEnv(envInput, envConfig, {
    dotEnvPath: null
  })
}
