const app = require('./src/_shared/utils/App');

try {
  app.connect();
} catch (err) {
  console.log(err);
}
