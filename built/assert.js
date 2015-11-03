var Assert = (function () {
    function Assert() {
    }
    Assert.AreEqual = function (expected, actual, message) {
        if (message === void 0) { message = ""; }
        if (expected !== actual) {
            throw new Error("Assert.AreEqual failed. Expected: <" + expected + ">. Actual: <" + actual + ">. " + message);
        }
    };
    Assert.AreNotEqual = function (notExpected, actual, message) {
        if (message === void 0) { message = ""; }
        if (notExpected === actual) {
            throw new Error("Assert.AreNotEqual failed. Expected any value except: <" + notExpected + ">. Actual: <" + actual + ">. " + message);
        }
    };
    Assert.AreNotSame = function (notExpected, actual, message) {
        if (message === void 0) { message = ""; }
        if (typeof (notExpected) !== "object"
            || typeof (actual) !== "object") {
            throw new Error("Assert.AreSame failed. Do not pass value types to AreSame(). Consider using AreEqual().");
        }
        if (notExpected === actual) {
            throw new Error("Assert.AreNotSame failed. " + message);
        }
    };
    Assert.AreSequenceEqual = function (expected, actual, equals, message) {
        if (message === void 0) { message = ""; }
        if (expected === null || actual === null) {
            throw new Error("Assert.AreSequenceEqual failed. Do not pass null values to arrays. " + message);
        }
        if (expected === actual) {
            return;
        }
        if (expected.length !== actual.length) {
            throw new Error("Assert.AreSequenceEqual failed. Length mismatch. Expected: <" + expected.length + ">. Actual: <" + actual.length + ">. " + message);
        }
        if (!equals)
            equals = function (x, y) { return x == y; };
        for (var i = 0, n = expected.length; i < n; i++) {
            if (!equals(expected[i], actual[i])) {
                throw new Error("Assert.AreSequenceEqual failed. "
                    + ("Expected: <" + ((typeof (expected[i]) === "object") ? JSON.stringify(expected[i]) : expected[i]) + ">. ")
                    + ("Actual: <" + ((typeof (actual[i]) === "object") ? JSON.stringify(actual[i]) : actual[i]) + ">. ")
                    + ("At index \"" + i + "\" " + message));
            }
        }
    };
    Assert.Fail = function (message) {
        if (message === void 0) { message = ""; }
        throw new Error("Assert.Fail failed. " + message);
    };
    Assert.IsFalse = function (actual, message) {
        if (message === void 0) { message = ""; }
        if (actual !== false) {
            throw new Error("Assert.IsFalse failed. " + message);
        }
    };
    Assert.IsInstanceOfType = function (actual, expectedType, message) {
        if (message === void 0) { message = ""; }
        if (!(actual instanceof expectedType)) {
            var expectedTypeName = /^function\s*([^(]*)/i.exec(expectedType + "")[1].toLocaleLowerCase();
            var actualTypeName = /^function\s*([^(]*)/i.exec(actual.constructor + "")[1].toLocaleLowerCase();
            throw new Error("Assert.IsInstanceOfType failed. "
                + ("Expected type: <" + expectedTypeName + ">. ")
                + ("Actual type: <" + actualTypeName + ">. " + message));
        }
    };
    Assert.IsNotInstanceOfType = function (actual, wrongType, message) {
        if (message === void 0) { message = ""; }
        if (actual instanceof wrongType) {
            var wrongTypeName = /^function\s*([^(]*)/i.exec(wrongType + "")[1].toLocaleLowerCase();
            var actualTypeName = /^function\s*([^(]*)/i.exec(actual.constructor + "")[1].toLocaleLowerCase();
            throw new Error("Assert.IsNotInstanceOfType failed. "
                + "Expected any type except: <" + wrongTypeName + ">. "
                + "Actual type: <" + actualTypeName + ">. "
                + message);
        }
    };
    Assert.IsNotNull = function (actual, message) {
        if (message === void 0) { message = ""; }
        if (actual === null) {
            throw new Error("Assert.IsNotNull failed. " + message);
        }
    };
    Assert.IsNull = function (actual, message) {
        if (message === void 0) { message = ""; }
        if (actual !== null) {
            throw new Error("Assert.IsNull failed. " + message);
        }
    };
    Assert.IsTrue = function (actual, message) {
        if (message === void 0) { message = ""; }
        if (actual !== true) {
            throw new Error("Assert.IsTrue failed. " + message);
        }
    };
    Assert.Throws = function (fn, message) {
        if (message === void 0) { message = ""; }
        var result = false;
        try {
            fn();
        }
        catch (ex) {
            result = true;
        }
        if (!result)
            throw new Error("Assert.Throws failed. " + message);
    };
    return Assert;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Assert;
//# sourceMappingURL=assert.js.map