import { toRender } from '../utils/RouterUtils';
import '../assets/styles/app.scss'

const router = async () => {
  const header = document.getElementById('header');
  const content = document.getElementById('content');

  header.innerHTML = null;
  content.innerHTML = await toRender();
};

export default router;