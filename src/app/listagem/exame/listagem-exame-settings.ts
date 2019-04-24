import { CorComponent } from "../shared/cor-component";

export const settings = {
  mode: 'external',
  noDataMessage: "Não foi encontrado nenhum registro",
  columns: {
    descricao: {
      title: 'Descrição',
      filter: true
    },
    cor: {
      title: 'Cor',
      type: "custom",
      filter: false,
      renderComponent: CorComponent,
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
    addButtonContent: 'Criar Novo'
  }
};