import React from 'react'
import style from "./ButtonInact.module.css"
const ButtonInactComponent = () => {
  return (
    <label className={style.switch}>
    <input type="checkbox"/>
    <span className={style.slider}></span>
  </label>
  )
}

export default ButtonInactComponent