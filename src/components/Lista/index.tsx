import Item from './item'
import style from './Lista.module.scss';
import {Props} from '../../types/tarefa'


function Lista({ tarefas }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          ></Item>
        ))}
      </ul>
    </aside>
  )

}


export default Lista;
