import { Util } from "../../uteis/Util";

export const settings = {
  mode: 'external',
  noDataMessage: "Não foi encontrado nenhum registro",
  columns: {
    razaoSocial: {
      title: 'Razão Social',
      filter: true
    },    
    nomeFantasia: {
      title: 'Nome Fantasia',      
      filter: true,
    },    
    cpfCnpj: {
      title: 'CNPJ',      
      filter: true,
      valuePrepareFunction: (cpfCnpj) => { return cpfCnpj === null ? "" : new Util().formataCnpj(cpfCnpj) }
    },
    inscricaoMunicipal: {
      title: 'Inscrição Municipal',      
      filter: true,
    },
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