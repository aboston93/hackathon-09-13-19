/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const ProductSchema = new mongoose.Schema({
  name: String,
  handmade: Boolean, // handmade, machined
  ingredients: Boolean, //natural, artificial
  imageURL: String,
  description: String,
  country: String, //country of origin
  inStock: Boolean, // In-stock vs. special order
  cold: Boolean, // cold or not cold
  selfLife: Number,
  manufacturer: String,
  unitCost: Number,
  unitWeight: Number,
  minOrder: Number // in unit
 })

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const ProductCollection = mongoose.model('Products', ProductSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

const getAllProducts = () => ProductCollection.find()

const getSearchProducts = (txt) => 
ProductCollection.find({ "name" : { $regex: txt, $options: 'i' } })
// ProductCollection.findByName({name: txt})

//"{ "name" : { $regex: /Ghost/, $options: 'i' } }". 
// "name" is the field of the document you are searching. 
// "txt" is the regular expression. 
// "i" is for case insensitive match. 

const getProduct = (id) => ProductCollection.findById(id)

const addProduct = (newProduct) =>  ProductCollection.insertMany([newProduct])

const updateProduct = (productId, updatedProduct) => ProductCollection.findByIdAndUpdate({_id: productId}, updatedProduct)

const deleteProduct = (productId) => ProductCollection.findByIdAndDelete(productId)



/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllProducts,
  getSearchProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
}
