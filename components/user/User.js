import styles from './User.module.scss';
import ArrowIcon from '../icons/arrow';
import Link from 'next/link';

export default function User() {
  const user = null;
  return (
    <div className={styles.container}>
      <div className={styles.rightContent}>
        <div className={styles.profileContainer}>
          <img
            src={user?.photoUrl || 'https://picsum.photos/200/200'}
            className={styles.profilePhoto}
            loading='lazy'
          />
          <span>
            Hello{' '}
            <span style={{ fontWeight: 'normal' }}>
              {user?.name || 'Guest'}
            </span>
          </span>
          <ArrowIcon width={10} height={10} className={styles.arrowIcon} />
          <div className={styles.dropdown}>
            <div className={styles.arrowUp} />
            <div className={styles.dropdownMenu}>
              <span className={styles.description}>
                Connect with one of our available wallet providers.
              </span>
              <hr className={styles.hr1}></hr>
              {user ? (
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
                  <button
                    className={styles.btn}
                    onClick={() => {
                      alert('go metamask');
                    }}
                  >
                    Metamask
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() => {
                      alert('go kaikas');
                    }}
                  >
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
