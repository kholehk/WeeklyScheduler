import getHistory from './utils/app-history';
import renderRoute from './utils/router';

function main() {
  const wrapper = document.querySelector('body');
  if (wrapper === null) return;

  const history = getHistory();
  history.listen((listener) => renderRoute(listener.location, wrapper));

  document.addEventListener('click', (event) => {
    event.preventDefault();

    const { href } = event.target;
    if (!href) return;

    history.push(href);
  });

  window.addEventListener('load', (event) => {
    event.preventDefault();

    renderRoute(new URL(event.target.URL), wrapper);
  });
}

main();
