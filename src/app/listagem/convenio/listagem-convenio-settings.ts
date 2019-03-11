export const settings = {
  mode:'external',
  noDataMessage:"Não foi encontrado nenhum registro",
  columns: {
    nomeConvenio: {
      title: 'Nome',
      filter: true
    },
    diasRetorno: {
      title: 'Dias Retorno',
      filter: false
    }
  },  
  actions:
  {
    columnTitle:''
  },
  delete: {
    deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>'
  },
  edit: {
    editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>',
  },
  add:
  {
    addButtonContent: 'Criar Novo'
  }
};