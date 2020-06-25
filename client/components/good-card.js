import React from 'react'

const GoodCart = (props) => {
  const { title, price, image, description } = props.good
  return (
    <div className="w-64 rounded overflow-hidden shadow-lg mb-3">
      <div className="flex justify-center">
        <img className="card__image h-32 object-cover w-full" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          <i className="fa fa-cart-plus" aria-hidden="true" />
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {price}
        </span>
      </div>
    </div>
  )
}

GoodCart.propTypes = {}

export default React.memo(GoodCart)
