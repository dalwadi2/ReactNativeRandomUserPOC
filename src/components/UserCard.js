import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const UserCard = ({ user, onPress }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#dddddd' }}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <View style={styles.row}>
          <Image source={{ uri: user.picture.medium }} style={styles.pic} />
          <View style={styles.nameContainer}>
            <Text
              style={
                styles.nameTxt
              }>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
            <Text style={styles.emailTxt}>{`${user.email}`}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  pressedItem: {
    opacity: 0.5,
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
  },
  emailTxt: {
    marginLeft: 15,
    fontWeight: '300',
    color: '#222',
    fontSize: 14,
  },
});

export default UserCard;
