var items = require('../controllers/items.js');

module.exports = function(app) {
  app.get('/', function (req, res) {
    items.index(req, res)
  })
  app.get('/new', function(req, res) {
    console.log('==== REFRESH ====');
    items.refresh(req, res)
  })
}
