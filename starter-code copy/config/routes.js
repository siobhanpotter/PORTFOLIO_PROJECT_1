const router = require('express').Router();
const projects  = require('../controllers/projects');
// const secureRoute = require('../lib/secureRoute');

router.route('/projects')
  .get(projects.index);

router.route('/projects/:id')
  .get(projects.show);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
