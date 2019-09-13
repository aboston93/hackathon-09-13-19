/* Step 1 import express
 *
 */
const express = require('express')


const shopFormApi = require("../models/shopForm.js")

const shopFormRouter = express.Router()


// get all companies
shopFormRouter.get("/shopForm", function (req, res) {
  shopFormApi.getCartIems()
    .then((allshopForm) => {
      res.render("shopForm/editShopForm.hbs", {allshopForm})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// render createForm
// shopFormRouter.get("/shopForm/add", function (req, res) {
//   res.render("bookTitles/createBookTitles", {})
// })

// get one company by shopFormId
// shopFormRouter.get("/shopForm/:shopFormId", function (req, res) {
//   shopFormApi.getOneshopForm(req.params.shopFormId)
//     .then((shopFormFromDb) => {
//       res.render("bookTitles/oneBook", { _id: req.params.shopFormId, shopFormFromDb })
//     })
//     .catch((error) => {
//       console.log(error) //will show error in console
//     })
// })

shopFormRouter.put("/shopForm/:shopFormId", function (req, res) {
  shopFormApi.updateshopForm(req.params.shopFormId, req.body)
  .then(() => {
    res.redirect("/shopForm")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

shopFormRouter.delete("/shopForm/:shopFormId", function (req, res) {
  shopFormApi.deleteCartItem(req.params.shopFormId)
  .then(() => {
    res.redirect("/shopForm") //redirects to "/", can use any url, etc.
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})


module.exports = {
  shopFormRouter
}
