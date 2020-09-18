import React from 'react';

const Articulo = (props) => {

    const {title, thumbnail, price, original_price, permalink} = props.articulo;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={thumbnail} alt={title} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">${price}</p>

                    <a href={permalink} target="_blank" className="btn btn-info btn-block">Ver articulo</a>
                </div>
            </div>
        </div>
    )
}

export default Articulo;