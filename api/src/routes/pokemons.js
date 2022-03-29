const {Router} = require('express');
const router = Router();

const {getAllPokemons, getById, postPokemon, deletePokemon, editPokemon} = require('../controllers/pokemons.js')


router.get('/', getAllPokemons);
router.get('/:id', getById);
router.post('/', postPokemon);
router.delete('/:id', deletePokemon);
router.put('/:id', editPokemon);

module.exports = router;