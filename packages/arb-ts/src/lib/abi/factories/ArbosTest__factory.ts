/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { ArbosTest, ArbosTestInterface } from '../ArbosTest'

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'gasAmount',
        type: 'uint256',
      },
    ],
    name: 'burnArbGas',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'getAccountInfo',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'getMarshalledStorage',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isEOA',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'code',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'initStorage',
        type: 'bytes',
      },
    ],
    name: 'installAccount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class ArbosTest__factory {
  static readonly abi = _abi
  static createInterface(): ArbosTestInterface {
    return new utils.Interface(_abi) as ArbosTestInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbosTest {
    return new Contract(address, _abi, signerOrProvider) as ArbosTest
  }
}