
const mongoose = require('./connection.js')


const shopFormSchema = mongoose.Schema({
  title: String,
  quantity: Number,
  price: Number,
  productId: Number
})


const shopFormCollection = mongoose.model('shopForm', shopFormSchema)


// READ/ get
const getCartIems = () => {
  return shopFormCollection.find();
}

// UPDATE/ edit
const updateCartItem = (productId, updatedProduct) => {
  return shopFormCollection.updateOne({ _id: productId }, updatedProduct)
}

// DELETE
const deleteCartItem = (productId) => {
  return shopFormCollection.findByIdAndDelete(productId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
//   addBooks,
  deleteCartItem,
  getCartIems,
//   getOneBooks,
  updateCartItem
}
