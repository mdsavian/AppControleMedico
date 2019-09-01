
export const settingsMedico = {
  mode: 'external',
  noDataMessage: "Não foi encontrado nenhum registro",
  columns: {
    nomeCompleto: {
      title: 'Nome',
      filter: true
    },
    especialida: {
      title: 'Especialidade',
      filter: true
    }
  },
  actions:
  {
    columnTitle: '',
    add: false,
    edit: false
  },
  delete: {
    deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>'
  },
};
