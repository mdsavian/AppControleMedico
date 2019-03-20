import { Util } from "../../uteis/Util";

export const settings = {
  mode:'external',
  noDataMessage:"Não foi encontrado nenhum registro",
  columns: {
    nomeCompleto: {
      title: 'Nome',
      filter: true
    },   
    dataAdmissao: {
      title: 'Data De Admissão',
      filter: false,
      valuePrepareFunction: (data) => {return new Util().dataParaString(data) }
    },
    dataDemissao: {
      title: 'Data De Admissão',
      filter: false,
      valuePrepareFunction: (data) => {return new Util().dataParaString(data) }
    },    
    ativo: {
      title: 'Ativo',
      filter: false,
      valuePrepareFunction: (valor) => { return valor === true ? 'Sim' : 'false' }
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