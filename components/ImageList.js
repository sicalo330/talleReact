import React from "react";
import { View, Image, StyleSheet, FlatList, Text } from 'react-native';


function ImageList({ images }) {
    console.log(images[0].url)
  return (
    <View>
        <Text>Lista de imágenes</Text>
        <FlatList 
            data={images}
            renderItem={({item}) => 
            <View>
                <Text>{item.title}</Text>
                <Image 
                    source={{uri:item.url}} 
                    style={{height:200,width:200}} 
                />
            </View>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  imageList: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default ImageList;
