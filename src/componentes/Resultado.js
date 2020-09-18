import React, { Component } from 'react';
import Articulo from './Articulo';
import Paginacion from './Paginacion';

class Resultado extends Component {
    mostrarArticulos = () => {

        const articulos = this.props.articulos;

        if(articulos.length === 0) return null;

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {articulos.map(articulo => (
                        <Articulo
                            key={articulo.id}
                            articulo={articulo}
                        />
                    ))}
                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
    }
    
    render() {
        return (
            <React.Fragment> 
                {this.mostrarArticulos()}
            </React.Fragment>
         );
    }
}

export default Resultado;