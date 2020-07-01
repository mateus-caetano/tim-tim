import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

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

export default function Home() {
  const Menu = () => <SvgXml xml={menu} width="35" height="35" />;
  const Profile = () => <SvgXml xml={profile} width="35" height="35" />;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Menu />
        <TextInput placeholder="Onde quer ir hoje?" />
        <Profile />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={[styles.header, styles.feedItem]}>
          <Text style={styles.title}>Novidades</Text>
          <View style={styles.figure}></View>
        </View>

        <>
          <Text style={styles.title}>Descubra novos lugares</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <View
                style={{
                  backgroundColor: '#F3F5FA',
                  padding: 12,
                  marginRight: 20,
                  marginVertical: 10,
                  marginLeft: index === 0 ? 10 : 0,
                }}
                key={index.toString()}
              >
                <Text>{category}</Text>
              </View>
            ))}
          </ScrollView>
        </>
        <View style={[styles.header, styles.feedItem]}>
          <Text style={styles.title}>Feito para você</Text>
          <View style={styles.figure}>
            <TouchableOpacity
              style={{ position: 'absolute', bottom: 10, right: 10 }}
            >
              <Text style={{ color: 'blue' }}>Todos os lugares -></Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.header, styles.feedItem]}>
          <Text style={styles.title}>Eventos</Text>
          <View style={styles.figure}>
            <TouchableOpacity
              style={{ position: 'absolute', bottom: 10, right: 10 }}
            >
              <Text style={{ color: 'blue' }}>Todos os eventos -></Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const width = Dimensions.get('window').width - 20;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F3F5FA',
    height: 50,
    width,
    marginTop: StatusBar.currentHeight + 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  feedItem: {
    height: 300,
    flexDirection: 'column',
    alignItems: 'flex-start',
    // backgroundColor: 'white',
    marginTop: 0,
    alignSelf: 'center',
  },

  figure: {
    width,
    height: 250,
    backgroundColor: '#F3F5FA',
    fontWeight: '900',
  },

  title: {
    textAlign: 'left',
    marginLeft: 15,
  },
});
