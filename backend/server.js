const express = require("express")
const morgaon = require("morgan")   // for logging the requests
const cors = require("cors")

const app = express()

const path = require("path")
const path_to_root_folder = path.resolve();
console.log({ path_to_root_folder })
app.use("/", express.static(path.join(path_to_root_folder, "frontend", "build")))


// 
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: `${path_to_root_folder}/dev.env` })
}


// sending the frontend app to the browser
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res, next) => {
    res.sendFile(path.join(path_to_root_folder, "frontend", "build", "index.html"));
  })
} else {
  app.get("/", (req, res, next) => {
    res.json({
      mode: "development",
      message: "the api is runnig ..."
    })
  })
}



// initialising the server
const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
})
