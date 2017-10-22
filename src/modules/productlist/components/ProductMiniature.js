import React from 'react'
import { Card, CardImg, CardBody, CardSubtitle, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'
import {Price} from 'modules/productlist/components'
import Api from 'api'

export default function ProductMiniature ({item, active}) {
  return (
    <Card>
      <CardImg
        top
        width='100%'
        src={Api.images.productImage(item.id, item.id_default_image)}
        alt={item.name[active].value} />
      <CardBody>
        <CardSubtitle className='text-center'>
          <Link to={`/product/${item.id}-${item.link_rewrite[0].value}`}>
          {item.name[active].value}
          </Link>
        </CardSubtitle>
        <Badge>
          <Price price={item.price}/>
        </Badge>
      </CardBody>
    </Card>
  )
}
