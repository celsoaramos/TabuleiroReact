import React from 'react'

import styles from '../styles/Subdivisao.module.css'

const Subdivisao = (props: any) => {
  return (
    <div 
      className={styles.subdivisao}
      style={{backgroundColor: props.preta ? 'black' : 'white'}}
    >
      
    </div>
  )
}

export default Subdivisao