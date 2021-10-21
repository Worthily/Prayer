import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  prayerWrapper: {
    paddingTop: 19,
    paddingRight: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E5E5E5',
    backgroundColor: '#fff',
  },
  prayerBorder: {
    flexDirection: 'row',
    paddingBottom: 17,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  prayerStick: {
    marginRight: 15,
    width: 3,
    height: 22,
    backgroundColor: '#AC5253',
    borderRadius: 10,
  },
  prayerCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    width: 21,
    height: 21,
    borderWidth: 1,
    borderColor: '#514D47',
    borderRadius: 4,
  },
  prayerTitle: {
    fontSize: 17,
  },
  prayerCheckedTitle: {
    fontSize: 17,
    textDecorationLine: 'line-through',
  },
  userCountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prayersCountWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 18,
  },
  iconsWrapper: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userCount: {
    marginLeft: 5,
  },
  prayersCount: {
    marginLeft: 5,
  },
});

export default styles;
