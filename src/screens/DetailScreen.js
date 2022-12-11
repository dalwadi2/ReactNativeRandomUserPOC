import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { format } from 'date-fns';
import UserInfo from '../components/UserInfo';

const DetailScreen = ({ navigation, route }) => {
  let user = route.params.userData;
  var date = new Date(user.dob.date);
  var formattedDate = format(date, 'MMM dd, yyyy');

  return (
    <>
      <View style={styles.container}>
        <Image source={{ uri: user.picture.large }} style={styles.pic} />
        <Text
          style={
            styles.name
          }>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
        <View style={styles.cardView}>
          <ScrollView>
            <UserInfo label={'Gender'} value={user.gender} />
            <UserInfo label={'Date Of Birth'} value={formattedDate} />
            <UserInfo label={'Email'} value={user.email} />
            <UserInfo label={'Cell'} value={user.cell} />
            <UserInfo label={'Phone'} value={user.phone} />
            <UserInfo
              label={'Address'}
              value={`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}
            />
            <UserInfo
              label={'Timezone'}
              value={user.location.timezone.description}
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    borderRadius: 60,
    width: 120,
    height: 120,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#64b5f6',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    alignSelf: 'center',
  },

  cardView: {
    flex: 1,
    margin: 16,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
});

export default DetailScreen;
