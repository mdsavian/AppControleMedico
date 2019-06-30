import { CorComponent } from "../shared/cor-component";
import { Util } from "../../uteis/Util";

export const settings = {
  mode: 'external',
  noDataMessage: "Não foi encontrado nenhum registro",
  columns: {
    razaoSocial: {
      title: 'Razão Social',
      filter: true
    },
    cnpj: {
      title: 'CNPJ',      
      filter: true,
      valuePrepareFunction: (cnpj)=> {return cnpj === null ? "" : new Util().formataCnpj(cnpj)}
    },
    telefone: {
      title: 'Telefone',
      valuePrepareFunction: (celular)=> {return celular === null ? "" : new Util().formataCelular(celular)}

    },
    ativo: {
      title: 'ativo'
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