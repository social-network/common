// Copyright 2017-2018 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import mnemonicGenerate from './generate';
import mnemonicToSeed from './toSeed';
import mnemonicValidate from './validate';

/**
 * @summary Create valid mnemonic strings, validate them using BIP39, and convert them to valid seeds
 */
export {
  mnemonicGenerate,
  mnemonicToSeed,
  mnemonicValidate
};