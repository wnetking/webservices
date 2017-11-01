import React, {Component} from 'react';
import Siema from 'siema';
import renderHTML from 'react-render-html'
import config from "api/config.js"

export default class Slides extends Component {
  componentDidMount() {
    this.siema = new Siema({
      loop: true
    });
  }

  componentWillUnmount() {
    this.siema.destroy()
  }

  prev = () => {
    this.siema.prev()
  }

  next = () => {
    this.siema.next()
  }

  render() {
    let {data, active} = this.props
    return (
      <div>
        <div className="siema">
          {
            data.map((item, key) => (
              <div key={key}>
                <figure>
                  <img width="100%" src={`${config.shopUrl}modules/ps_imageslider/images/${item.image[active].value}`} alt={item.title[active].value}/>
                  <figcaption className="caption">
                    <h2 className="display-1 text-uppercase">{item.title[active].value}</h2>
                    <div className="caption-description">{renderHTML(item.description[active].value)}</div>
                    <p>
                      <a href={item.url[active].value} className="btn btn-md btn-secondary">More</a>
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))
          }
        </div>
        <button className="prev" onClick={this.prev}>&laquo;</button>
        <button className="next" onClick={this.next}>&raquo;</button>
      </div>
    )
  }
}