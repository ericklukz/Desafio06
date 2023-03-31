port React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const image = () => {
  const [imagem, setImagens] = useState(require('./galaxia.jpg'));

  const attimg = (image) => {
    setImagens(image);
  }

  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.imagem} />
      <Button title="Galaxia1" onPress={() => attimg(require('./galaxia.jpg'))} />
      <Button title="Galaxia2" onPress={() => attimg(require('./galaxia2.jpg'))} />
      <Button title="Galaxia3" onPress={() => attimg(require('./11c2c96d36e373f32a957c2734ecb8cc.jpg'))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default image;
