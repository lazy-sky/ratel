// Temporary patch for not supporting cypress with Yarn PnP
// https://github.com/LironEr/cypress-mochawesome-reporter/issues/108
const path = require('node:path');
/* ref: https://yarnpkg.com/advanced/pnpapi */
require(path.join(process.cwd(), '.pnp.cjs')).setup();

const REPORTER = 'cypress-mochawesome-reporter';

const resolve = () => {
  const cwd = process.cwd() + '/';

  try {
    const { createRequire, findPnpApi } = require(`module`);
    const targetPnp = findPnpApi(cwd);
    const targetRequire = createRequire(cwd);
    const resolved = targetPnp.resolveRequest(REPORTER, cwd);

    return targetRequire(resolved);
  } catch (error) {
    console.error(REPORTER + '.js: error =', error);
    throw error;
  }
};

module.exports = resolve();
