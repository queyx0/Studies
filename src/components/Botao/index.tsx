import React, { PropsWithChildren } from 'react';
import style from './Botao.module.scss'



class Botao extends React.Component<PropsWithChildren <{
  type?: "button" | "submit" | "reset" | undefined
}>>{
  render() {
    const {type = "button"} = this.props
      return (
        <button type={type} className={style.botao}>
          {this.props.children}
        </button>
      )
  }
}

export default Botao

