import { Util } from "../../uteis/Util";

export const settings = {
  mode:'external',
  noDataMessage:"Não foi encontrado nenhum registro",
  columns: {
    nomeCompleto: {
      title: 'Nome Medico',
      filter: true
    },
    email: {
      title: 'Email',
      filter: true
    },
    celular: {
      title: 'Celular',
      filter: false,
      valuePrepareFunction: (celular)=> {return celular === null ? "" : new Util().formataCelular(celular)}
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