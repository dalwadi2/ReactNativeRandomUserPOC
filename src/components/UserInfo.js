import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UserInfo = ({ label, value }) => {
  return (
    <>
      <Text style={styles.labelText}>{`${label}`}</Text>
      <Text style={styles.valueText}>{`${value}`}</Text>
      <View style={styles.separator} />
    </>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: '#616161',
    fontSize: 16,
    marginStart: 10,
    marginTop: 10,
  },
  valueText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  separator: {
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default UserInfo;
