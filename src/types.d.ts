interface Product {
  price: number
  name: string
  detail: string
  review: number
  image: string
  slug: string
}

interface Cart {
  total: number
  items: Product[]
}
