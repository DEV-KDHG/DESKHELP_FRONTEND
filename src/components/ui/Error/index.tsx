import styles from "./Error.module.css"

 
const Error = ({children}:{children:React.ReactNode}) => {
  return (
    < >
      
      <span className={styles.error}>{children}</span>
    </ >
  )
}

export default Error;
