import { prayersSlice } from '../Prayers/reducer';

export const {
  requestGetPrayers: requestGetPrayersActionCreator,
  responseGetPrayers: responseGetPrayersActionCreator,
  updatePrayerTitle: updatePrayerTitleActionCreator,
  setPrayerChecked: setPrayerCheckedActionCreator,
  deletePrayer: deletePrayerActionCreator,
  requestCreatePrayer: requestCreatePrayerActionCreator,
  responseCreatePrayer: responseCreatePrayerActionCreator,
} = prayersSlice.actions;
