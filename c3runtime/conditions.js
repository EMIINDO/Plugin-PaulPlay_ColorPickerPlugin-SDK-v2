"use strict";
{
    globalThis.C3.Plugins.PaulPlay_ColorPickerPlugin.Cnds = {
        Isavailable()
        {
            cordova.plugins.colorPicker.isAvailable((available) => {
                if (available)
                {
                    console.log('Color picker is available');
                    return true;
                }
                else
                {
                    console.log('Color picker is NOT available');
                    return false;
                }
            }, (error) => {
                console.log(`Something went wrong: $
                {
                    error
                }`);
                return false;
            });
        }
    };
}