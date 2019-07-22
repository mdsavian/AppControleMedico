
export const settingsClinica = {
  mode: 'external',
  noDataMessage: "Não foi encontrado nenhum registro",
  columns: {
    razaoSocial: {
      title: 'Razão Social',
      filter: true
    },
    nomeFantasia: {
      title: 'Nome Fantasia',
      filter: true
    },
    cnpj: {
      title: 'CNPJ',
      filter: true
    }
  },
  actions:
  {
    columnTitle: '',
    add: false,
     delete:false,
    edit: false
  }
};
