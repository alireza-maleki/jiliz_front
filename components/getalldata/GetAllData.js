

export async function loadProducts() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return products
}

export async function loadData() {
  // Call an external API endpoint to get posts

  const res = await fetch('https://api.vipkitchen.ir/v1/homedata/')

  const data = await res.json()

  return data
}


