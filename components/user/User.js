import styles from './User.module.scss';
import ArrowIcon from '../icons/arrow';
import { kaikasConnect } from '../../actions/auth/kaikas';
import { useState } from 'react';

export default function User() {
  const user = null;
  const [displayAddr, setDisplayAddr] = useState('');
  const [address, setAddress] = useState('');
  const [network, setNetwork] = useState('');

  const connectKaikasWallet = async () => {
    user = await kaikasConnect();
    console.log(`account : ${user.account}, network : ${user.network}`);
    setAddress(user.account);
    setNetwork(user.network);

    console.log(user.account.length);
    displayAddr = `${user.account.substr(0, 4)}...${user.account.substr(
      user.account.length - 4,
      user.account.length
    )}`;
    setDisplayAddr(displayAddr);
    console.log(`display addr : ${displayAddr}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.rightContent}>
        <div className={styles.profileContainer}>
          <img
            src={user?.photoUrl || 'https://picsum.photos/200/200'}
            className={styles.profilePhoto}
            loading='lazy'
          />

          {address ? (
            <span style={{ fontWeight: 'normal' }}>{displayAddr}</span>
          ) : (
            <span>
              Hello {''}
              <span style={{ fontWeight: 'normal' }}>Guest</span>
            </span>
          )}

          <ArrowIcon width={10} height={10} className={styles.arrowIcon} />
          <div className={styles.dropdown}>
            <div className={styles.arrowUp} />
            <div className={styles.dropdownMenu}>
              {address ? (
                <>
                  <button
                    className={styles.btn}
                    onClick={() => {
                      alert('go logout');
                    }}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <span className={styles.description}>
                    Connect with one of our available wallet providers.
                  </span>
                  <hr className={styles.hr1}></hr>
                  <button
                    className={styles.btn}
                    onClick={() => {
                      alert('go metamask');
                    }}
                  >
                    Metamask
                  </button>
                  <button className={styles.btn} onClick={connectKaikasWallet}>
                    Kaikas
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() => {
                      alert('go klip');
                    }}
                  >
                    Klip
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
