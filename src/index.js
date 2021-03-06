import getHistory from './utils/app-history';
import renderRoute from './utils/router';

function main() {
  const wrapper = document.querySelector('#root');
  if (wrapper === null) return;

  const history = getHistory();
  history.listen(async (listener) => {
    await renderRoute(listener.location, wrapper);
  });

  document.addEventListener('click', (event) => {
    event.preventDefault();

    const { href } = event.target;
    if (!href) return;

    history.push(href);
  });

  window.addEventListener('load', async (event) => {
    event.preventDefault();

    await renderRoute(new URL(event.target.URL), wrapper);
  });
}

main();
