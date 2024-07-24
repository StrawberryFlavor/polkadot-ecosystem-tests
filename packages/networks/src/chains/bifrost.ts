import { defaultAccount } from '@e2e-test/shared'

import { defineChain } from '../defineChain.js'

const custom = {
  bifrostPolkadot: {
    relayToken: 'DOT',
  },
  bifrost: {
    relayToken: 'KSM',
  },
}

const getInitStorages = (config: typeof custom.bifrostPolkadot | typeof custom.bifrost) => ({
  System: {
    account: [[[defaultAccount.alice.address], { providers: 1, data: { free: '1000000000000000' } }]],
  },
  Tokens: {
    account: [[[defaultAccount.alice.address, config.relayToken], { balance: 10 * 1e12 }]],
  },
})

export const bifrostPolkadot = defineChain({
  name: 'bifrostPolkadot',
  paraId: 2030,
  endpoint: 'wss://hk.p.bifrost-rpc.liebi.com/ws',
  custom: custom.bifrostPolkadot,
  initStorages: getInitStorages(custom.bifrostPolkadot),
})

export const bifrost = defineChain({
  name: 'bifrost',
  paraId: 2001,
  endpoint: 'wss://bifrost-rpc.liebi.com/ws',
  custom: custom.bifrost,
  initStorages: getInitStorages(custom.bifrost),
})
