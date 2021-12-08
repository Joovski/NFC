const {app, ipcMain} = require("electron");
const smartcard = require('smartcard'); // https://github.com/santigimeno/node-pcsclite

function createWindow(){
  mainWindow.loadFile("indexHistorique.html");
  mainWindow.setMenuBarVisibility(false);
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

var scanner = false;
var nomCarte = ""; 
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

