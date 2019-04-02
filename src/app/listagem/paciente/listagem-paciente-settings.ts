import { Util } from "../../uteis/Util";

export const settings = {
  mode:'external',
  noDataMessage:"Não foi encontrado nenhum registro",
  columns: {
    nomeCompleto: {
      title: 'Nome',
      filter: true
    },
    celular: {
      title: 'Celular',
      filter: false,
      valuePrepareFunction: (celular)=> {return celular === null ? "" : new Util().formataCelular(celular)}
    },
    convenio: {
      title: 'Convênio',
      filter: true,
      valuePrepareFunction: (convenio) => { return convenio === null ? "" : convenio.nomeConvenio} 
    },    
    numeroCartao: {
      title: 'Cartão',
      filter: false
    },
    tipoPlano:
    {
      title:"Tipo Plano",
      filter:true
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