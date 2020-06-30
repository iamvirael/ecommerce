import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setCurrency } from '../redux/reducers/goods'

const Header = () => {
  const currencies = useSelector((store) => store.goods.currencies)

  const dispatch = useDispatch()

  const activeButtonClasses =
    'inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white'
  const inactiveButtonClasses =
    'inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3'

  const onCurrencyChange = (target) => {
    dispatch(setCurrency(target))
  }
  return (
    <nav className="flex justify-between mb-4">
      <Link to="/" id="brand-name">
        My Shop
      </Link>
      <ul className="flex">
        {currencies.map((item) => (
          <li key={item.name} className="mr-3">
            <button
              type="button"
              onClick={() => onCurrencyChange(item.name)}
              className={item.isActive ? activeButtonClasses : inactiveButtonClasses}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <Link to="/basket" id="order-count">
        <i className="fa fa-cart-plus" aria-hidden="true" />
      </Link>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
