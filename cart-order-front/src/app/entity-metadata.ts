import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from 'src/environments/environment';

const entityMetadata: EntityMetadataMap = {
  Users: {},
  Itens:{},
};



const pluralNames = {Itens : 'itens' , Users: 'users'};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.baseUrl
};
