import { defaultAccount } from '@e2e-test/shared'

import { defineChain } from '../defineChain.js'

const custom = {
  darwinia: {},
  crab: {},
}

const getInitStorages = () => ({
  System: {
    account: [[[defaultAccount.alice.address], { providers: 1, data: { free: '1000000000000000' } }]],
  },
})

export const darwinia = defineChain({
  name: 'darwinia',
  paraId: 2046,
  endpoint: 'wss://darwinia-rpc.dwellir.com',
  custom: custom.darwinia,
  initStorages: getInitStorages(),
})

export const crab = defineChain({
  name: 'crab',
  paraId: 2105,
  endpoint: 'wss://crab-rpc.darwinia.network',
  custom: custom.crab,
  initStorages: getInitStorages(),
})
