import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import {signIn, signOut, useSession} from 'next-auth/react';

export const SignInButton = () => {
  const {data: session} = useSession()
  
  return session ? (
    <button className={styles.signInButton}>
      <FaGithub color="#04D361" />
      Grazi Nascito
      <FiX onClick={() => signOut()} color="#a8a8b3" className={styles.closeIcon} />
    </button>
  ) : (
    <button onClick={() => signIn()} className={styles.signInButton}>
      <FaGithub color="#EBA417" />
      Sing in with GitHub
    </button>
  );
};
