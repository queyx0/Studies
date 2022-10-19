import Item from './item'
import style from './Lista.module.scss';
import {ITarefa} from '../../types/tarefa'

interface Propss {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

function Lista({ tarefas, selecionaTarefa }: Propss) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa ={selecionaTarefa}
            key={item.id}
            {...item}
          ></Item>
        ))}
      </ul>
    </aside>
  )

}


export default Lista;
