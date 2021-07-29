export function salvarDadosLogin(Login) {
  return {
    type: '@usuario/salvarDadosLogin',
    payload: Login,
  };
}
