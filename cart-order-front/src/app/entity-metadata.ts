import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from 'src/environments/environment';

const entityMetadata: EntityMetadataMap = {
  User: {},
  Item:{},
};


const pluralNames = { Item: 'itens' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.baseUrl,
  entityHttpResourceUrls: {
    Item: {
      entityResourceUrl: environment.baseUrl + '/itens',
      collectionResourceUrl: environment.baseUrl + '/itens'
    }
  }
};
