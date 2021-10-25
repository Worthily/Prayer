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
    fontFamily: 'SFUIText-Medium',
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
    fontFamily: 'SFUIText-Medium',
    color: '#C8C8C8',
  },
  activeScreenTabText: {
    fontFamily: 'SFUIText-Medium',
    color: '#72A8BC',
  },
  createPrayerInput: {
    fontFamily: 'SFUIText-Regular',
    paddingVertical: 15,
    fontSize: 17,
  },
  createPrayerBtn: {
    fontFamily: 'SFUIText-Regular',
    marginHorizontal: 14,
  },
});

export default styles;
