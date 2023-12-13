import React from 'react'
import Subdivisao from './Subdivisao'

import styles from "../styles/Linha.module.css"

const Linha = (props: any) => {
  return (
    <div className={styles.linha}>
      <Subdivisao preta={props.preta} />
      <Subdivisao preta={!props.preta} />
      <Subdivisao preta={props.preta} />
      <Subdivisao preta={!props.preta} />
      <Subdivisao preta={props.preta} />
      <Subdivisao preta={!props.preta} />
      <Subdivisao preta={props.preta} />
      <Subdivisao preta={!props.preta} />
    </div>
  )
}

export default Linha