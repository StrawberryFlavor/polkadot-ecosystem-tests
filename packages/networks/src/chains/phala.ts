import { defaultAccount } from '@e2e-test/shared'

import { defineChain } from '../defineChain.js'

const custom = {
  phala: {
    aUSDToken: '3',
  },
  khala: {
    aUSDToken: '4',
  },
}

const getInitStorages = (config: typeof custom.phala | typeof custom.khala) => ({
  System: {
    account: [[[defaultAccount.alice.address], { providers: 1, data: { free: '1000000000000000' } }]],
  },
  Assets: {
    account: [[[config.aUSDToken, defaultAccount.alice.address], { balance: 100 * 1e12 }]],
  },
})

export const phala = defineChain({
  name: 'phala',
  paraId: 2035,
  endpoint: 'wss://phala-rpc.dwellir.com',
  custom: custom.phala,
  initStorages: getInitStorages(custom.phala),
})

export const khala = defineChain({
  name: 'khala',
  paraId: 2004,
  endpoint: 'wss://khala-rpc.dwellir.com',
  custom: custom.khala,
  initStorages: getInitStorages(custom.khala),
})
