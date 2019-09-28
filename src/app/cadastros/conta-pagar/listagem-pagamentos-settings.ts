export const settingsPagamentos = {
  mode:'external',
  noDataMessage:"Não foi encontrado nenhum registro",
  columns: {
    dataPagamento: {
      title: 'Data',
      filter: true
    },
    formaPagamentoId: {
      title: 'Forma Pagamento',
      filter: true
    },
    valor: {
      title: 'Valor',
      filter: true,
    }
  },  
  actions:
  {
    columnTitle:'',
    add:false,
    delete:false
  },   
  edit: {
    editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>',
  }
  
};