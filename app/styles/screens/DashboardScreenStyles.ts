import React from 'react';
import { PixelRatio, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: '#fff',
    paddingLeft: 15,
  },
  header: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 15,
  },
  screenTitle: {
    marginVertical: 22,
    fontSize: 17,
    lineHeight: 20,
    marginRight: '36%',
  },
  settingsBtn: {},
  tabWrapper: {
    flexDirection: 'row',
    width: '100%',
  },
  screenTab: {
    alignItems: 'center',
    width: '50%',
    fontSize: 13,
    paddingVertical: 17,
  },
  activeScreenTab: {
    alignItems: 'center',
    width: '50%',
    fontSize: 13,
    paddingVertical: 17,
    borderBottomColor: '#72A8BC',
    borderBottomWidth: 1,
    color: '#72A8BC',
  },
  screenTabText: {
    color: '#C8C8C8',
  },
  activeScreenTabText: {
    color: '#72A8BC',
  },
  createPrayerInput: {
    paddingVertical: 15,
    fontSize: 17,
  },
  createPrayerBtn: {
    marginHorizontal: 14,
  },
});

export default styles;
