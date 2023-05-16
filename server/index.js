const express = require("express")
const mysql = require("mysql");
const cors = require("cors")
const multer = require("multer")


const app = express()
app.use(express.urlencoded());
app.use(cors())
const router = express.Router()

const connection = mysql.createConnection({
    host: "bwmpbeeawsmn3wustguu-mysql.services.clever-cloud.com",
    user: "uma8vjdlxdxqrbkn",
    password: "IWsPfQzY4aVlFXROtYZd",
    database: "bwmpbeeawsmn3wustguu"
})

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads")
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname)
    },
})

const multerUpload = multer({ storage })

router.get("/", (req, res) => {
    connection.query("select * from coinscatalog", (err, data) => {
        if (!err) {
            res.status(200).json(data)
        } else {
            res.status(500).json({ message: err.sqlMessage })
        }
    })
})
router.get("/:id", (req, res) => {
    const id = +req.params.id

    connection.query(`select * from coinscatalog`, (err, data) => {
        console.log(data)
        if (!err) {
            const findCoin = data.find(coin => coin.coin_id === id)
            res.status(200).json(findCoin)
        } else {
            res.status(500).json({ message: err.sqlMessage })
        }
    })
})
router.post("/add", multerUpload.array("files"), (req, res) => {
    console.log("body", req.body);
    console.log("file", req.file);
    // const { coin_name, quality, fulldesc,
    //     denomination, year, price, weight,
    //     country, composition, shortdesc, category } = req.body
    // const files = req.files
    // const query = `insert into coinscatalog 
    // (coin_name,coin_category,coin_country,coin_composition,coin_quality,
    //     coin_denomination,coin_year,coin_price,coin_weight,coin_img_face,
    //     coin_img_back,coin_short_desc,coin_full_desc)
    //     values 
    //     ("${coin_name}","${category}","${country}","${composition}",
    //     "${quality}","${denomination}", "${year}" ,"${price}" , "${weight}",
    //      "${files[0].filename}", "${files[1].filename}", "${shortdesc}", "${fulldesc}")`
    // connection.query(query, (err, data) => {
    //     if (!err) {
    //         res.send(data)
    //     } else {
    //         res.status(500).json({ message: err.sqlMessage })
    //     }
    // })

})
app.use(router)

app.use("/uploads", express.static("uploads"))


app.listen(8080, () => console.log("server is run.."))