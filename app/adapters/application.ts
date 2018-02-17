import DS from 'ember-data';
import fetch from 'fetch';
import AdapterFetch, {serializeQueryParams} from 'ember-fetch/mixins/adapter-fetch';

export default class Application extends DS.JSONAPIAdapter.extend(AdapterFetch, {}) {
}


// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data' {
  interface AdapterRegistry {
    'application': Application;
  }
}
