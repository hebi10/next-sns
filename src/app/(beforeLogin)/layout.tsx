import {ReactNode} from "react";
import styles from "@/app/(beforeLogin)/layout.module.css"

type Props = { children: ReactNode, modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  )
}