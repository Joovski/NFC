const {app, ipcMain} = require("electron");
const smartcard = require('smartcard'); // https://github.com/santigimeno/node-pcsclite

function createWindow(){
  mainWindow.loadFile("indexHistorique.html");
  mainWindow.setMenuBarVisibility(false);
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

  const Devices = smartcard.Devices;
  const devices = new Devices();
  devices.on("device-activated", DetectionCarte);

function DetectionCarte(event){
  const currentDevices = event.devices;
  var device = event.device;
  device.on("card-inserted", CarteConnecte);
}

function RecuperationId(event){

}