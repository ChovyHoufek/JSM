// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.46/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TestHMI1;
        (function (TestHMI1) {
            function obrobekAnimation(speed) {
            }
            TestHMI1.obrobekAnimation = obrobekAnimation;
        })(TestHMI1 = Functions.TestHMI1 || (Functions.TestHMI1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('obrobekAnimation', 'TcHmi.Functions.TestHMI1', TcHmi.Functions.TestHMI1.obrobekAnimation);
