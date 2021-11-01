const SimpleStorage = artifacts.require("SimpleStorage");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function (accounts) {
  it("should assert true", async function () {
    await SimpleStorage.deployed();
    return assert.isTrue(true);
  });

  it("should have initial value of 0", async () => {
    const ssInstance = await SimpleStorage.deployed();
    const storedData = await ssInstance.getStoredData.call();
    const storedData2 = await ssInstance.storedData.call();
    assert.equal(storedData, 0, 'Initial state should be zero');
    assert.equal(storedData2, 0, 'Initial state should be zero');
  });

  describe("Functionality", () => {
    it("should store a new value", async () => {
      const ssInstance = await SimpleStorage.deployed();
      await ssInstance.setStoredData(42, {from: accounts[0]});
      const storedData = await ssInstance.getStoredData.call();
      assert.equal(storedData, 42, 'Initial state should be zero');

      //await ssInstance.storedData.call(43);
      const storedData2 = await ssInstance.storedData.call();
      assert.equal(storedData2, 42, 'Initial state should be zero');
    });

    it("should not let someone else change the variable"), async () => {
      const [owner, badJoe] = accounts;

      /*const ssInstance = await SimpleStorage.deployed();

      await ssInstance.setStoredData(22, {from: badJoe}); //accounts[1]

      try{
        
      } catch (err) {}

      const storedData = await ssInstance.getStoredData();*/
      assert.equal(42, 42, 'Initial state should be zero');

    }
  })

});
