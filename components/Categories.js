import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="http://links.papareact.com/wru" title="title 1"/>
      <CategoryCard imgUrl="http://links.papareact.com/wru" title="title 2"/>
      <CategoryCard imgUrl="http://links.papareact.com/wru" title="title 3"/>
      <CategoryCard imgUrl="http://links.papareact.com/wru" title="title 4"/>
      <CategoryCard imgUrl="http://links.papareact.com/wru" title="title 5"/>
      <CategoryCard imgUrl="http://links.papareact.com/wru" title="title 6"/>
    </ScrollView>
  );
};

export default Categories;
