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
      const symbol = await contract.symbol()
      assert.equal(symbol, 'PLANTY')
    })
  })

  describe('minting', async () => {
    it("created a new token", async () => {
      const result = await contract.plantBirth("AA")
      console.log('Result: ', result);
      const event = result.logs[0].args
      console.log('Event: ', event);
      assert.equal(event.tokenId.toNumber(), 1, 'id is correct');
      assert.equal(event.from, '0x00000000000000000000000000000000000', 'from is correct')
      assert.equal(event.to, accounts[0], 'to is correct')
    })
  })
  describe('indexing', async () => {
    it('lists indexes', async () => {
      await contract.plantBirth("AA");
      await contract.plantBirth("AC");
      await contract.plantBirth("AD");

      let ipfsHash
      let result = []
      for (var i = 0; i < 4; i++) {
        ipfsHash = await contract.ipfsHashs(i);
        result.push(ipfsHash);
      }

      console.log('ipfsHashs: ', contract.ipfsHashs)

      let expected = ['AA', 'AB', 'AC','AD']
      assert.equal(result, expected)
    })
  })
})

