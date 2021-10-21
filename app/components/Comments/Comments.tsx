import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, Pressable, Image } from 'react-native';
import styles from '../../styles/components/CommentStyles';
import Swipeout from 'react-native-swipeout';
import { deleteCommentActionCreator } from '../../store/saga/Comments/actions';
import { useDispatch } from 'react-redux';

function Comment(props: { id: number; commentText: string; imgUrl: string }) {
  const dispatch = useDispatch();

  const dellBtn = [
    {
      text: 'Delete',
      backgroundColor: '#AC5253',
      onPress: () => {
        console.log('dell');
        dispatch(deleteCommentActionCreator({ id: props.id }));
      },
    },
  ];

  return (
    <Swipeout key={props.id} style={styles.commentsWrapper} right={dellBtn}>
      <View style={styles.commentBody}>
        <View style={styles.userImageWrapper}>
          <Image
            style={styles.userImage}
            source={require('../../assets/images/image.png')}
          />
        </View>
        <View style={styles.textWrapper}>
          <View style={styles.commentTitle}>
            <Text style={styles.userName}>unknown</Text>
            <Text style={styles.commentTime}>2 fucking years ago</Text>
          </View>
          <View style={styles.commentTextWrapper}>
            <Text style={styles.commentsText}>{props.commentText}</Text>
          </View>
        </View>
      </View>
    </Swipeout>
  );
}

export default Comment;
