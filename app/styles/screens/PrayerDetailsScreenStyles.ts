import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentWrapper: {
    height: '100%',
    backgroundColor: '#fff',
  },
  detailsHeader: {
    backgroundColor: '#BFB393',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 17,
    paddingRight: 15,
    paddingLeft: 12,
    paddingBottom: 15,
  },
  titleWrapper: {
    paddingBottom: 23,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 20,
    lineHeight: 30,
    color: '#fff',
  },
  lastPrayedLable: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  decoStick: {
    width: 3,
    height: 22,
    backgroundColor: '#AC5253',
    borderRadius: 10,
  },
  lastPrayedText: {
    fontFamily: 'SFUIText-Regular',
    marginLeft: 10,
    fontSize: 17,
  },
  infoWrapper: {
    borderColor: '#E5E5E5',
    borderTopWidth: 1,
  },
  infoRow: {
    borderColor: '#E5E5E5',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dateAdded: {
    borderColor: '#E5E5E5',
    width: '50%',
    paddingTop: 32,
    paddingBottom: 11,
    paddingLeft: 15,
  },
  dateAddedValue: {
    fontFamily: 'SFUIText-Regular',
    color: '#BFB393',
    fontSize: 22,
    lineHeight: 25,
  },
  dateAddedLable: {
    marginTop: 6,
    fontSize: 13,
  },
  dateAddedOpenFor: {
    color: '#72A8BC',
    fontSize: 13,
  },
  timesPrayedTotal: {
    width: '50%',
    paddingVertical: 27,
    paddingLeft: 15,
  },
  timesPrayedTotalValue: {
    fontFamily: 'SFUIText-Regular',
    color: '#BFB393',
    fontSize: 32,
    lineHeight: 37,
  },
  timesPrayedTotalLable: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 13,
  },
  timesPrayed: {
    width: '50%',
    borderLeftWidth: 1,
    borderColor: '#E5E5E5',
    paddingLeft: 15,
    paddingVertical: 27,
  },
  timesPrayedValue: {
    fontFamily: 'SFUIText-Regular',
    color: '#BFB393',
    fontSize: 32,
    lineHeight: 37,
  },
  timesPrayedLable: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 13,
  },
  membersWrapper: {
    paddingLeft: 14,
    paddingTop: 20,
    paddingBottom: 30,
  },
  membersTitle: {
    fontFamily: 'SFUIText-Medium',
    color: '#72A8BC',
    fontSize: 13,
  },
  memberItemsWrapper: {
    marginTop: 15,
    flexDirection: 'row',
  },
  member: {
    marginRight: 8,
  },
  memberImg: {
    borderRadius: 100,
  },
  addMemberBtn: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: '#BFB393',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentsBody: {},
  commentsTitle: {
    fontFamily: 'SFUIText-Medium',
    color: '#72A8BC',
    fontSize: 13,
    marginLeft: 15,
    marginBottom: 15,
  },
  commentsWrapper: {
    backgroundColor: '#ffffff',
  },
  inputWrapper: {
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    bottom: 0,
  },
  commentsInput: {
    marginLeft: 12,
  },
  goBackBtn: {},
  prayerBtn: {},
});

export default styles;
