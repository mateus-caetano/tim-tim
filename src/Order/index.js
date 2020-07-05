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

export default function Order() {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 15,
      }}
    >
      <ScrollView style={{ alignSelf: 'center' }}>
        <View
          style={{
            elevation: 2,
            borderRadius: 3,
            padding: 20,
            width,
            marginBottom: 15,
          }}
        >
          <Text>Ítens</Text>

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

            <View style={{ padding: 20 }}>
              <Text>Cerveja geladinha</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>5</Text>
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

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>5</Text>
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

      <View
        style={{
          elevation: 2,
          borderRadius: 3,
          width,
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            width,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Total</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>R$ 99</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 15,
          }}
        >
          <TouchableOpacity
            style={{
              padding: 20,
              borderWidth: 1,
              borderRadius: 3,
              elevation: 1,
              width: width * 0.45,
              alignItems: 'center',
              backgroundColor: '#fff',
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 20,
              borderWidth: 1,
              borderRadius: 3,
              elevation: 1,
              width: width * 0.45,
              alignItems: 'center',
              backgroundColor: '#424242',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
              Pedir na mesa
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
