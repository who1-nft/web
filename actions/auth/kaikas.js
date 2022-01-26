import React, { useState } from 'react';
import Caver from 'caver-js';

export const kaikasConnect = async () => {
  const account = await loadAccountInfo();
  const network = await setNetworkInfo();
  const user = {
    account: account,
    network: network,
  };
  return user;
};

const loadAccountInfo = async () => {
  const { klaytn } = window;
  const account = null;
  if (klaytn) {
    try {
      await klaytn.enable();
      account = await setAccountInfo(klaytn);
      klaytn.on('accountsChanged', () => setAccountInfo(klaytn));
      return account;
    } catch (error) {
      const msg = 'User denied account access';
      console.log(msg);
      alert(msg);
    }
  } else {
    const msg =
      'Non-Kaikas browser detected. You should consider trying Kaikas!';
    console.log(msg);
    alert(msg);
  }
  return account;
};

const setAccountInfo = async () => {
  const { klaytn } = window;
  if (klaytn === undefined) return;

  const account = klaytn.selectedAddress;
  const caver = new Caver(window.klaytn);
  const balance = await caver.klay.getBalance(account);

  console.log(`address : ${account}`);
  console.log(`balance : ${caver.utils.fromPeb(balance, 'KLAY')}`);
  return account;
};

const setNetworkInfo = () => {
  const { klaytn } = window;
  if (klaytn === undefined) return;

  const network = klaytn.networkVersion;
  console.log(`network : ${network}`);
  klaytn.on('networkChanged', () => setNetworkInfo(klaytn.networkVersion));
};
