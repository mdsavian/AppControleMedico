
export const settingsPagamentos = {
  mode: 'external',
  noDataMessage: "Não foi encontrado nenhum registro",
  columns: {
    descricaoPagamento: {
      title: 'Descrição',
      filter: false

    },
    valor: {
      title: 'Valor',
      filter: false
    }
  },
  actions:
  {
    columnTitle: '',
    add: false,
    delete: true,
    edit: false
  }
};
