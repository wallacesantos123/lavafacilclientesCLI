import React, {useState, useEffect, useRef} from 'react';
import 'react-native-gesture-handler';
import MapView, { AnimatedRegion, Marker, UrlTile } from 'react-native-maps';
import { Alert, KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, Image, Linking, Platform } from 'react-native';
import { debug } from 'react-native-reanimated';

const AlertConf = () => {
  const arrayButton = [
    {
      text : 'Não', onPress : () => {console.log('Você Apertou em Não')}
    },

    {
      text : 'Sim', onPress : () => {Linking.openURL('geo:-23.4902999,-46.3538963')}
    }
  ]

  Alert.alert('Confirmação de Lavagem', 'A sua lavagem escolhida foi a ... no ... podemos ir para o lava-Rapido?', arrayButton);
}

const Menu = ({navigation, route}) => {
    //Alert.alert('Menu', 'Deseja ir para o lava-rapido mais proximo?')
    const { selecionado, lavaRapido, lavagem, aspiracao, pretinho, produto, motor} = route.params;
    const [ location, setLocation ] = useState(null);
    const [ errorMsg, setErrorMsg ] = useState(null);
    const mapView = useRef(null);
    
    const animateMap = () => {
      mapView.current.animateToRegion({
          latitude: -23.4902,
          longitude: -46.3533,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
      }, 1000);
    }

    /*useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        /*await Location.watchPositionAsync({ enableHighAccuracy: true }, (loc) => setLocation(
          latitude  = location.coords.latitude,
          longitude  = location.coords.longitude,
          latitudeDelta = 0.0005,
          longitudeDelta = 0.0031));*/

        /*let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setLocation({
          latitude : location.coords.latitude,
          longitude : location.coords.longitude,
          latitudeDelta : 0.005,
          longitudeDelta : 0.005
        });
      })();
    }, []);*/

    return (
      <KeyboardAvoidingView
        style={Styles.body}
      >
        <View 
          style={Styles.menuSuperior}
        >
          <TouchableOpacity 
            style={Styles.btLavagens}
            onPress={() => navigation.navigate('Lavagens', { selecionado : selecionado, lavaRapido : lavaRapido })}
          >
            <Text style={Styles.txtBotoes} >Lavagens</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Styles.btLavaRapidos}
            onPress={() => navigation.navigate('LavaRapidos')}
          >
            <Text style={Styles.txtBotoes} >Lava-Rapidos</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Styles.btHistorico}
          >
            <Text style={Styles.txtBotoes} >Historico</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Styles.btConfiguracoes}
          >
            <Text style={Styles.txtBotoes} >Configuraçoes</Text>
          </TouchableOpacity>
        </View>

        <MapView
          ref={mapView}
          style={Styles.maps}
          initialRegion = { { 
            latitude : 37.78825 , 
            longitude : - 122.4324 , 
            latitudeDelta : 0.0922 , 
            longitudeDelta : 0.0421 , 
          } } 
          loadingEnabled
          showsUserLocation
          zoomControlEnabled
          >
              <Marker
                title={'Suave na Nave'}
                icon={require('../../../assets/icon.png')}
                coordinate={{ latitude : -23.4902 , longitude : -46.3533 }}
              >
              </Marker>
        </MapView>

        <View style={Styles.confirm}>
          <Text style={Styles.txtConfirm}>Lavagem: {lavagem}</Text>
          <Text style={Styles.txtConfirm}>Aspiração: {aspiracao}</Text>
          <Text style={Styles.txtConfirm}>Pretinho: {pretinho}</Text>
          <Text style={Styles.txtConfirm}>Produto: {produto}</Text>
          <Text style={Styles.txtConfirm}>Motor: {motor}</Text>
        </View>

        <View 
          style={Styles.menuInferior}
        >         
          {/*<TouchableOpacity
            style={Styles.lavaRapido}
          >
            <Image source={require('../../../assets/logo.png')} style={Styles.imgLogo} />
            <Text
                style={Styles.titulo}
            >
                SUAVE NA NAVE
            </Text>
            <Image source={require('../../../assets/avaliacao0.png')} style={Styles.imgAvali} />
            <Text
                style={Styles.endereco}
            >
                RUA: JUIZ DE FORA 630, VILA VIRGI...
            </Text>
          </TouchableOpacity>*/}

          {selecionado ? animateMap() : <Text></Text>}

          {selecionado ? 
            <View
              style={Styles.lavaRapido}
            >
              <Image source={require('../../../assets/logo.png')} style={Styles.imgLogo} />
              <Text
                  style={Styles.titulo}
              >
                  SUAVE NA NAVE
              </Text>
              <Image source={require('../../../assets/avaliacao0.png')} style={Styles.imgAvali} />
                <Text
                  style={Styles.endereco}
                  numberOfLines={1}
                >
                  RUA: JUIZ DE FORA 630, VILA VIRGI... 
              </Text>

              <TouchableOpacity
                style={ Styles.irBt }
                //onPress={() => {/Linking.openURL('geo:-23.4902999,-46.3538963')}}
                onPress={() => {AlertConf()}}
              >
                <Image source={require('../../../assets/ir_bt.png')} style={Styles.irBtImg} />
              </TouchableOpacity>
            </View>
          : 
            <Text>Nenhum Lava-Rapido Selecionado.</Text>
          }
        </View>
      </KeyboardAvoidingView>
  );
}

const Styles = new StyleSheet.create({
    body : {
      flex : 1,
    },

    menuSuperior : {
      width : '100%',
      height : '10%',
      backgroundColor : '#FFF',
    },

    btLavagens : {
      width : '25.2%',
      height : '100%',
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      position : 'absolute',
      backgroundColor : '#FFF',
      borderRadius : 10,
      marginLeft : '0.3%'
    },

    btLavaRapidos : {
      width : '23.2%',
      height : '100%',
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      marginLeft : '26.1%',
      position : 'relative',
      backgroundColor : '#FFF',
      borderRadius : 10
    },

    btHistorico : {
      width : '1%',
      height : '100%',
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      marginLeft : '49.6%',
      position : 'absolute',
      backgroundColor : '#FFF',
      borderRadius : 10
    },

    btConfiguracoes : {
      width : '23.4%',
      height : '100%',
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      marginLeft : '75.5%',
      position : 'absolute',
      backgroundColor : '#FFF',
      borderRadius : 10
    },

    txtBotoes : {
      color : '#000',
      fontWeight : 'bold'
    },

    confirm : {
      position : 'absolute',
      marginTop : '20%',
      opacity : 0.5
    },

    txtConfirm : {
      color : '#000',
      fontWeight : 'bold',
      fontSize : 16
    },

    maps : {
      flex : 1
    },

    menuInferior : {
      width : '100%',
      height : '20%',
      alignItems : 'center',
      justifyContent : 'center',
    },

    lavaRapido : {
      borderWidth : 2,
      width : '99%',
      height : '99%',
      borderRadius : 10,
      backgroundColor : '#FFF'
    },

    imgLogo : {
      width : '25%',
      height : '75%',
      marginTop : '3.5%',
      marginLeft : '2%'
    },

    titulo : {
      fontWeight : 'bold',
      fontSize : 18,
      marginTop : '-23%',
      marginLeft : '29%'
  },

  imgAvali : {
    width : '50%',
    height : '42%',
    marginTop : '-3%',
    marginLeft : '24%'
  },

  endereco : {
      fontWeight : 'bold',
      fontSize : 10,
      marginLeft : '29%'
  },

  irBtImg : {
    marginTop : '-24%',
    marginLeft : '77.5%',
    width : '23%',
    borderRadius : 10
  }
})

export default Menu;