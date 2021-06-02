import routes from '../server/routes';
import Error404 from '../pages/Error404';
const getHash = () => {
  const hash = location.hash.slice(1).toLocaleLowerCase().split('/')
  if (hash[2]) {
    return ":id"
  } else if (hash[1]) {
    return hash[1]
  } else {
    return '/'
  }
}

const resolveRoute = (hash) => {
  console.log(hash)
  const route = hash === '/' ? `/`
    : hash === "dash" ? `/dash`
    : hash == "generate" ? `/gen`
    : hash == "signup" ? `/signup`
    : hash == "stats" ? `/stats`
    : hash == "2fa" ? `/2fa`
    : hash == ":id" ? `/view/:id`
    : hash == "edit" ? `/edit`
    : '/';
  return route;
}


async function toRender(){
  const hash = getHash();
  const route = resolveRoute(hash);

  const render = routes[route] || Error404;
  return render();
}

export { toRender };