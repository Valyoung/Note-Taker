const apiRouter = express.Router();


apiRouter.get("/notes", function(req, res){
    store
        .getNotes()

        .then(notes => res.json(notes))
});

apiRouter.post("/notes", (req, res) =>{
    store
        .addNote(req.body)

        .then((note) => res.json(note))
});


apiRouter.delete('/notes/:id', function (req, res) {
    store

    .removeNote(req.params.id)

    .then(()=> res.json({ ok: true}))
});

module.exports = apiRouter;