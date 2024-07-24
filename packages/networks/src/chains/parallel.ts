import { defaultAccount } from '@e2e-test/shared'

import { defineChain } from '../defineChain.js'

const custom = {
  parallel: {
    ausd: 104,
    acalaNativeToken: 108,
  },
  heiko: {
    ausd: 103,
    acalaNativeToken: 107,
  },
}

const getInitStorages = (config: typeof custom.parallel | typeof custom.heiko) => ({
  System: {
    account: [[[defaultAccount.alice.address], { providers: 1, data: { free: '1000000000000000' } }]],
  },
  Assets: {
    account: [
      [[config.acalaNativeToken, defaultAccount.alice.address], { balance: 100 * 1e12 }],
      [[config.ausd, defaultAccount.alice.address], { balance: 100 * 1e12 }],
    ],
  },
})

export const parallel = defineChain({
  name: 'parallel',
  paraId: 2012,
  endpoint: 'wss://parallel-rpc.dwellir.com',
  custom: custom.parallel,
  initStorages: getInitStorages(custom.parallel),
})

export const heiko = defineChain({
  name: 'heiko',
  paraId: 2085,
  endpoint: 'wss://heiko-rpc.parallel.fi',
  custom: custom.heiko,
  initStorages: getInitStorages(custom.heiko),
})
