module.exports = app => {
    app.get("/", (req, res) => res.json({ msg: "hello word" }));
}