var assert_1 = require("./assert");
var failMessage = "7dcd58bb-49c1-401d-bc78-e3dcdb9c088c";
var objA = { x: 1 };
var objB = { x: 1 };
var arrA = [1, 2, 3];
var arrB = [1, 2, 3];
var arrC = [5, 6];
var arrD = [5, 6, 7];
function checkErrorMessage(errorMessage) {
    if (errorMessage.indexOf(failMessage) === -1)
        throw new Error("Test failed.");
}
describe("Assert.AreEqual", function () {
    it("Values are equal should pass", function () {
        assert_1.default.AreEqual(0, 0);
    });
    it("Values are not equal should throw", function () {
        var result = true;
        try {
            assert_1.default.AreEqual(0, 1);
            result = false;
        }
        catch (ex) { }
        if (!result) {
            throw new Error("Test failed.");
        }
    });
    it("Values are not equal should throw with error message", function () {
        var result = true;
        try {
            assert_1.default.AreEqual(0, 1, failMessage);
            result = false;
        }
        catch (ex) {
            checkErrorMessage(ex.message);
        }
        if (!result) {
            throw new Error("Test failed.");
        }
    });
});
describe("Assert.AreNotEqual", function () {
    it("Values are not equal should pass", function () {
        assert_1.default.AreNotEqual(0, 1);
    });
    it("Values are equal should throw", function () {
        var result = true;
        try {
            assert_1.default.AreNotEqual(0, 0);
            result = false;
        }
        catch (ex) { }
        if (!result) {
            throw new Error("Test failed.");
        }
    });
    it("Values are equal should throw with error message", function () {
        var result = true;
        try {
            assert_1.default.AreNotEqual(0, 0, failMessage);
            result = false;
        }
        catch (ex) {
            checkErrorMessage(ex.message);
        }
        if (!result) {
            throw new Error("Test failed.");
        }
    });
});
describe("Assert.AreNotSame", function () {
    it("Values are not same should pass", function () {
        assert_1.default.AreNotSame(objA, objB);
    });
    it("Values are same should throw", function () {
        var result = true;
        try {
            assert_1.default.AreNotSame(objA, objA);
            result = false;
        }
        catch (ex) { }
        if (!result) {
            throw new Error("Test failed.");
        }
    });
    it("Values are same should throw with error message", function () {
        var result = true;
        try {
            assert_1.default.AreNotSame(objA, objA, failMessage);
            result = false;
        }
        catch (ex) {
            checkErrorMessage(ex.message);
        }
        if (!result) {
            throw new Error("Test failed.");
        }
    });
    it("Values are not references should throw", function () {
        var result = true;
        try {
            assert_1.default.AreNotSame(0, 1);
            result = false;
        }
        catch (ex) { }
        if (!result) {
            throw new Error("Test failed.");
        }
    });
});
describe("Assert.AreSequenceEqual", function () {
    it("Values are sequence equal should pass", function () {
        assert_1.default.AreSequenceEqual(arrA, arrB);
    });
    it("Values are not sequence equal shoud throw", function () {
        var result = true;
        try {
            assert_1.default.AreSequenceEqual(arrA, arrD);
            result = false;
        }
        catch (ex) { }
        if (!result)
            throw new Error("Test failed.");
    });
    it("Values are not sequence equal should throw", function () {
        var result = true;
        try {
            assert_1.default.AreSequenceEqual(arrA, arrD);
            result = false;
        }
        catch (ex) { }
        if (!result)
            throw new Error("Test failed.");
    });
    it("Values are different length should throw", function () {
        var result = true;
        try {
            assert_1.default.AreSequenceEqual(arrA, arrC);
            result = false;
        }
        catch (ex) { }
        if (!result)
            throw new Error("Test failed.");
    });
    it("Values are not sequence equal should throw with error message", function () {
        var result = true;
        try {
            assert_1.default.AreSequenceEqual(arrA, arrC, null, failMessage);
            result = false;
        }
        catch (ex) {
            checkErrorMessage(ex.message);
        }
        if (!result)
            throw new Error("Test failed.");
    });
});
describe("Assert.Fail", function () {
    it("Fail should throw", function () {
        var pass = true;
        try {
            assert_1.default.Fail();
            pass = false;
        }
        catch (ex) { }
        if (!pass)
            throw new Error("Test failed.");
    });
    it("Fail with message should throw with error message", function () {
        try {
            assert_1.default.Fail(failMessage);
            throw "fail";
        }
        catch (ex) {
            checkErrorMessage(ex.message);
        }
    });
});
/*
IsFalse
IsInstanceOfType
IsNotInstanceOfType
IsNotNull
IsNull
IsTrue
Throws
*/ 
//# sourceMappingURL=assert.test.js.map