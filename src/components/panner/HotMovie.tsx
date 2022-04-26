import { ActivityIndicator, Button, FlatList, Image, RefreshControl, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hook'
import { SafeAreaView } from 'react-native-safe-area-context';
import {SearchIcon} from '@assets/images/index';
import Fonts from '@assets/fonts/index'

// import { actionRequestPage, MovieInfor, ActionRefeshData} from './slice';

const PannerHotMovie = ({ route, navigation, ...props }: any) => {
  const page = useAppSelector(state => state.pages);
  const dispath = useAppDispatch();

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);

  const data = [
    {
      id: 1,
      path: '../../assets/images/HotView1.png'
    },
    {
      id: 2,
      path: '../../assets/images/HotView2.png'
    },
  ]

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={styles.renderItem}>
        <TouchableHighlight
          key={item.id}
          onPress={() => { }}>
          <View>
            {/* <FastImage source={require(item.path)}/> */}
            <Image source={require(`../../assets/images/HotView2.png`)}/>
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
    <SafeAreaView style={styles.controler}>
      <View style={styles.viewSearch}>
        <Text style={{fontSize: 24, fontFamily: Fonts.defaultHelvetica, color: '#212121', letterSpacing: 0}}>MOVIEWS</Text>
        <SearchIcon isChecked={true}/>

      </View>
      <FlatList
        ItemSeparatorComponent={
          ({ highlighted }) => (<View style={[styles.itemSeparatorComponent]} />)
        }
        data={data}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        pagingEnabled
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        // onEndReached={handlLoadMore}
        // onEndReachedThreshold={0}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //   // onRefresh={onRefresh}
        //   />
        // }
        ListFooterComponent={renderFooterItem} />
    </SafeAreaView>
  )

}

export default PannerHotMovie

const styles = StyleSheet.create({
  controler: {
    flexDirection: 'column',
    flex:1,
  },
  renderItem: {
    borderRadius: 6,
  },
  viewSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  itemSeparatorComponent: {
    height: 2,
    backgroundColor: '#CED0CE',
  },

  viewContent: {
    fontWeight: '400',
  },
  viewFlatList:{
    marginLeft: '5%'
  },
  loader: {
    marginTop: 10,
    alignItems: "center",
  }
})