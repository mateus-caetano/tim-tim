import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Easing,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

const smile = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13C7 13 8.5 15 11 15C13.5 15 15 13 15 13" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8H8.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8H14.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const cam = `<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 11.9091C16 12.2707 15.8563 12.6176 15.6006 12.8733C15.3449 13.1291 14.998 13.2727 14.6364 13.2727H2.36364C2.00198 13.2727 1.65513 13.1291 1.3994 12.8733C1.14367 12.6176 1 12.2707 1 11.9091V4.40909C1 4.04743 1.14367 3.70059 1.3994 3.44485C1.65513 3.18912 2.00198 3.04545 2.36364 3.04545H5.09091L6.45455 1H10.5455L11.9091 3.04545H14.6364C14.998 3.04545 15.3449 3.18912 15.6006 3.44485C15.8563 3.70059 16 4.04743 16 4.40909V11.9091Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.49998 10.5454C10.0062 10.5454 11.2273 9.32432 11.2273 7.81809C11.2273 6.31186 10.0062 5.09082 8.49998 5.09082C6.99375 5.09082 5.77271 6.31186 5.77271 7.81809C5.77271 9.32432 6.99375 10.5454 8.49998 10.5454Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const send = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2547 6.17615L14.9597 8.62438L9.66467 11.0726" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.2547 6.17601L10.1511 18.4431L9.66462 11.0725L4.36442 5.92753L20.2547 6.17601Z" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default function Chat() {
  const Smile = () => <SvgXml xml={smile} height="30" width="30" />;
  const Cam = () => <SvgXml xml={cam} height="30" width="30" />;
  const Send = () => <SvgXml xml={send} height="30" width="30" />;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          position: 'absolute',
          bottom: 70,
          alignSelf: 'center',
          width: '90%',
        }}
      >
        <View
          style={{
            backgroundColor: '#D1D1D1',
            borderRadius: 5,
            marginBottom: 15,
            padding: 15,
            width: '70%',
            alignSelf: 'flex-end',
          }}
        >
          <Text>
            Nossa, gostei muito de conhecer aquele bar ontem. Quando vamos de
            novo?
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#D1D1D1',
            borderRadius: 5,
            marginBottom: 15,
            padding: 15,
            width: '70%',
            alignSelf: 'flex-start',
          }}
        >
          <Text>Pode ser hoje mesmo! hahaha.</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          position: 'absolute',
          bottom: 15,
        }}
      >
        <Smile />

        <TextInput
          style={{
            backgroundColor: '#EDEDED',
            padding: 5,
            paddingHorizontal: 15,
            height: 40,
            width: '70%',
            borderRadius: 20,
          }}
          placeholder="Digite aqui..."
        />

        <Cam />

        <Send />
      </View>
    </View>
  );
}
