import { BrowserWindow, app } from 'electron';
import url from 'url';
import { CONFIGS } from './resource/config';

let mainWindow: Electron.BrowserWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: CONFIGS.MAIN_HTML,
      protocol: 'file',
      slashes: true,
    }),
  );

  mainWindow.once('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
