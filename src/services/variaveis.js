import axios from 'axios';

const urlBase = () =>
  axios
    .get('/../../../configuracoes/variaveis.json')
    .then((response) => response.data.API_URL)
    .catch(() => {
      window.location.href = '/erro';
    });

export { urlBase };
