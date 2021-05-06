module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'Tu Hospedaje Delta' })
    },
    puertoGallo: (req, res) => {

        let imagenes = ["puertogallo1.jpg","puertogallo3.jpg","puertogallo4.jpg","puertogallo5.jpg","puertogallo6.jpg","puertogallo7.jpg","puertogallo8.jpg","puertogallo9.jpg","puertogallo10.jpg","puertogallo11.jpg","puertogallo12.jpg","puertogallo13.jpg","puertogallo14.jpg","puertogallo15.jpg","puertogallo16.jpg","puertogallo2.jpg",]

        res.render("puertoGallo", { title: "Puerto Gallo", imagenes })
    },
    timbu: (req, res) => {
        res.render("timbu", { title: "Timbu" })
    },
    chana: (req, res) => {
        res.render("chana", { title: "Chana" })
    },
};