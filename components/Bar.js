import Link from "next/link";
import styles from "../styles/Navbar.module.css";
export default function Bar(){
return (
<nav className={styles.nav}>
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/counter">Counter</Link>
</nav>
);
}