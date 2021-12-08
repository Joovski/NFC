const {app, ipcMain, BrowserWindow} = require("electron");
const smartcard = require('smartcard'); // https://github.com/santigimeno/node-pcsclite

function createWindow(){
  mainWindow.loadFile("indexHistorique.html");
  mainWindow.setMenuBarVisibility(false);
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

function FermerApp(){
  app.quit();
}

app.on("window-all-closed", FermerApp);

ipcMain.on('asynchronous-message', (event, arg) => {
  event.sender.send('asynchronous-reply', 'pong');
  console.log("test");

})

var scanner = false;
var identifiantCarte = "";
var eventScanner = null;
ipcMain.on('Scanner', (event, arg) => {
  scanner = true;
  nomCarte = arg;
  eventScanner = event;
})

ipcMain.on('Cartes', (event, arg) => {
  event.reply('Cartes', cartes);
})

const Devices = smartcard.Devices;
const devices = new Devices();
devices.on("device-activated", LecteurConnecte);

function LecteurConnecte(event){
    const currentDevices = event.devices;
    var device = event.device;
    device.on("card-inserted", CarteConnecte);
}

