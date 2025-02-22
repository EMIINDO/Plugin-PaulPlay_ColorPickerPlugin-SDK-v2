"use strict";
{
    globalThis.C3.Plugins.PaulPlay_ColorPickerPlugin.Acts = {
        Show_Picker()
        {
            cordova.plugins.colorPicker.showDialog(
            {
                withAlpha: false
            }, (result) => {
                console.log(`New color: $
                {
                    result.color
                }`);
            }, (error) => {
                console.log(`Something went wrong: $
                {
                    error
                }`);
            });
        }
    };
}