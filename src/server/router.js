import { toRender } from '../utils/RouterUtils';
import '../assets/styles/app.scss'
import { LoginUser,
  RegisterUser,
  TwoFactor,
  NewInvoice,
  LogOut
} from '../resources/Events'

const router = async () => {
  const header = document.getElementById('header');
  const content = document.getElementById('content');

  header.innerHTML = null;
  content.innerHTML = await toRender();



  const btnLogin = document.getElementById('btnLogin') || {};
  btnLogin.onclick = LoginUser;

  const btnRegister = document.getElementById('btnRegister') || {};
  btnRegister.onclick = RegisterUser;

  const btnTwoFactor = document.getElementById('btn-twoFactor') || {};
  btnTwoFactor.onclick = TwoFactor;

  const btnNewInvoice = document.getElementById('btn-newInvoice') || {};
  btnNewInvoice.onclick = NewInvoice;

  const btnLogOut = document.getElementById('btnLogOut') || {};
  btnLogOut.onclick = LogOut;

};

export default router;


