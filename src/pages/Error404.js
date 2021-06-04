import Aside from '../templates/Aside'

const Error404 = () => {
    const view = `
        <div class="main-error404">
            <aside>
                ${Aside()}
            </aside>
            <figure class="error404-cat">
                <img src="https://i.ibb.co/9rPX9fH/404error.png" alt="Error404">
            </figure>
        </div>
    `;

    return view;
}

export default Error404;