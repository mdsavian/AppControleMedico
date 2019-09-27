export const settings = {
  mode: 'external',
  noDataMessage: "Não foi encontrado nenhum registro",
  columns: {
    nomeFornecedor: {
      title: 'Fornecedor',
      filter: true
    },
    dataEmissao: {
      title: 'Data Emissão',
      filter: true
    },
    numeroFatura: {
      title: 'Número',
      filter: true
    },
    tipoContaPagar: {
      title: 'Tipo Conta',
      filter: true
    },
     valor: {
      title: 'Valor',
      filter: true
    },
     saldo: {
      title: 'Saldo',
      filter: true
    }
  },
  actions:
  {
    columnTitle: ''
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
    addButtonContent: 'Novo'
  }
};