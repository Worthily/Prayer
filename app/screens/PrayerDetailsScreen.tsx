import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, useRoute } from '@react-navigation/native';
import { authScreenProp, PrayerDetailsRouteProps, State } from '../types';
import styles from '../styles/screens/PrayerDetailsScreenStyles';
import GoBackBtn from '../assets/svg/back.svg';
import PrayerBtn from '../assets/svg/Union.svg';
import AddBtn from '../assets/svg/whiteAdd.svg';
import CommentBtn from '../assets/svg/comment.svg';
import Comment from '../components/Comments';
import { useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import CommentTextInput from '../components/CommentTextInput';
import { useDispatch } from 'react-redux';
import { requestCreateCommentActionCreator } from '../store/saga/Comments/actions';

function PrayerDetails() {
  const navigation = useNavigation<authScreenProp>();
  const route = useRoute<PrayerDetailsRouteProps>();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ body: '' });
  const commentsData = useSelector((state: State) => state.comments);
  const prayerData = useSelector((state: State) => {
    return state.prayers.find((item) => item.id == route.params.id);
  });

  const comments = commentsData.map((item) => {
    if (item.prayerId == route.params.id) {
      return (
        <Comment
          key={item.id}
          id={item.id}
          commentText={item.body}
          imgUrl={'../../assets/images/image.png'}
        />
      );
    }
  });

  function onSubmit() {
    console.log('clicked add prauer ' + formState.body);
    dispatch(
      requestCreateCommentActionCreator({
        id: route.params.id,
        body: formState.body,
      }),
    );
    setFormState({ body: '' });
  }

  return (
    <ScrollView>
      <KeyboardAwareScrollView
        style={{ backgroundColor: '#4c69a5' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.detailsHeader}>
            <View style={styles.buttonsWrapper}>
              <Pressable
                style={styles.goBackBtn}
                onPress={() => {
                  navigation.goBack();
                }}>
                <GoBackBtn width="18" height="16" />
              </Pressable>
              <Pressable style={styles.prayerBtn}>
                <PrayerBtn width="29" height="29" />
              </Pressable>
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                {prayerData ? prayerData.title : 'error'}
              </Text>
            </View>
          </View>
          <View style={styles.lastPrayedLable}>
            <View style={styles.decoStick}></View>
            <Text style={styles.lastPrayedText}>Last prayed 8 min ago</Text>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.infoRow}>
              <View style={styles.dateAdded}>
                <Text style={styles.dateAddedValue}>July 25 2017</Text>
                <Text style={styles.dateAddedLable}>Date Added</Text>
                <Text style={styles.dateAddedOpenFor}>Opened for 4 days</Text>
              </View>
              <View style={styles.timesPrayed}>
                <Text style={styles.timesPrayedValue}>123</Text>
                <Text style={styles.timesPrayedLable}>Times Prayed Total</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.timesPrayedTotal}>
                <Text style={styles.timesPrayedTotalValue}>63</Text>
                <Text style={styles.timesPrayedTotalLable}>
                  Times Prayed by Me
                </Text>
              </View>
              <View style={styles.timesPrayed}>
                <Text style={styles.timesPrayedValue}>60</Text>
                <Text style={styles.timesPrayedLable}>
                  Times Prayed by Others
                </Text>
              </View>
            </View>
            <View style={styles.membersWrapper}>
              <Text style={styles.membersTitle}>MEMBERS</Text>
              <View style={styles.memberItemsWrapper}>
                <View style={styles.member}>
                  <Image
                    style={styles.memberImg}
                    source={require('../assets/images/eeww.png')}
                  />
                </View>
                <View style={styles.member}>
                  <Image
                    style={styles.memberImg}
                    source={require('../assets/images/erfer.png')}
                  />
                </View>
                <Pressable style={styles.addMemberBtn}>
                  <AddBtn />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.commentsBody}>
            <Text style={styles.commentsTitle}>COMMENTS</Text>
            <View style={styles.commentsWrapper}>{comments}</View>
          </View>
          <View style={styles.inputWrapper}>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <>
                  <Pressable onPress={handleSubmit}>
                    <CommentBtn />
                  </Pressable>

                  <Field
                    name="title"
                    component={CommentTextInput}
                    style={styles.commentsInput}
                    onChangeText={(val: string) => {
                      setFormState({ body: val });
                    }}
                  />
                </>
              )}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}

export default PrayerDetails;
