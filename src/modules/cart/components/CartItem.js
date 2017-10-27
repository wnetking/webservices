import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Media, ListGroupItem } from 'reactstrap'
import Api from 'api'

const CartItem = ({product, languages}) => {
  let item = product
  let { active } = languages

  return (
    <ListGroupItem>
      <Media>
        <Media className="mr-2" left>
          <Media
            object
            src={Api.images.productImage(item.id_product, item.images[0].id)}
            data-src='holder.js/100x100'
            alt={item.product_info[0].name[active].value}
            width='80' />
        </Media>
        <Media body>
          <Media>
            <Link to={`/product/${item.id_product}-${item.product_info[0].link_rewrite[0].value}`}>
            {item.product_info[0].name[active].value}
            </Link>
          </Media>
          {item.product_option_values.map((item, key) => (
             <span key={key}>{item.name[active].value} </span>
           ))}
           <p>
             Quantity : {item.quantity}
           </p>
        </Media>
      </Media>
    </ListGroupItem>
  )
}

function mapStateToProps ({ languages }) {
  return {
    languages: languages
  }
}

export default connect(mapStateToProps)(CartItem)
