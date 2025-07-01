// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject_cm_inch;
        (function (TcHmiProject_cm_inch) {
            function UnitConversion(UnitString, Value) {
                if (UnitString === 'cm_to_inch') {
                    return Value * 2.54;
                } else if (UnitString === 'inch_to_cm') {
                    return Value / 2.54;
                }
            }
            TcHmiProject_cm_inch.UnitConversion = UnitConversion;
        })(TcHmiProject_cm_inch = Functions.TcHmiProject_cm_inch || (Functions.TcHmiProject_cm_inch = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('UnitConversion', 'TcHmi.Functions.TcHmiProject_cm_inch', TcHmi.Functions.TcHmiProject_cm_inch.UnitConversion);
