import React from 'react';



const Footer = () => {
    return (
        <footer>
            <h2 className="display-4 text-center py-5 my-4">Funcionalidades</h2>

            <nav className="nav justify-content-center nav-pills flex-column flex-md-row">
                <a className="nav-link active" href="#products" data-toggle="tab">Manejo de Empleados</a>
                <a className="nav-link" href="#stock" data-toggle="tab">Soporte para manejo de Botellas</a>
            </nav>

            <div className="tab-content py-5">
                <div className="tab-pane active" id="products">
                    <h3>Manejo de Empleados</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur hic magni neque non quibusdam reprehenderit temporibus voluptatum! Corporis dicta doloribus dolorum explicabo fugiat incidunt, magni nam natus omnis quos!</p>
                </div>

                <div className="tab-pane" id="stock">
                    <h3>Soporte para manejo de Botellas</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis eum exercitationem expedita fuga id molestias natus, nobis perferendis qui repellat, sed sint ullam unde voluptas! Explicabo id impedit maiores.</p>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
