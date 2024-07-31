import { defaultAccounts } from '../defaultAccounts.js'
import { defineChain } from '../defineChain.js'

const custom = {
  interlay: {
    btc: 'IBTC',
    native: 'INTR',
    LiquidToken: 1,
  },
  kintsugi: {
    btc: 'KBTC',
    native: 'KINT',
    LiquidToken: 2,
  },
}

const getInitStorages = (config: typeof custom.interlay | typeof custom.kintsugi) => ({
  System: {
    account: [[[defaultAccounts.alice.address], { providers: 1, data: { free: '1000000000000000' } }]],
  },
  Tokens: {
    Accounts: [
      [[defaultAccounts.alice.address, { ForeignAsset: config.LiquidToken }], { free: 100 * 1e12 }],
      [[defaultAccounts.alice.address, { Token: config.native }], { free: 1000 * 1e12 }],
      [[defaultAccounts.alice.address, { Token: config.btc }], { free: 3 * 1e8 }],
    ],
  },
})

export const interlay = defineChain({
  name: 'interlay',
  paraId: 2032,
  endpoint: 'wss://interlay-rpc.dwellir.com',
  custom: custom.interlay,
  initStorages: getInitStorages(custom.interlay),
})

export const kintsugi = defineChain({
  name: 'kintsugi',
  paraId: 2092,
  endpoint: 'wss://kintsugi-rpc.dwellir.com',
  custom: custom.kintsugi,
  initStorages: getInitStorages(custom.kintsugi),
})
