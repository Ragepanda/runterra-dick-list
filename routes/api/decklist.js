const router = require("express").Router();
const decklistController = require("../../controller/decklist/decklist");


// router.get('/hello', (req, res) => {
//     res.send({ express: 'Hello From Express' });
//   });

router
.route("/getDecklists")
.get(decklistController.getDecklists);

router.
route("/getDeckById")
.get(decklistController.getDeckById);

router
.route("/addNewDeck")
.post(decklistController.addNewDeck);

module.exports = router;