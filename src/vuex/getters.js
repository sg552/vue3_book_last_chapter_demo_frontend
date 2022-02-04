export const cartProducts = state => {
  return state.shopping_car.added.map(({id, quantity, title, price, image }) => {
  	console.info("--- in getters")
    return {
      id,
      title,
      price,
      image,
      quantity
    }
  })
}
