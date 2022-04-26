import { ActivityIndicator, Button, FlatList, RefreshControl, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hook'
import { actionRequestPage, MovieInfor, ActionRefeshData } from './slice';
import CardsMovie from '@components/cards/Movie';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fonts from '@assets/fonts';


const Page = ({ route, navigation, ...props }: any) => {
  const page = useAppSelector(state => state.pages);
  const dispath = useAppDispatch();
  const [numberPage, setNumberPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  //parameter form screen
  // const {paramPage, otherParam} = route?.params
  // console.log('Page ' + numberPage);



  useEffect(() => {
    dispath(actionRequestPage(numberPage));
  }, [numberPage])

  let handlLoadMore = () => {
    if (page.loading == false) {
      setNumberPage(numberPage + 1);
    }
  }


  const fetchData = () => {
    let action: ActionRefeshData = {
      type: "REFESH_DATA",
      payload: {},
    }
    dispath(action);
    setNumberPage(numberPage + 1);
    setRefreshing(false);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const renderItem = ({ item, index }: any) => {
    let movieInfor: MovieInfor = item;
    return ( // setting "noImplicitAny": false turn off notification set type
      <View style={styles.controler}>
        <TouchableHighlight
          key={movieInfor.id.toString() + index}
          onPress={() => { }}>
          <View>
            <CardsMovie movieInfor={movieInfor} />
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  const renderFooterItem = () => {
    return (page.loading ?
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View> : null
    )
  }


  return (
    <SafeAreaView style={{ marginHorizontal: '5%' }}>
      <Text style={styles.title}>Popular list</Text>
      <FlatList
        style={{backgroundColor: "red"}}
        ItemSeparatorComponent={
          ({ highlighted }) => (<View style={[styles.itemSeparatorComponent]} />)
        }
        data={page.data.results}
        keyExtractor={item => item.id.toString() + Date.now()}
        horizontal={false}
        pagingEnabled
        renderItem={renderItem}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        onEndReached={handlLoadMore}
        onEndReachedThreshold={0}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
          // onRefresh={onRefresh}
          />
        }
        ListFooterComponent={renderFooterItem} />
      {/* <Button title="Go back" onPress={() => props.navigation.goBack()} />
    <Button
        onPress={() => {
            navigation.setParams({
                otherParam: 'Set Param Success',
              });
        }}
        title="Set Param"
    />
    <Button
      title="Update the title"
      onPress={() => navigation.setOptions({ title: 'Updated!' })}
    /> */}
    </SafeAreaView>
  )

}

export default Page

const styles = StyleSheet.create({
  title:{
    fontFamily: Fonts.defaultHelvetica,
    fontSize: 20,
    color: "#666666",
    letterSpacing: -0.12
  },
  flastList: {
  },
  controler: {
    width: "50%",
  },

  itemSeparatorComponent: {
    height: 2,
    backgroundColor: '#CED0CE',
  },

  viewContent: {
    fontWeight: '400',
  },

  loader: {
    marginTop: 10,
    alignItems: "center",
  }
})