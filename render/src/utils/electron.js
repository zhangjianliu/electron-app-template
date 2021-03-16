const _rpc = window._ipcRenderer;


export const isElectron = window._isElectron;

export function loginSuccessAndMainShow() {
  _rpc && _rpc.send('login-success-and-main-show');
}

export function logout() {
  _rpc && _rpc.send('logout');
}

export function switchLanguage(lang) {
  _rpc && _rpc.invoke('switch-language', lang)
}

export async function getAppConfig() {
  return _rpc ? _rpc.invoke('get-app-config') : null;
}

