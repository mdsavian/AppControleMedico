
export const settingsConvenio = {
  mode:'external',
  noDataMessage:"Não foi encontrado nenhum registro",
  columns: {
    descricao: {
      title: 'Descrição',
      filter: true
    },
    diasRetorno: {
      title: 'Retorno',
      filter: true
    }
  },  
  actions:
  {
    columnTitle:'',    
    add:false,
    delete:false,
    edit:false
  }  
};