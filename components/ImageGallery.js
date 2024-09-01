import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageList from './ImageList';

function ImageGallery() {
  // Estado que contiene un array de imágenes locales con require estático
  const [imageUrls, setImageUrls] = useState([
    {
        title:"Tacos",
        url:'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg'
    },
    {
        title:"Ensalada?",
        url:'https://st1.uvnimg.com/dims4/default/75968c8/2147483647/thumbnail/1024x576/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Faf%2Fe1%2F34c8d9f843b4a2d51fcd42a691d1%2Fcomida-mexicana.jpg',
    },
    {
        title:"Comida rápida",
        url:'https://elikaeskola.com/wp-content/uploads/dieta-parchis-11-1024x683.jpg',
    }
    
  ]);

  return (
    <View style={styles.container}>
      <ImageList images={imageUrls} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageGallery;
