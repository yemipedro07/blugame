require('dotenv').config()

module.exports = {
  mongo_url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yzd0v.mongodb.net/blusalt?retryWrites=true&w=majority`,
  mongo_test_url: "",
  secretKey: "Hgs_||bd6jhHD68",
  salt: 12
}