export const settings = {
  mode:'external',
  noDataMessage:"Não foi encontrado nenhum registro",
  columns: {
    descricao: {
      title: 'Descrição',
      filter: true
    }
  },  
  actions:
  {
    columnTitle:'',
    edit:null
  },
  delete: {
    deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>'
  },
  add:
  {
    addButtonContent: 'Novo'
  }
};