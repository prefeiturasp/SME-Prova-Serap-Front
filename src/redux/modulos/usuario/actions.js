export function salvarDadosLogin(Login) {
  return {
    type: '@usuario/salvarDadosLogin',
    payload: Login,
  };
}

export function setLogado(logado) {
  return {
    type: '@usuario/setLogado',
    payload: logado,
  };
}

export function setDadosUsuario(dadosUsuario) {
  return {
    type: '@usuario/setDadosUsuario',
    payload: dadosUsuario,
  };
}

export function deslogar() {
  return {
    type: '@usuario/deslogar',
  };
}
