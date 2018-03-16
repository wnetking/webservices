import React from 'react';
import { Card, CardImg, CardBody, CardSubtitle, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Price } from 'modules/productlist/components';
import Api from 'api';
import Tools from 'utils';

export default function ProductMiniature({ item, lang }) {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src={Api.images.productImage(item.id, item.id_default_image)}
        alt={Tools.l(item.name, lang)}
      />
      <CardBody>
        <CardSubtitle className="text-center">
          <Link to={`/product/${item.id}-${Tools.l(item.link_rewrite, lang)}`}>
            {Tools.l(item.name, lang)}
          </Link>
        </CardSubtitle>
        <Badge>
          <Price price={item.price} />
        </Badge>
      </CardBody>
    </Card>
  );
}
