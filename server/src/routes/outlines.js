const router = require('express').Router();
const {
  getOutline,
  addOutline,
  getAllDesigns,
  updateOutline,
  deleteOutline,
  newOutline,
  getMyDesigns,
} = require('../controllers/outlines');

router.route('/').post(addOutline);

router.route('/alldesigns').get(getAllDesigns);

router.route('/mydesigns').get(getMyDesigns);

router.route('/newdesign').get(newOutline);

router.route('/:id').get(getOutline);

router.route('/:id').put(updateOutline);

router.route('/:id').delete(deleteOutline);

module.exports = router;
