'use strict';

// return true if user has choose a special peripheral
function isPeripheralSelected(peripheralName) {
    for (var portIndex = 0; portIndex < SERIAL_CONFIG.ports.length; portIndex++) {
        var serialPort = SERIAL_CONFIG.ports[portIndex];
        if (serialPort.functions.indexOf(peripheralName) >= 0) {
            return true;
        }
    }

    return false;
}

// Adjust the real name for a modeId. Useful if it belongs to a peripheral
function adjustBoxNameIfPeripheralWithModeID(modeId, defaultName) {
    if (isPeripheralSelected("RUNCAM_DEVICE_CONTROL")) {
        switch (modeId) {
        case 32: // BOXCAMERA1
            return i18n.getMessage('modeCameraWifi');
        case 33: // BOXCAMERA2
            return i18n.getMessage('modeCameraPower');
        case 34: // BOXCAMERA3
            return i18n.getMessage('modeCameraChangeMode');
        default:
            return defaultName;
        }
    }

    if (isPeripheralSelected("MEDIAPLAYER_DEVICE_CONTROL")) {
      switch(modeId) {
        case 50: // BOXMEDIAPLAYERPLAY
          return i18n.getMessage('mediaplayerKeyPause');
        case 51: // BOXMEDIAPLAYERNEXT
          return i18n.getMessage('mediaplayerKeyNext');
        case 52: // BOXMEDIAPLAYERPREV
          return i18n.getMessage('mediaplayerKeyPrevious');
        case 53: // BOXMEDIAPLAYERVOLU
          return i18n.getMessage('mediaplayerKeyVolumeUp');
        case 54: // BOXMEDIAPLAYERVOLD
          return i18n.getMessage('mediaplayerKeyVolumeDown');
        default:
          return defaultName;
      }
    }

    return defaultName;

}
