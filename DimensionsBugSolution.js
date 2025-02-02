```javascript
import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = result => {
      setScreenDimensions(result.window);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <View>
      <Text>Width: {screenDimensions.width}</Text>
      <Text>Height: {screenDimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;
```