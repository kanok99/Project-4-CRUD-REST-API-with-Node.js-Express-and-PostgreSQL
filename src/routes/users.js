const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/', queries.getUsers);
router.get('/:id', queries.getUserById);
router.post('/', queries.createUser);
router.put('/:id', queries.updateUser);
router.delete('/:id', queries.deleteUser);

module.exports = router;
