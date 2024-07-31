import { defaultAccounts } from '../defaultAccounts.js'
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
    account: [[[defaultAccounts.alice.address], { providers: 1, data: { free: '1000000000000000' } }]],
  },
  OrmlTokens: {
    accounts: [[[defaultAccounts.alice.address, config.acalaUsd], { balance: 10 * 1e12 }]],
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
