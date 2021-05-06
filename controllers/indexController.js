module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'Tu Hospedaje Delta' })
    },
    puertoGallo: (req, res) => {
        res.render("puertoGallo", { title: "Puerto Gallo" })
    },
    timbu: (req, res) => {
        res.render("timbu", { title: "Timbu" })
    },
    chana: (req, res) => {
        res.render("chana", { title: "Chana" })
    },
};