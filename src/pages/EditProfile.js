const EditProfile = () => {
    const view = `
    <div class="main-profile">
        <section class="profile-content">
            <img src="https://i.ibb.co/h1hs05Y/IMG-20210526-183604-2.png" alt="factura master logo" class="logo-body-profile">
            <h1>Editar Perfil</h1>
            <div class="upload">
                <div class="avatar-upload">
                    <figure>
                        <img src="https://i.ibb.co/NsBQLL2/circle-user.png" alt="upload logo icon">
                    </figure>
                    <p>Cambiar imagen</p>
                </div>
                <div class="logo-upload">
                    <figure>
                        <img src="https://i.ibb.co/0rPGjKC/blue-upload-icon.png" alt="upload logo icon">
                    </figure>
                    <p>Cambiar logo</p>
                </div>
            </div>
            <div class="form-profile">
                <form action="">
                    <input type="text" placeholder="Nombre">
                    <input type="adress" placeholder="Dirección">
                    <input type="list" placeholder="País">
                    <input type="id" placeholder="ID">
                    <input type="text" placeholder="Contraseña">
                    <input type="text" placeholder="Nueva contraseña">
                </form>
            </div>
                <div class="form-profile-buttons">
                <button>Cancelar</button>
                <button>Generar</button>
                </div>
        </section>
    </div>
    `;

    return view;
};

export default EditProfile;