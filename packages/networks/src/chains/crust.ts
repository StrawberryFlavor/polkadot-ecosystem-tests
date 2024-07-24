import { defaultAccount } from '@e2e-test/shared'

import { defineChain } from '../defineChain.js'

const custom = {
  crustPolkadot: {},
  crust: {},
}

const getInitStorages = () => ({
  System: {
    account: [[[defaultAccount.alice.address], { providers: 1, data: { free: '1000000000000000' } }]],
  },
})

export const crustPolkadot = defineChain({
  name: 'crustPolkadot',
  paraId: 2008,
  endpoint: 'wss://crust-parachain.crustapps.net',
  custom: custom.crustPolkadot,
  initStorages: getInitStorages(),
})

export const crust = defineChain({
  name: 'crust',
  paraId: 2012,
  endpoint: 'wss://rpc-shadow.crust.network/',
  custom: custom.crust,
  initStorages: getInitStorages(),
})
