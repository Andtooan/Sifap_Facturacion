const EditProfile = () => {
    const view = `
    <div class="main-profile">
        <section class="profile-content">
        <img src="https://i.ibb.co/h1hs05Y/IMG-20210526-183604-2.png" alt="factura master logo" class="logo-body-newinvoice">
        <h1>Generar Factura</h1>
        <div class="logo-generate">
            <figure>
                <img src="https://i.ibb.co/0rPGjKC/blue-upload-icon.png" alt="upload logo icon">
            </figure>
            <p>Agregar logo</p>
        </div>
        <div class="formulario-newinvoice">
            <form action="">
                <input type="text" placeholder="Nombre">
                <input type="adress" placeholder="Dirección">
                <input type="list" placeholder="País">
                <input type="id" placeholder="ID">
                <input type="text" placeholder="Contraseña">
                <input type="text" placeholder="Nueva contraseña">
            </form>
        </div>
            <div class="form-newinvoice-buttons">
            <button>Cancelar</button>
            <button>Generar</button>
            </div>
        </section>
    </div>
    `;

    return view;
};

export default EditProfile;