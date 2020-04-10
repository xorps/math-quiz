const {app, BrowserWindow} = require('electron');

let win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html');
    win.on('closed', () => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'drawin') {
        app.quit();
    }
});

app.on('active', () => {
    if (win === null) {
        createWindow();
    }
});