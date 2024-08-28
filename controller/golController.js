const getGoals = (req, res) => {
    res.status(200).json({
        message: "Berhasil mendapatkan Method Get Running"
    })
}

const postGoals = (req, res) => {
    res.status(200).json({
        message: "Berhasil mendapatkan Method POST Running"
    })
}

module.exports = { getGoals, postGoals };