import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="flex justify-between mb-4">
      <Link to="/" id="brand-name">
        My Shop
      </Link>
      <ul className="flex">
        <li className="mr-3">
          <a
            className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
            href="#"
          >
            USD
          </a>
        </li>
        <li className="mr-3">
          <a
            className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            href="#"
          >
            EUR
          </a>
        </li>
        <li className="mr-3">
          <a className="inline-block py-1 px-3 text-gray-400 cursor-not-allowed" href="#">
            CAD
          </a>
        </li>
      </ul>
      <Link to="/basket" id="order-count">
        <i className="fa fa-cart-plus" aria-hidden="true" />
      </Link>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
