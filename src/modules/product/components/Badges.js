import React, { Component } from 'react'
import { Badge } from 'reactstrap'

const Badges = ({data}) => {
  return (
    <div>
      {data === null ?
         <div>
           <Badge color='success' className='mr-2 mb-3'>
             placeholder
           </Badge>
           <Badge color='info' className='mr-2 mb-3'>
             placeholder
           </Badge>
         </div>
         :
         <div>
           {parseInt(data.available_for_order, 10) ?
              <Badge color='success' className='mr-2 mb-3'>
                {data.available_now[0].value}
              </Badge> : null}
           {parseInt(data.show_condition, 10) ?
              <Badge color='dark' className='mr-2 mb-3'>
                {data.condition}
              </Badge> : null}
           {parseInt(data.on_sale, 10) ?
              <Badge color='info' className='mr-2 mb-3'>
                Sale
              </Badge> : null}
           {parseInt(data.online_only, 10) ?
              <Badge color='primary' className='mr-2 mb-3'>
                Online only
              </Badge> : null}
           {parseInt(data.is_virtual, 10) ?
              <Badge color='primary' className='mr-2 mb-3'>
                Is Virtual
              </Badge> : null}
           {data.type === 'pack' ?
              <Badge color='primary' className='mr-2 mb-3'>
                Is Virtual
              </Badge> : null}
         </div>}
    </div>
  )
}

export default Badges
