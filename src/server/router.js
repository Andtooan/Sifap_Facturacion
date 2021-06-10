import { toRender } from '../utils/RouterUtils';
import '../assets/styles/app.scss'
import { LoginUser, RegisterUser } from '../resources/Events'

const router = async () => {
  const header = document.getElementById('header');
  const content = document.getElementById('content');

  header.innerHTML = null;
  content.innerHTML = await toRender();



  const btnLogin = document.getElementById('btnLogin') || {};
  btnLogin.onclick = LoginUser;

  const btnRegister = document.getElementById('btnRegister') || {};
  btnRegister.onclick = RegisterUser;
};

export default router;


