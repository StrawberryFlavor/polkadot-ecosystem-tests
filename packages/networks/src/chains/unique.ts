import { defaultAccount } from '@e2e-test/shared'

import { defineChain } from '../defineChain.js'

const custom = {
  unique: {},
  quartz: {},
}

const getInitStorages = () => ({
  System: {
    account: [[[defaultAccount.alice.address], { providers: 1, data: { free: '1000000000000000' } }]],
  },
})

export const unique = defineChain({
  name: 'unique',
  paraId: 2037,
  endpoint: 'wss://ws.unique.network',
  custom: custom.unique,
  initStorages: getInitStorages(),
})

export const quartz = defineChain({
  name: 'quartz',
  paraId: 2095,
  endpoint: 'wss://ws-quartz.unique.network',
  custom: custom.quartz,
  initStorages: getInitStorages(),
})
