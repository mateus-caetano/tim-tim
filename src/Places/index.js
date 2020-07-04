import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

const width = Dimensions.get('window').width - 20;

const search = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0078 9.68207C11.7459 8.67409 12.1874 7.43596 12.1874 6.09374C12.1874 2.73377 9.45368 0 6.09371 0C2.73374 0 0 2.73377 0 6.09374C0 9.45371 2.73377 12.1875 6.09374 12.1875C7.43596 12.1875 8.6742 11.7459 9.68219 11.0078L13.6743 14.9999L15 13.6742L11.0078 9.68207ZM6.09374 10.3125C3.76738 10.3125 1.87501 8.42009 1.87501 6.09374C1.87501 3.76738 3.76738 1.87501 6.09374 1.87501C8.42009 1.87501 10.3125 3.76738 10.3125 6.09374C10.3125 8.42009 8.42006 10.3125 6.09374 10.3125Z" fill="#8B8B8B"/>
</svg>
`;

const filter = `<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 1H1L7 7.8992V12.6688L10 14.1274V7.8992L16 1Z" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const stars = `<svg width="49" height="9" viewBox="0 0 49 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 0L5.51031 3.10942H8.77975L6.13472 5.03115L7.14503 8.14058L4.5 6.21885L1.85497 8.14058L2.86528 5.03115L0.220246 3.10942H3.48969L4.5 0Z" fill="#FFC72C"/>
<path d="M14.5 0L15.5103 3.10942H18.7798L16.1347 5.03115L17.145 8.14058L14.5 6.21885L11.855 8.14058L12.8653 5.03115L10.2202 3.10942H13.4897L14.5 0Z" fill="#FFC72C"/>
<path d="M24.5 0L25.5103 3.10942H28.7798L26.1347 5.03115L27.145 8.14058L24.5 6.21885L21.855 8.14058L22.8653 5.03115L20.2202 3.10942H23.4897L24.5 0Z" fill="#FFC72C"/>
<path d="M34.5 0L35.5103 3.10942H38.7798L36.1347 5.03115L37.145 8.14058L34.5 6.21885L31.855 8.14058L32.8653 5.03115L30.2202 3.10942H33.4897L34.5 0Z" fill="#FFC72C"/>
<path d="M44.5 0L45.5103 3.10942H48.7798L46.1347 5.03115L47.145 8.14058L44.5 6.21885L41.855 8.14058L42.8653 5.03115L40.2202 3.10942H43.4897L44.5 0Z" fill="#FFC72C"/>
</svg>
`;

export default function Places() {
  const Navigation = useNavigation();

  const Search = () => <SvgXml xml={search} />;
  const Filter = () => <SvgXml xml={filter} />;
  const Stars = () => <SvgXml xml={stars} width="70" height="70" />;

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View
        style={{
          padding: 12,
          marginVertical: 10,
          elevation: 2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 9,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 9,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width,
        }}
      >
        <Search />

        <TextInput placeholder="Onde quer ir hoje?" />

        <Filter />
      </View>

      <ScrollView
        style={{ marginBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{ marginVertical: 15, marginLeft: 10, fontWeight: 'bold' }}
        >
          Baseados no seu perfil
        </Text>

        <TouchableOpacity
          onPress={() => Navigation.navigate('PlaceProfile')}
          style={{
            elevation: 1,
            marginHorizontal: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 9,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 9,
            padding: 5,
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: -12,
            }}
          >
            <Text>Bar</Text>
            <Stars />
          </View>

          <ImageBackground
            source={require('../assets/cerveja.png')}
            style={{
              width: width * 0.9,
              height: width * 0.5,
              marginBottom: 15,
            }}
          />
        </TouchableOpacity>

        <Text
          style={{ marginVertical: 15, marginLeft: 10, fontWeight: 'bold' }}
        >
          Todos
        </Text>

        <TouchableOpacity
          onPress={() => Navigation.navigate('PlaceProfile')}
          style={{
            elevation: 1,
            marginHorizontal: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 9,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 9,
            padding: 5,
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: -12,
            }}
          >
            <Text>Bar</Text>
            <Stars />
          </View>

          <ImageBackground
            source={require('../assets/cerveja.png')}
            style={{
              width: width * 0.9,
              height: width * 0.5,
              marginBottom: 15,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Navigation.navigate('PlaceProfile')}
          style={{
            elevation: 1,
            marginHorizontal: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 9,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 9,
            padding: 5,
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: -12,
            }}
          >
            <Text>Bar</Text>
            <Stars />
          </View>

          <ImageBackground
            source={require('../assets/cerveja.png')}
            style={{
              width: width * 0.9,
              height: width * 0.5,
              marginBottom: 15,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Navigation.navigate('PlaceProfile')}
          style={{
            elevation: 1,
            marginHorizontal: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 9,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 9,
            padding: 5,
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: -12,
            }}
          >
            <Text>Bar</Text>
            <Stars />
          </View>

          <ImageBackground
            source={require('../assets/cerveja.png')}
            style={{
              width: width * 0.9,
              height: width * 0.5,
              marginBottom: 15,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Navigation.navigate('PlaceProfile')}
          style={{
            elevation: 1,
            marginHorizontal: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 9,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 9,
            padding: 5,
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: -12,
            }}
          >
            <Text>Bar</Text>
            <Stars />
          </View>

          <ImageBackground
            source={require('../assets/cerveja.png')}
            style={{
              width: width * 0.9,
              height: width * 0.5,
              marginBottom: 15,
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
