import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import UserCard from '../components/UserCard';
import useFetchUsers from '../hooks/useFetchUsers';

const HomeScreen = ({ navigation }) => {
  const { data, loading } = useFetchUsers();
  function renderUserItem(itemData) {
    function pressHandler() {
      navigation.navigate('User Detail', {
        userData: itemData.item,
      });
    }

    return <UserCard user={itemData.item} onPress={pressHandler} />;
  }
  function mapPressHandler() {
    navigation.navigate('User Locations', {
      userData: data.results,
    });
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={'#64b5f6'} />
          </View>
        ) : (
          <FlatList
            data={data.results}
            renderItem={(item, index) => {
              return renderUserItem(item);
            }}
            keyExtractor={item => {
              return item.login.uuid;
            }}
            alwaysBounceVertical={false}
          />
        )}
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={mapPressHandler}>
          <Image
            source={require('../../assets/icons/map.png')}
            style={styles.floatingActionImage}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    margin: 15,
    height: 60,
    backgroundColor: '#64b5f6',
    borderRadius: 100,
  },
  floatingActionImage: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
  },
});
