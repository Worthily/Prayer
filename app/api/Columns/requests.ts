import { api } from '..';
import { COLUMNS_LINK } from '../constants';

export async function getColumns() {
  console.log('columns req start');
  return await api.get(COLUMNS_LINK).catch((error) => {
    console.log('columns error');
    return error;
  });
}
