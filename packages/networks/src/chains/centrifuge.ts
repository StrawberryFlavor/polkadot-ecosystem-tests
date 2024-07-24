import { defaultAccount } from '@e2e-test/shared'

import { defineChain } from '../defineChain.js'

const custom = {
  centrifuge: {
    acalaUsd: 'AUSD',
  },
  altair: {
    acalaUsd: 'KUSD',
  },
}

const getInitStorages = (config: typeof custom.centrifuge | typeof custom.altair) => ({
  System: {
    account: [[[defaultAccount.alice.address], { providers: 1, data: { free: '1000000000000000' } }]],
  },
  OrmlTokens: {
    accounts: [[[defaultAccount.alice.address, config.acalaUsd], { balance: 10 * 1e12 }]],
  },
})

export const centrifuge = defineChain({
  name: 'centrifuge',
  paraId: 2031,
  endpoint: 'wss://fullnode.centrifuge.io',
  custom: custom.centrifuge,
  initStorages: getInitStorages(custom.centrifuge),
})

export const altair = defineChain({
  name: 'altair',
  paraId: 2088,
  endpoint: 'wss://fullnode.altair.centrifuge.io',
  custom: custom.altair,
  initStorages: getInitStorages(custom.altair),
})
