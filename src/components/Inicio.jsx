export const Inicio = ({ enlaces }) => {
    const { mspweb, msp, logone, logomsp, logo5, zimbra, quipux, pras, sais, imagen, labo } = enlaces;
    return (
        <>

            {/* <header class="py-5">
                <h1 class="text-center">
                    Tienda
                    <span class="text-primary">Muebles</span>
                </h1>
            </header>
            <div class="border-top py-4">
                <div class="navbar navbar-expand-lg container navbar-light">
                    <a class="navbar-brand nombre-sitio d-lg-none fs-2 fw-bold text-uppercase" href="index.html">
                        HIAL
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegacion">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="navegacion" class="collapse navbar-collapse">
                        <nav class="navbar-nav container d-flex flex-md-row justify-content-md-between text-center ">
                            <a class="text-dark text-decoration-none" href="#">Inicio</a>
                            <a class="text-dark text-decoration-none" href="#">Nosotros</a>
                            <a class="text-dark text-decoration-none" href="#">Servicios</a>
                            <a class="text-dark text-decoration-none" href="#">Contacto</a>
                        </nav>
                    </div>
                </div>
            </div> */}

            <div className="container-xl">
                <div className=" card my-2 mx-2 bg-light">
                    <div className="card-header my-2 mx-2">
                        <div className="row my-2 text-center bg-light">
                            <div className="col-md-12">
                                <img className="img-fluid rounded-4" src={mspweb} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col my-1">
                                <h2 className="card-title p-3 text-light fs-1 bg-info border border-primary-subtle rounded-5 text-center">HOSPITAL GENERAL ISIDRO AYORA DE LOJA</h2>
                                <p className="text-primary">A continuacion puede acceder a los principales sistemas o aplicaciones que se manejan en la institución:</p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-2 mx-2">
                        <div className="col text-center">
                            <a href="https://web.gestiondocumental.gob.ec/" target="_blank" class="text-decoration-none">
                                <img src={quipux} className="img-fluid border border-secondary-subtle rounded-5" />
                                <p className="text-info bg-secondary border border-secondary-subtle rounded-3 text-center">QUIPUX</p>
                            </a>
                        </div>
                        <div className="col text-center">
                            <a href="https://hial.mspz7.gob.ec" target="_blank" class="text-decoration-none">
                                <img src={zimbra} className="img-fluid border border-secondary-subtle rounded-5" />
                                <p className="text-info bg-secondary border border-secondary-subtle rounded-3 text-center"><i class="bi bi-envelope"></i> CORREO</p>
                            </a>
                        </div>
                        <div className="col text-center">
                            <a href="https://sgrdacaa.msp.gob.ec/" target="_blank" class="text-decoration-none">
                                <img src={pras} className="img-fluid border border-secondary-subtle rounded-5" />
                                <p className="text-info bg-secondary border border-secondary-subtle rounded-3 text-center">PRAS</p>
                            </a>
                        </div>
                        <div className="col text-center">
                            <a href="http://10.104.33.33/sais/login.php" target="_blank" class="text-decoration-none">
                                <img src={sais} className="img-fluid border border-secondary-subtle rounded-5" />
                                <p className="text-info bg-secondary border border-secondary-subtle rounded-3 text-center">SAIS</p>
                            </a>
                        </div>
                        <div className="col text-center">
                            <a href="https://hial.actualpacs.com/actualpacs/login" target="_blank" class="text-decoration-none">
                                <img src={imagen} className="img-fluid border border-secondary-subtle rounded-5" />
                                <p className="text-info bg-secondary border border-secondary-subtle rounded-3 text-center">IMAGEN</p>
                            </a>
                        </div>
                        <div className="col text-center">
                            <a href="http://10.104.37.89:8081/Account/Login" target="_blank" class="text-decoration-none">
                                <img src={labo} className="img-fluid border border-secondary-subtle rounded-5" />
                                <p className="text-info bg-secondary border border-secondary-subtle rounded-3 text-center">LABORATORIO</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className="seccion">
                <h1 className="text-center my-5 heading">Contenedores</h1>
                <div className="container">Contenido</div>
                <div className="container-fluid">Contenido</div>
            </section> */}
        </>
    )
}