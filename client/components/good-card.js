import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoodToCart, removeGoodFromCart } from '../redux/reducers/cart'

const GoodCart = (props) => {
  const { id, title, price, image, description } = props.good
  const { ratio } = props
  const count = useSelector((store) => store.cart[id] || 0)
  const activeCurrency = useSelector(
    (store) => store.currencies.list.find((it) => it.isActive).name
  )

  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(addGoodToCart(id))
  }
  const removeItemFromCart = () => {
    dispatch(removeGoodFromCart(id))
  }

  return (
    <div className="w-64 rounded overflow-hidden shadow-lg mb-3 flex flex-col justify-between">
      <div>
        <div className="flex justify-center">
          <img className="card__image h-32 object-cover w-full" src={image} alt={title} />
        </div>
        <div className="px-6 py-4">
          <div className="card__title font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
      <div>
        <div className="px-3">
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <span className="card__price px-1">Price: {(price * ratio).toFixed(2)}</span>
            <span className="currency">{activeCurrency}</span>
          </div>
        </div>
        <div>
          <div className="px-2 py-4 flex justify-start items-center">
            <button
              type="button"
              className="inline-block px-1 py-1 font-semibold mr-2 text-black text-xl"
              onClick={addItemToCart}
            >
              <i className="fas fa-plus-circle" />
            </button>
            <span className="inline-block bg-gray-200 rounded-full px-1 py-1 font-semibold mr-2 text-black text-xl">
              <i id="brand-name" className="fas fa-shopping-cart px-1" />
            </span>
            <button
              type="button"
              className="inline-block px-1 py-1 font-semibold mr-2 text-black text-xl"
              onClick={removeItemFromCart}
              disabled={count <= 0}
            >
              <i className="fas fa-minus-circle" />
            </button>
            {count > 0 && (
              <div className="py-2">
                <span className="card__product-amount inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {count}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {(price * ratio * count).toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

GoodCart.propTypes = {}

export default React.memo(GoodCart)
