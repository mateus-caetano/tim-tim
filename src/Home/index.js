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
import { SvgXml } from 'react-native-svg';

const width = Dimensions.get('window').width - 20;

const categories = ['Próximo', 'Popular', 'Mais Barato', 'Musica', 'Família'];

const menu = `
<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.810028" y1="4.64313" x2="11.8483" y2="4.64313" stroke="#5A5A5A"/>
<line x1="0.810013" y1="1.34851" x2="15.9876" y2="1.34851" stroke="#5A5A5A"/>
<line x1="0.810028" y1="7.7121" x2="15.9876" y2="7.7121" stroke="#5A5A5A"/>
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

const bar = `<svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1.5" y1="1.5" x2="28.5" y2="1.5" stroke="#666666" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const reactions = `<svg width="68" height="21" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M67.2547 6.17603L61.9597 8.62426L56.6647 11.0725" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.2547 6.17601L57.1511 18.4431L56.6646 11.0725L51.3644 5.92753L67.2547 6.17601Z" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41 11.0833C41.0028 12.1832 40.7459 13.2682 40.25 14.25C39.662 15.4265 38.7581 16.416 37.6395 17.1077C36.5209 17.7995 35.2319 18.1662 33.9167 18.1667C32.8168 18.1695 31.7318 17.9126 30.75 17.4167L26 19L27.5833 14.25C27.0874 13.2682 26.8305 12.1832 26.8333 11.0833C26.8338 9.76815 27.2005 8.47906 27.8923 7.36048C28.584 6.24189 29.5735 5.33799 30.75 4.75002C31.7318 4.25413 32.8168 3.99716 33.9167 4.00002H34.3333C36.0703 4.09585 37.7109 4.82899 38.9409 6.05907C40.171 7.28915 40.9041 8.92973 41 10.6667V11.0833Z" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.81046 18.9999H2.52419C2.11995 18.9999 1.73226 18.8419 1.44642 18.5606C1.16058 18.2793 1 17.8977 1 17.4999V12.2499C1 11.8521 1.16058 11.4706 1.44642 11.1893C1.73226 10.908 2.11995 10.75 2.52419 10.75H4.81046M10.1451 9.24997V6.24999C10.1451 5.65325 9.90424 5.08096 9.47548 4.65901C9.04672 4.23705 8.46519 4 7.85883 4L4.81046 10.75V18.9999H13.4069C13.7744 19.004 14.1311 18.8772 14.4112 18.6429C14.6913 18.4086 14.8759 18.0826 14.9311 17.7249L15.9827 10.975C16.0159 10.76 16.0012 10.5405 15.9396 10.3316C15.878 10.1228 15.771 9.92968 15.626 9.7656C15.481 9.60151 15.3015 9.47041 15.0999 9.38138C14.8983 9.29234 14.6795 9.2475 14.4586 9.24997H10.1451Z" stroke="#3D3D3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default function Home() {
  const Menu = () => <SvgXml xml={menu} width="30" height="30" />;
  const Profile = () => <SvgXml xml={profile} width="35" height="35" />;
  const Bar = () => <SvgXml xml={bar} />;
  const Reactions = () => <SvgXml xml={reactions} />;

  return (
    <View style={{}}>
      <View
        style={{
          backgroundColor: '#fff',
          width,
          marginTop: StatusBar.currentHeight,
          padding: 20,
          elevation: 3,
          alignItems: 'center',
          borderRadius: 8,
          alignSelf: 'center',
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#949494',
                marginHorizontal: 5,
              }}
            ></View>
            <Text style={{}}>Fulano</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#949494',
                marginHorizontal: 5,
              }}
            ></View>
            <Text style={{}}>Fulano</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#949494',
                marginHorizontal: 5,
              }}
            ></View>
            <Text style={{}}>Fulano</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#949494',
                marginHorizontal: 5,
              }}
            ></View>
            <Text style={{}}>Fulano</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#949494',
                marginHorizontal: 5,
              }}
            ></View>
            <Text style={{}}>Fulano</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#949494',
                marginHorizontal: 5,
              }}
            ></View>
            <Text style={{}}>Fulano</Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={{ marginTop: 25 }}>
          <Bar />
        </TouchableOpacity>
      </View>

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
        <Menu />

        <TextInput
          placeholder="O que está procurando?"
          style={{ fontSize: 17 }}
        />

        <Profile />
      </View>

      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 15,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignSelf: 'flex-start',
            }}
          >
            <ImageBackground
              source={{
                uri:
                  'https://scontent-for1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/101533501_692476641541109_8892123618431160644_n.jpg?_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=IPbWSOX044AAX_DGuvu&oh=9b57e9824c2539a317209e213313bcbb&oe=5F2A6ED2',
              }}
              style={{ width: width * 0.8, height: width * 0.5 }}
            />

            <Text
              style={{
                color: '#fff',
                position: 'absolute',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              Destaques
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              marginTop: 15,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignSelf: 'flex-start',
            }}
          >
            <ImageBackground
              source={{
                uri:
                  'https://scontent-for1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/101533501_692476641541109_8892123618431160644_n.jpg?_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=IPbWSOX044AAX_DGuvu&oh=9b57e9824c2539a317209e213313bcbb&oe=5F2A6ED2',
              }}
              style={{ width: width * 0.8, height: width * 0.5 }}
            />

            <Text
              style={{
                color: '#fff',
                position: 'absolute',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              Recomendações
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              marginTop: 15,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignSelf: 'flex-start',
            }}
          >
            <ImageBackground
              source={{
                uri:
                  'https://scontent-for1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/101533501_692476641541109_8892123618431160644_n.jpg?_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=IPbWSOX044AAX_DGuvu&oh=9b57e9824c2539a317209e213313bcbb&oe=5F2A6ED2',
              }}
              style={{ width: width * 0.8, height: width * 0.5 }}
            />

            <Text
              style={{
                color: '#fff',
                position: 'absolute',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              Eventos
            </Text>
          </View>
        </ScrollView>

        <View style={{}}>
          <Text
            style={{
              color: '#666666',
              fontWeight: 'bold',
              fontSize: 18,
              marginVertical: 12,
              marginLeft: 10,
            }}
          >
            Descubra novos lugares
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                width: width * 0.8,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                elevation: 1,
                borderRadius: 1,
              }}
            >
              <Text>Todos os locais</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: width * 0.8,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                elevation: 1,
                borderRadius: 1,
              }}
            >
              <Text>Todos os eventos</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View>
          <View
            style={{
              marginVertical: 15,
              marginBottom: 10,
              width,
              alignSelf: 'center',
              elevation: 1,
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
              elevation: 1,
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
              elevation: 1,
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
    </View>
  );
}
