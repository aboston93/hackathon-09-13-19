/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const productAPI = require('../models/product-detail.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const productRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 


productRouter.get('/allproducts', (req, res) => {
  productAPI.getAllProjects().then((products) => {
    res.render('views/allProducts', {products})
  })
})

// productRouter.get('/products/new', (req,res) => {
//   res.render('events/newEntry.hbs',{})
// })

productRouter.get('/:id', (req,res) => {
  productAPI.getProduct(req.params.id).then((product) => {
    res.render('views/product', {product})
  })
})

// productRouter.get('/:id/edit', (req,res) => {
//   eventsAPI.getEvent(req.params.id).then((event) => {
//     res.render('events/editEvent',{event})
//   })
// })

// productRouter.post('/events', (req, res) => {
//   eventsAPI.addEvents(req.body).then(() => {
//     res.redirect('/events')
//   })
// })

productRouter.put('/:id', (req, res) => {
  eventsAPI.updateProduct(req.params.id, req.body).then(() =>{
    res.redirect('/allproducts')
  })
})

productRouter.delete('/:id', (req, res) => {
  eventsAPI.deleteProduct(req.params.id).then(() =>{
    res.redirect('/allproducts')
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  productRouter
}
