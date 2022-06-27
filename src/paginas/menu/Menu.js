import React, {useState, useEffect, useRef, Children} from 'react';
import 'react-native-gesture-handler';
import MapView, { AnimatedRegion, Marker, UrlTile } from 'react-native-maps';
import { Alert, KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, Image, Linking, Platform } from 'react-native';
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

const Menu = ({navigation, route}) => {
    //Alert.alert('Menu', 'Deseja ir para o lava-rapido mais proximo?')
    const { selecionado, lavaRapido, lavagem, aspiracao, pretinho, produto, motor} = route.params;
    const [ coords, setCoords ] = useState(null);
    const [ errorMsg, setErrorMsg ] = useState(null);
    const mapView = useRef(null);
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBayrxHEUwi2fvhi1utszGIgkdNp0ZD9Ow';
    
    // criando um useEffect que será executado uma vez quando o Hook for chamado (parâmetro passado ao fim da função é vazio).
    useEffect(() => {
      (async function loadPosition() {
    // A função requestMultiple serve para requisitar múltiplas autorizações do usuário em sequência. As requisições são feitas na ordem passada. 

        const result = requestMultiple(
          [
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
          ]).then(
            (statuses) => {
    //statuses é um vetor que contém as respostas escolhidas pelo usuário em cada uma das autorizações solicitadas.
              const statusFine = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];  //pegamos a autorização que o usuário selecionou para uso do GPS e para obter localização em primeiro plano
              const statusBack = statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION]; 
    //pegamos a autorização que o usuário selecionou para localização em background 
              if (Platform.Version < 29) { 
    //Em APIs do Android abaixo da 29 não é necessário permissão para background location, apenas solicitar acesso ao GPS já oferece tudo que é necessário para utilizar a localização em primeiro e segundo plano. Nesse caso, apenas verificamos se a autorização do GPS é positiva
                if (statusFine == 'granted') {
                  return true;
                } else {
                  setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
                }
              }
    // Caso a API seja > 29, é necessário verificar se ambas as autorizações foram positivas. 
              if (statusFine == 'granted' && statusBack == 'granted') {
                return true;
              } else {
                setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
              }
            },
          );

    // caso as permissões tenham sido obtidas com sucesso, result será true e a localização do usuário poderá ser obtida.
        if (result) {
          await Geolocation.getCurrentPosition(       //se as permissões foram aceitas, obtemos a localização aqui
            ({ coords }) => {
    // O parâmetro {coords} desestrutura a resposta, obtendo apenas a parte relativa às coordenadas. Você também pode receber apenas (position) e observar outras informações que são obtidas ao se solicitar a localização. Nesse exemplo, apenas precisamos das coordenadas.
              setCoords({
                latitude : coords.latitude,
                longitude : coords.longitude,
                latitudeDelta : 0.005,
                longitudeDelta : 0.005
              });
            }, (error) => {
              setErrorMsg('Não foi possível obter a localização');
            }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, showLocationDialog: true } 
            //showLocationDialog: essa função convida automaticamente o usuário a ativar o GPS, caso esteja desativado.
            //enableHighAccuracy: vai solicitar a ativação do GPS e coletar os dados dele
            //timeout: determina o tempo máximo para o dispositivo coletar uma posição
            //maximumAge: tempo máximo para coleta de posição armazenada em cache
          )
        }

      })()
    }, []);
    

    const Direcao = () => {
      if(selecionado == true) 
      {
        return(
          <MapViewDirections
          origin={coords}
          destination={{ latitude : -23.4902 , longitude : -46.3533 }}
          apikey={GOOGLE_MAPS_APIKEY}
        />
        )
        
      }
      else if(selecionado == false)
      {
        return(
          <MapViewDirections
          origin={{latitude : -23.0115, longitude : -46.3548}}
          destination={{latitude : -23.0116, longitude : -46.3549}}
          apikey={GOOGLE_MAPS_APIKEY}
        />
        )
      }
    }

    const animateMap = () => {
      mapView.current.animateToRegion({
          latitude: -23.4902,
          longitude: -46.3533,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
      }, 1000);
    }

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
          initialRegion={coords}
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
              <Direcao/>
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
      width : '20%',
      height : '100%',
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      position : 'absolute',
      backgroundColor : '#FFF',
      borderRadius : 10,
      marginLeft : '0.5%'
    },

    btLavaRapidos : {
      width : '12%',
      height : '100%',
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      marginLeft : '21.5%',
      position : 'absolute',
      backgroundColor : '#FFF',
      borderRadius : 10,
    },

    btHistorico : {
      width : '22%',
      height : '100%',
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      marginLeft : '48.3%',
      position : 'relative',
      backgroundColor : '#FFF',
      borderRadius : 10
    },

    btConfiguracoes : {
      width : '28%',
      height : '100%',
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      marginLeft : '70.8%',
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
    width : '23%',
    height : '146%',
    marginTop : '-21%',
    marginLeft : '77.5%',
    borderRadius : 10,
  }
})

export default Menu;