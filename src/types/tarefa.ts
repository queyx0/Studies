export interface Props {
  tarefas: ITarefa[]
}

export interface ITarefa {
  tarefa: string,
  tempo: string
  selecionado: boolean,
  completado: boolean,
  id: string
}