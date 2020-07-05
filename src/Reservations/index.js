import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

const width = Dimensions.get('window').width - 20;

const bill = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M8.37548 4.30236C8.30807 4.27855 8.23925 4.2537 8.17049 4.22789V3.06111C8.32304 3.10271 8.40077 3.17959 8.40616 3.18513C8.51259 3.30598 8.69681 3.31825 8.81842 3.21237C8.94044 3.10608 8.95319 2.92104 8.8469 2.79905C8.73604 2.67179 8.50257 2.51133 8.17049 2.46293V2.25586C8.17049 2.09408 8.03933 1.96289 7.87752 1.96289C7.71572 1.96289 7.58456 2.09408 7.58456 2.25586V2.49694C7.5542 2.50441 7.52356 2.5125 7.49233 2.5219C7.11047 2.63695 6.82521 2.96332 6.74787 3.37374C6.67714 3.74909 6.79814 4.11161 7.06366 4.31985C7.1971 4.42453 7.36164 4.52045 7.58453 4.62097V6.10875C7.40294 6.0907 7.27861 6.03984 7.07423 5.90616C6.93882 5.81751 6.75727 5.85554 6.66868 5.99095C6.58011 6.12636 6.61805 6.30794 6.75349 6.3965C7.07798 6.60879 7.30319 6.67711 7.58453 6.69665V6.94336C7.58453 7.10514 7.71569 7.23633 7.87749 7.23633C8.0393 7.23633 8.17046 7.10514 8.17046 6.94336V6.67022C8.7274 6.5436 9.08494 6.07447 9.16272 5.61176C9.26215 5.02052 8.95313 4.50656 8.37548 4.30236ZM7.4253 3.85884C7.33398 3.78721 7.29408 3.6394 7.3237 3.48226C7.3486 3.35013 7.42996 3.19374 7.58459 3.11411V3.9646C7.52558 3.93041 7.47165 3.8952 7.4253 3.85884ZM8.58493 5.51458C8.54927 5.72669 8.40856 5.95119 8.17049 6.05646V4.85136C8.1738 4.85253 8.17688 4.85367 8.18022 4.85484C8.63183 5.01445 8.60417 5.40018 8.58493 5.51458Z" fill="#464646"/>
<path d="M2.22656 3.57422H5.44922C5.69191 3.57422 5.88867 3.37746 5.88867 3.13477C5.88867 2.89207 5.69191 2.69531 5.44922 2.69531H2.22656C1.98387 2.69531 1.78711 2.89207 1.78711 3.13477C1.78711 3.37746 1.98387 3.57422 2.22656 3.57422Z" fill="#464646"/>
<path d="M2.22656 5.33203H5.44922C5.69191 5.33203 5.88867 5.13527 5.88867 4.89258C5.88867 4.64988 5.69191 4.45312 5.44922 4.45312H2.22656C1.98387 4.45312 1.78711 4.64988 1.78711 4.89258C1.78711 5.13527 1.98387 5.33203 2.22656 5.33203Z" fill="#464646"/>
<path d="M2.22656 7.08984H5.44922C5.69191 7.08984 5.88867 6.89309 5.88867 6.65039C5.88867 6.4077 5.69191 6.21094 5.44922 6.21094H2.22656C1.98387 6.21094 1.78711 6.4077 1.78711 6.65039C1.78711 6.89309 1.98387 7.08984 2.22656 7.08984Z" fill="#464646"/>
<path d="M8.67188 7.96875H2.22656C1.98387 7.96875 1.78711 8.16551 1.78711 8.4082C1.78711 8.6509 1.98387 8.84766 2.22656 8.84766H8.67188C8.91457 8.84766 9.11133 8.6509 9.11133 8.4082C9.11133 8.16551 8.91457 7.96875 8.67188 7.96875Z" fill="#464646"/>
<path d="M8.67188 9.72656H2.22656C1.98387 9.72656 1.78711 9.92332 1.78711 10.166C1.78711 10.4087 1.98387 10.6055 2.22656 10.6055H8.67188C8.91457 10.6055 9.11133 10.4087 9.11133 10.166C9.11133 9.92332 8.91457 9.72656 8.67188 9.72656Z" fill="#464646"/>
<path d="M8.67188 11.4844H2.22656C1.98387 11.4844 1.78711 11.6811 1.78711 11.9238C1.78711 12.1665 1.98387 12.3633 2.22656 12.3633H8.67188C8.91457 12.3633 9.11133 12.1665 9.11133 11.9238C9.11133 11.6811 8.91457 11.4844 8.67188 11.4844Z" fill="#464646"/>
<path d="M14.7335 8.89699C14.5878 8.82146 14.4121 8.83342 14.278 8.92799L13.2848 9.6283L12.2917 8.92799C12.1398 8.82091 11.937 8.82094 11.7851 8.92808L10.8691 9.57439V0.439453C10.8691 0.275303 10.7777 0.124863 10.632 0.0493359C10.4862 -0.0261914 10.3106 -0.0142383 10.1764 0.080332L9.18328 0.780645L8.19018 0.0803027C8.03827 -0.0267773 7.83542 -0.0267481 7.68355 0.0803906L6.69149 0.780439L5.70044 0.0805078C5.54845 -0.0268359 5.34536 -0.0268359 5.19337 0.0805078L4.20258 0.780352L3.21146 0.0804785C3.0595 -0.0268359 2.85642 -0.0267773 2.70448 0.0804785L1.71334 0.780381L0.722227 0.0804785C0.588135 -0.014209 0.412412 -0.02625 0.266602 0.0492481C0.12082 0.124775 0.0292969 0.275273 0.0292969 0.439453V12.2168C0.0292969 13.7515 1.27784 15 2.8125 15H12.4805C13.8536 15 14.9707 13.8829 14.9707 12.5098V9.28711C14.9707 9.12296 14.8792 8.97252 14.7335 8.89699ZM0.908203 12.2168V1.28777L1.45986 1.67733C1.61186 1.78462 1.81491 1.78462 1.96688 1.67733L2.95799 0.977432L3.94916 1.67733C4.10115 1.78468 4.30421 1.78465 4.4562 1.6773L5.44696 0.977461L6.43787 1.6773C6.5898 1.78459 6.79277 1.78459 6.94477 1.67742L7.93702 0.977256L8.93007 1.67751C9.08194 1.78456 9.28471 1.78456 9.43658 1.67751L9.99023 1.28707V12.5098C9.99023 13.1239 10.2142 13.6864 10.5841 14.1211H2.8125C1.76247 14.1211 0.908203 13.2668 0.908203 12.2168ZM14.0918 12.5098C14.0918 13.3983 13.369 14.1211 12.4805 14.1211C11.592 14.1211 10.8691 13.3983 10.8691 12.5098V10.5988C10.9316 10.5878 10.9922 10.5633 11.0463 10.525L12.0386 9.82488L13.0316 10.5251C13.1835 10.6322 13.3862 10.6322 13.5381 10.5251L14.0918 10.1347V12.5098Z" fill="#464646"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="15" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const categories = [
  'Cerveja',
  'Suco',
  'Refrigetrante',
  'Petiscos',
  'Sobremesas',
];

export default function Reservations() {
  const Navigation = useNavigation();

  const Bill = () => <SvgXml xml={bill} />;

  return (
    <View style={{ backgroundColor: '#fff', alignItems: 'center' }}>
      <View
        style={{
          width,
          padding: 10,
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          elevation: 2,
          marginTop: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 9,
          borderBottomLeftRadius: 9,
          borderBottomRightRadius: 10,
        }}
      >
        <TextInput
          placeholder="Pesquisar"
          style={{ fontSize: 17, paddingHorizontal: 5 }}
        />
        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'center' }}
          onPress={() => Navigation.navigate('Order')}
        >
          <Bill />
          <Text>Pedir</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <View
            style={{
              padding: 10,
              elevation: 2,
              borderRadius: 2,
              marginHorizontal: 10,
              marginVertical: 15,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={index.toString()}
          >
            <Text style={{ fontSize: 16 }}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView>
        <View
          style={{
            elevation: 2,
            borderRadius: 3,
            padding: 20,
            width,
            marginBottom: 15,
          }}
        >
          <Text>Mais vendidos</Text>

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../assets/cerveja.png')}
              style={{ width: 80, height: 80 }}
            />

            <View style={{ padding: 15 }}>
              <Text>Cerveja geladinha</Text>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>0</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>R$ 9,90</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../assets/cerveja.png')}
              style={{ width: 80, height: 80 }}
            />

            <View style={{ padding: 15 }}>
              <Text>Cerveja geladinha</Text>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>0</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>R$ 9,90</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            elevation: 2,
            borderRadius: 3,
            padding: 20,
            width,
            marginBottom: 15,
          }}
        >
          <Text>Todos</Text>

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../assets/cerveja.png')}
              style={{ width: 80, height: 80 }}
            />

            <View style={{ padding: 15 }}>
              <Text>Cerveja geladinha</Text>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>0</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>R$ 9,90</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../assets/cerveja.png')}
              style={{ width: 80, height: 80 }}
            />

            <View style={{ padding: 15 }}>
              <Text>Cerveja geladinha</Text>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>0</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>R$ 9,90</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../assets/cerveja.png')}
              style={{ width: 80, height: 80 }}
            />

            <View style={{ padding: 15 }}>
              <Text>Cerveja geladinha</Text>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>0</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>R$ 9,90</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../assets/cerveja.png')}
              style={{ width: 80, height: 80 }}
            />

            <View style={{ padding: 15 }}>
              <Text>Cerveja geladinha</Text>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>0</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>R$ 9,90</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../assets/cerveja.png')}
              style={{ width: 80, height: 80 }}
            />

            <View style={{ padding: 15 }}>
              <Text>Cerveja geladinha</Text>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>0</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>R$ 9,90</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../assets/cerveja.png')}
              style={{ width: 80, height: 80 }}
            />

            <View style={{ padding: 15 }}>
              <Text>Cerveja geladinha</Text>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>0</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>R$ 9,90</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../assets/cerveja.png')}
              style={{ width: 80, height: 80 }}
            />

            <View style={{ padding: 15 }}>
              <Text>Cerveja geladinha</Text>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>0</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>R$ 9,90</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
