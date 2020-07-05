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

const stars = `<svg width="49" height="11" viewBox="0 0 49 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 2L5.51031 5.10942H8.77975L6.13472 7.03115L7.14503 10.1406L4.5 8.21885L1.85497 10.1406L2.86528 7.03115L0.220246 5.10942H3.48969L4.5 2Z" fill="#FFC72C"/>
<path d="M14.5 1L15.5103 4.10942H18.7798L16.1347 6.03115L17.145 9.14058L14.5 7.21885L11.855 9.14058L12.8653 6.03115L10.2202 4.10942H13.4897L14.5 1Z" fill="#FFC72C"/>
<path d="M24.5 0L25.5103 3.10942H28.7798L26.1347 5.03115L27.145 8.14058L24.5 6.21885L21.855 8.14058L22.8653 5.03115L20.2202 3.10942H23.4897L24.5 0Z" fill="#FFC72C"/>
<path d="M34.5 1L35.5103 4.10942H38.7798L36.1347 6.03115L37.145 9.14058L34.5 7.21885L31.855 9.14058L32.8653 6.03115L30.2202 4.10942H33.4897L34.5 1Z" fill="#FFC72C"/>
<path d="M44.5 2L45.5103 5.10942H48.7798L46.1347 7.03115L47.145 10.1406L44.5 8.21885L41.855 10.1406L42.8653 7.03115L40.2202 5.10942H43.4897L44.5 2Z" fill="#FFC72C"/>
</svg>
`;

const reservation = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4219 15.5117V14.2227H18.1328V13.5781C18.1328 11.3092 16.4492 9.42636 14.2656 9.11264V7.77734H12.9766V9.11264C10.7931 9.42636 9.10938 11.3092 9.10938 13.5781V14.2227H7.82031V15.5117H19.4219ZM10.3984 13.5781C10.3984 11.8012 11.8441 10.3555 13.6211 10.3555C15.3981 10.3555 16.8438 11.8012 16.8438 13.5781V14.2227H10.3984V13.5781Z" fill="black"/>
<path d="M14.2656 0H0V18.0898H5.24219V22H22V3.86719H14.2656V0ZM5.24219 16.8008H1.28906V1.28906H10.8908L5.24219 4.11336V16.8008ZM12.9766 1.68743V3.86719H8.617L12.9766 1.68743ZM20.7109 5.15625V20.7109H6.53125V5.15625H20.7109Z" fill="black"/>
<path d="M9.10938 18.0898H18.1328V19.3789H9.10938V18.0898Z" fill="black"/>
</svg>
`;

const chat = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0003 19V17C17.0003 15.9391 16.5788 14.9217 15.8287 14.1716C15.0785 13.4214 14.0611 13 13.0002 13H5.00025C3.93938 13 2.92196 13.4214 2.17182 14.1716C1.42167 14.9217 1.00024 15.9391 1.00024 17V19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.99998 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 8.99998 1C6.79085 1 5 2.79086 5 5C5 7.20914 6.79085 9 8.99998 9Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const map = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5V21L8 17L16 21L23 17V1L16 5L8 1L1 5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 1V17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 5V21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const profile = `
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<circle cx="10.7819" cy="10.5455" r="10" fill="#D7D7D7"/>
<circle cx="10.7819" cy="10.5455" r="10" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.0294118)"/>
</pattern>
<image id="image0" width="34" height="34" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gIcSUNDX1BST0ZJTEUAAQEAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD////bAIQAAgICAwMDAwQEAwUFBQUFBwYGBgYHCgcIBwgHCg8KCwoKCwoPDhEODQ4RDhgTERETGBwYFxgcIh8fIispKzg4SwECAgIDAwMDBAQDBQUFBQUHBgYGBgcKBwgHCAcKDwoLCgoLCg8OEQ4NDhEOGBMRERMYHBgXGBwiHx8iKykrODhL/8AAEQgAIgAiAwEiAAIRAQMRAf/EAH0AAAMBAQEAAAAAAAAAAAAAAAAGCAcJAxAAAgEDAwIFAgQHAAAAAAAAAQIDAAQFBhEhEhMHCBQiMTRSFyQzYUFCY3GRo8IBAQEBAQAAAAAAAAAAAAAAAAQDAQIRAAICAgEDBQEAAAAAAAAAAAABAgMEEXESMTIFMzRhkbH/2gAMAwEAAhEDEQA/AM4wOMDRqCg+KY7vBXEVlc3Fvj3uWhTrKKej/LbHavTTES7LxvuK3lbm8OiMjaWjQW3Q73VzcP72eI7IqqPuGxABNBzLnCG1rey+NUrJpPsQTo/zF4182cVmsScYJJO1HcCQyRpITsBLuAQD91UvkLOW1d9k2BA4rmX4r4BVjyWY9Y467lIYYm5eRgffuRyOngiq08rGbyma0jfy5HKz3fZvexbmdy7pGqAkHf8Adq2L3FSObYdMmjYTYsedxzRTOY9qK62SFrTV2scaliAAu5J4ArSdJZ231X39NYrJWsl7IfUse51pBACEd2jBG/uIqRdQaoa1w10qEdXpyxH7FgtI/lZ1k2J8TcWZZD+ctbyBCePe8fWu39ylZmV9VVn0t/hbHm42QafcfNa+EVhi9S4awz7Ca3v8wxndtk7jbFIwGHIUkVv2mdGYXSWOGPxdu8cRcu3Wxdy2227E1knn4ivbLSen7iPmNu7azOPu3Eib1PPl88xGau77Hafzc7Xizr27S7b9aN0XcJKf51IHBPIqGGpTpjLZTLaVjSRehl5PNFJpyxJJ6qKRoKR1q+V/S3vvP0Kfx/q0j6Wdo9daBKEqfV2nxx8sRRRSLvGzh/w2vyhyi9vP4o/C604+c2D/AKmrlD4MMRrLS3J+t/4NFFC9L+O+WXzfdXCOmvcb7jRRRSg5/9k="/>
</defs>
</svg>
`;

const reactions = `<svg width="68" height="21" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M67.2547 6.17603L61.9597 8.62426L56.6647 11.0725" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.2547 6.17601L57.1511 18.4431L56.6646 11.0725L51.3644 5.92753L67.2547 6.17601Z" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41 11.0833C41.0028 12.1832 40.7459 13.2682 40.25 14.25C39.662 15.4265 38.7581 16.416 37.6395 17.1077C36.5209 17.7995 35.2319 18.1662 33.9167 18.1667C32.8168 18.1695 31.7318 17.9126 30.75 17.4167L26 19L27.5833 14.25C27.0874 13.2682 26.8305 12.1832 26.8333 11.0833C26.8338 9.76815 27.2005 8.47906 27.8923 7.36048C28.584 6.24189 29.5735 5.33799 30.75 4.75002C31.7318 4.25413 32.8168 3.99716 33.9167 4.00002H34.3333C36.0703 4.09585 37.7109 4.82899 38.9409 6.05907C40.171 7.28915 40.9041 8.92973 41 10.6667V11.0833Z" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.81046 18.9999H2.52419C2.11995 18.9999 1.73226 18.8419 1.44642 18.5606C1.16058 18.2793 1 17.8977 1 17.4999V12.2499C1 11.8521 1.16058 11.4706 1.44642 11.1893C1.73226 10.908 2.11995 10.75 2.52419 10.75H4.81046M10.1451 9.24997V6.24999C10.1451 5.65325 9.90424 5.08096 9.47548 4.65901C9.04672 4.23705 8.46519 4 7.85883 4L4.81046 10.75V18.9999H13.4069C13.7744 19.004 14.1311 18.8772 14.4112 18.6429C14.6913 18.4086 14.8759 18.0826 14.9311 17.7249L15.9827 10.975C16.0159 10.76 16.0012 10.5405 15.9396 10.3316C15.878 10.1228 15.771 9.92968 15.626 9.7656C15.481 9.60151 15.3015 9.47041 15.0999 9.38138C14.8983 9.29234 14.6795 9.2475 14.4586 9.24997H10.1451Z" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default function Place() {
  const Navigation = useNavigation();

  const Stars = () => <SvgXml xml={stars} width="70" height="70" />;
  const Reservation = () => <SvgXml xml={reservation} width="70" height="70" />;
  const Chat = () => <SvgXml xml={chat} width="70" height="70" />;
  const Map = () => <SvgXml xml={map} width="70" height="70" />;
  const Reactions = () => <SvgXml xml={reactions} />;
  const Profile = () => <SvgXml xml={profile} width="35" height="35" />;

  return (
    <ScrollView contentContainerStyle={{ justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <Text>Clientes</Text>
          <Text>200</Text>
        </View>

        <View>
          <Text>Bar Premium</Text>
          <Stars />
        </View>

        <View>
          <Text>Lotação</Text>
          <Text>55%</Text>
        </View>
      </View>

      <ImageBackground
        source={require('../assets/destaques.jpg')}
        style={{ width, height: 200, alignSelf: 'center' }}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={{ padding: 10, elevation: 1, alignItems: 'center' }}
          onPress={() => Navigation.navigate('Reservations')}
        >
          <Reservation />
          <Text>Pedidos e reservas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 10, elevation: 1, alignItems: 'center' }}
        >
          <Chat />
          <Text>Entrar no grupo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 10, elevation: 1, alignItems: 'center' }}
        >
          <Map />
          <Text>Ver no mapa</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          elevation: 2,
          width,
          padding: 20,
          borderRadius: 3,
          alignSelf: 'center',
          marginTop: 15,
        }}
      >
        <Text>Av. Hackathon 1, Shawee</Text>
        <Text>Horário de funcionamento:</Text>
        <Text>Quarta e Quinta de 15:00 às 00:00</Text>
        <Text>Sexta a Domingo de 16:00 às 02:00</Text>
      </View>

      <View
        style={{
          elevation: 2,
          width,
          padding: 20,
          borderRadius: 3,
          alignSelf: 'center',
          marginTop: 15,
        }}
      >
        <Text>Próximos eventos</Text>

        <ScrollView horizontal pagingEnabled>
          <ImageBackground
            source={require('../assets/destaques.jpg')}
            style={{ width, height: 200, alignSelf: 'center' }}
          />
          <ImageBackground
            source={require('../assets/destaques.jpg')}
            style={{ width, height: 200, alignSelf: 'center' }}
          />
          <ImageBackground
            source={require('../assets/destaques.jpg')}
            style={{ width, height: 200, alignSelf: 'center' }}
          />
        </ScrollView>
      </View>

      <View
        style={{
          elevation: 2,
          width,
          padding: 20,
          borderRadius: 3,
          alignSelf: 'center',
          marginTop: 15,
        }}
      >
        <Text>Nossos clientes</Text>

        <View
          style={{
            marginVertical: 15,
            marginBottom: 10,
            width,
            alignSelf: 'center',
            borderTopWidth: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 9,
            borderBottomLeftRadius: 9,
            borderBottomRightRadius: 10,
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
            }}
          >
            <Profile />
            <View style={{ marginLeft: 12 }}>
              <Text style={{}}>Fulano</Text>

              <Text>aculá</Text>
            </View>
          </View>

          <ImageBackground
            source={require('../assets/amigos.png')}
            style={{ width: width * 0.9, height: 200 }}
          />
          <View style={{ marginTop: 10, alignSelf: 'flex-end' }}>
            <Reactions />
          </View>
        </View>

        <View
          style={{
            marginVertical: 15,
            marginBottom: 10,
            width,
            alignSelf: 'center',
            borderTopWidth: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 9,
            borderBottomLeftRadius: 9,
            borderBottomRightRadius: 10,
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
            }}
          >
            <Profile />
            <View style={{ marginLeft: 12 }}>
              <Text style={{}}>Fulano</Text>

              <Text>aculá</Text>
            </View>
          </View>

          <ImageBackground
            source={require('../assets/amigos.png')}
            style={{ width: width * 0.9, height: 200 }}
          />
          <View style={{ marginTop: 10, alignSelf: 'flex-end' }}>
            <Reactions />
          </View>
        </View>

        <View
          style={{
            marginVertical: 15,
            marginBottom: 10,
            width,
            alignSelf: 'center',
            borderTopWidth: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 9,
            borderBottomLeftRadius: 9,
            borderBottomRightRadius: 10,
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
            }}
          >
            <Profile />
            <View style={{ marginLeft: 12 }}>
              <Text style={{}}>Fulano</Text>

              <Text>aculá</Text>
            </View>
          </View>

          <ImageBackground
            source={require('../assets/amigos.png')}
            style={{ width: width * 0.9, height: 200 }}
          />
          <View style={{ marginTop: 10, alignSelf: 'flex-end' }}>
            <Reactions />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
