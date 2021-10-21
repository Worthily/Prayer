import React from 'react';
import { PixelRatio, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  commentBody: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  commentsWrapper: {
    backgroundColor: '#ffffff',
  },
  userImageWrapper: {
    marginRight: 12,
  },
  userImage: {
    borderRadius: 100,
  },
  textWrapper: {},
  commentTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 2,
  },
  userName: {
    fontSize: 17,
    marginRight: 6,
  },
  commentTime: {
    fontSize: 13,
    color: '#9C9C9C',
  },
  commentTextWrapper: {},
  commentsText: {
    fontSize: 17,
  },
});

export default styles;
