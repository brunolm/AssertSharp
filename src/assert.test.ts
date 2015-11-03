import Assert from "./assert";

const failMessage = "7dcd58bb-49c1-401d-bc78-e3dcdb9c088c";
const objA = { x: 1 };
const objB = { x: 1 };
const arrA = [1, 2, 3];
const arrB = [1, 2, 3];
const arrC = [5, 6];
const arrD = [5, 6, 7];

function checkErrorMessage(errorMessage: string): void
{
	if (errorMessage.indexOf(failMessage) === -1)
		throw new Error("Test failed."); 
}

describe("Assert.AreEqual", () =>
{
	it("Values are equal should pass", () =>
	{
		Assert.AreEqual(0, 0);
	});
	
	it("Values are not equal should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.AreEqual(0, 1);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Values are not equal should throw with error message", () =>
	{
		var result = true;
		
		try
		{
			Assert.AreEqual(0, 1, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
});

describe("Assert.AreNotEqual", () =>
{
	it("Values are not equal should pass", () =>
	{
		Assert.AreNotEqual(0, 1);
	});
	
	it("Values are equal should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.AreNotEqual(0, 0);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Values are equal should throw with error message", () =>
	{
		var result = true;
		
		try
		{
			Assert.AreNotEqual(0, 0, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
});

describe("Assert.AreNotSame", () =>
{
	it("Values are not same should pass", () =>
	{
		Assert.AreNotSame(objA, objB);
	});
	
	it("Values are same should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.AreNotSame(objA, objA);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Values are same should throw with error message", () =>
	{
		var result = true;
		
		try
		{
			Assert.AreNotSame(objA, objA, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}			
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Values are not references should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.AreNotSame(0, 1);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
});

describe("Assert.AreSequenceEqual", () =>
{
	it("Values are sequence equal should pass", () =>
	{
		Assert.AreSequenceEqual(arrA, arrB);
	});
	
	it("Values are not sequence equal shoud throw", () =>
	{
		var result = true;
		
		try
		{		
			Assert.AreSequenceEqual(arrA, arrD);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
			throw new Error("Test failed.");
	});
	
	it("Values are not sequence equal should throw", () =>
	{
		var result = true;
		
		try
		{		
			Assert.AreSequenceEqual(arrA, arrD);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
			throw new Error("Test failed.");
	});
	
	it("Values are different length should throw", () =>
	{
		var result = true;
		
		try
		{		
			Assert.AreSequenceEqual(arrA, arrC);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
			throw new Error("Test failed.");
	});
	
	it("Values are not sequence equal should throw with error message", () =>
	{
		var result = true;
		
		try
		{		
			Assert.AreSequenceEqual(arrA, arrC, null, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}			
		
		if (!result)
			throw new Error("Test failed.");
	});
});

describe("Assert.Fail", () =>
{
	it("Fail should throw", () =>
	{
		var pass = true;
		try
		{
			Assert.Fail();
			pass = false;
		}
		catch (ex) { }
		
		if (!pass)
			throw new Error("Test failed.");
	});
	
	it("Fail with message should throw with error message", () =>
	{
		try
		{
			Assert.Fail(failMessage);
			throw "fail";
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}
	});
});

describe("Assert.IsFalse", () =>
{
	it("Value false should pass", () =>
	{
		Assert.IsFalse(false);
	});
	
	it("Value true should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsFalse(true);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Value true should throw with error message", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsFalse(true, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
});


describe("Assert.IsInstanceOfType", () =>
{
	it("Value same type should pass", () =>
	{
		Assert.IsInstanceOfType(new Date(), Date);
	});
	
	it("Value different type should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsInstanceOfType(false, Date);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Value different type should throw with error message", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsInstanceOfType(false, Date, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
});

describe("Assert.IsNotInstanceOfType", () =>
{
	it("Value different type should pass", () =>
	{
		Assert.IsNotInstanceOfType(true, Date);
	});
	
	it("Value same type should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsNotInstanceOfType(new Date(), Date);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Value same type should throw with error message", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsNotInstanceOfType(new Date(), Date, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
});

describe("Assert.IsNotNull", () =>
{
	it("Value not null should pass", () =>
	{
		Assert.IsNotNull(true);
	});
	
	it("Value null should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsNotNull(null);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Value null should throw with error message", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsNotNull(null, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
});

describe("Assert.IsNull", () =>
{
	it("Value null should pass", () =>
	{
		Assert.IsNull(null);
	});
	
	it("Value not null should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsNull(true);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Value not null should throw with error message", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsNull(true, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
});

describe("Assert.IsTrue", () =>
{
	it("Value true should pass", () =>
	{
		Assert.IsTrue(true);
	});
	
	it("Value false should throw", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsTrue(false);
			result = false;
		}
		catch (ex) { }
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
	
	it("Value false should throw with error message", () =>
	{
		var result = true;
		
		try
		{
			Assert.IsTrue(false, failMessage);
			result = false;
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
		}
		
		if (!result)
		{
			throw new Error("Test failed.");
		}
	});
});

describe("Assert.Throws", () =>
{
	it("Throws should throw", () =>
	{
		var pass = false;
		try
		{
			Assert.Throws(() => { throw new Error(failMessage); });
			pass = true;
		}
		catch (ex) { }
		
		if (!pass)
			throw new Error("Test failed.");
	});
	
	it("Throws without throwing should fail", () =>
	{
		var pass = false;
        
		try
		{
			Assert.Throws(() => { });
		}
		catch (ex)
		{
			pass = true;
		}
        
		if (!pass)
			throw new Error("Test failed.");
	});
    
	it("Fail with message should throw with error message", () =>
	{
		var pass = false;

		try
		{
			Assert.Throws(() => { }, failMessage);
		}
		catch (ex)
		{
			checkErrorMessage(ex.message);
			pass = true;
		}
        
		if (!pass)
			throw new Error("Test failed.");
	});
});