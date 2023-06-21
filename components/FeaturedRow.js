import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description, featuredCategory}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text>{title}</Text>   
            <ArrowRightIcon color="#00CCBB"   />
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingHorizontal:15,
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >
            <RestaurantCard
                id='123'
                imgUrl="http://links.papareact.com/wru"
                title="coolRestaurant"
                rating={4.5}
                genre="italian"
                address='bad stoine'
                short_description="cool restaurant serving this restaurant and its associated services and services"
                dishes={[]}
                long={23412341234}
                lat={123412341234123}
            />
            <RestaurantCard
                id='123'
                imgUrl="http://links.papareact.com/wru"
                title="coolRestaurant"
                rating={4.5}
                genre="italian"
                address='bad stoine'
                short_description="cool restaurant serving this restaurant and its associated services and services"
                dishes={[]}
                long={23412341234}
                lat={123412341234123}
            />
            <RestaurantCard
                id='123'
                imgUrl="http://links.papareact.com/wru"
                title="coolRestaurant"
                rating={4.5}
                genre="italian"
                address='bad stoine'
                short_description="cool restaurant serving this restaurant and its associated services and services"
                dishes={[]}
                long={23412341234}
                lat={123412341234123}
            />
            <RestaurantCard
                id='123'
                imgUrl="http://links.papareact.com/wru"
                title="coolRestaurant"
                rating={4.5}
                genre="italian"
                address='bad stoine'
                short_description="cool restaurant serving this restaurant and its associated services and services"
                dishes={[]}
                long={23412341234}
                lat={123412341234123}
            />
        </ScrollView>
      
    </View>
  )
}

export default FeaturedRow