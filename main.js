const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Referência para a janela principal
let mainWindow;

// Função para criar a janela principal
function createWindow() {
  // Cria a janela principal do Electron
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Permite o uso do Node.js no projeto Angular
    }
  });

  // Carrega o projeto Angular
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'), // Caminho para o arquivo index.html do projeto Angular
    protocol: 'file:',
    slashes: true
  }));

  // Evento disparado quando a janela principal é fechada
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Evento disparado quando o Electron termina de inicializar
app.on('ready', createWindow);

// Evento disparado quando todas as janelas são fechadas
app.on('window-all-closed', () => {
  // Verifica se o sistema operacional é macOS
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Evento disparado quando o aplicativo é ativado (macOS)
app.on('activate', () => {
  // Verifica se a janela principal não existe e a cria
  if (mainWindow === null) {
    createWindow();
  }
});



/*const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    });

    win.loadFile('file://${__dirname}/dist/index.html');

    //win.webContents.openDevTools()

    win.on('closed', function() {
        win = null;
    });

    app.on('ready', createWindow);

    app.on('window-all-closed', function() {
        if (process.platform!== 'darwin') {
            app.quit();
        }
    })

    app.on('activate', function() {
        if (win === null) {
            createWindow();
        }
    })
}*/