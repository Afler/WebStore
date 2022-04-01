export class Product {
  id: number
  name: string
  product?: []
  cost: string
  description?: string
  quantity?: number
  image: string
  category?: string

  constructor(id: number, name: string, product: [], cost: string, description: string, quantity: number, image: string, category: string) {
    this.id = id;
    this.name = name;
    this.product = product;
    this.cost = cost;
    this.description = description;
    this.quantity = quantity;
    this.image = image;
    this.category = category;
  }

}
