import { type PizzaType } from '~/types/pizza-type'
import { type ToppingType } from '~/types/topping-type'

export type CartType = {
  id: number,
  item: PizzaType,
  toppings: ToppingType[]
  totalPrice: number
}
