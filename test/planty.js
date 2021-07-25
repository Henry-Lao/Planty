const Planty = artifacts.require("./Planty.sol");

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract("Planty", (accounts) => {
  let contract

  before(async () => {
    contract = await Planty.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = contract.address
      assert.notEqual(address, '')
      assert.notEqual(address, 0x0)
      assert.notEqual(address, null)
      assert.notEqual(address. undef)
    })

    it('Name', async() => {
      const name = await contract.name();
      assert.equal(name, 'Planty')
    })

    it('Symbol', async() => {
      const symbol = await contract.symbol();
      assert.equal(symbol, 'PLANTY')
    })
  })

  describe('minting', async () => {
    it("created a new token", async () => {
      const result = await contract.plantBirth();
      assert(result);
    })
  })
});
