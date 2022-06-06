const { expect } = require('chai');
const { ethers, artifacts } = require("hardhat");
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// describe('Box', function () {
//   before(async function () {
//     this.Box = await ethers.getContractFactory('Box');
//   })

//   beforeEach(async function () {
//     this.box = await this.Box.deploy();
//     await this.box.deployed();
//   })

//   it('retrieve returns a value  previously stored', async function () {
//     await this.box.store(42);

//     expect((await this.box.retrieve()).toString()).to.equal('42');
//   })
// })

const Box = artifacts.require('Box');

contract('Box', function ([owner, other]) {
  const value = new BN(42);

  beforeEach(async function () {
    this.box = await Box.new({ from: owner });
  })

  it('retrieve returns a value previously stored', async function () {
    await this.box.store(value, { from: owner })
    expect(await this.box.retrieve()).to.be.bignumber.equal(value);
  })

  it('store emits an event', async function () {
    const receipt = await this.box.store(value, { from: owner });
    expectEvent(receipt, 'ValueChanged', { value: value });
  })

  it('non owner cannot store a value', async function () {
    await expectRevert(
      this.box.store(value, { from: other }),
      'Ownalbe: caller is not the owner'
    )
  })
})

