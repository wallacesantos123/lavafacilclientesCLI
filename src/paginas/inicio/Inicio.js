import * as React from 'react';
import { KeyboardAvoidingView, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
//import auth from '@react-native-firebase/auth';

const Inicio = ({navigation}) => {
    /*// Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <KeyboardAvoidingView style={styles.body}>
                <View style={styles.image}>
                    <Image source={require('../../../assets/logo.png')}/>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity 
                        style={styles.entrar}
                        //onPress={() => navigation.navigate('Login')}
                        onPress={() => {navigation.navigate('Login')}}
                    >
                        <Text style={styles.txtEntrar}>ENTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.cadastrar}
                        onPress={() => navigation.navigate('Cadastrar')}
                    >
                        <Text style={styles.txtCadastrar}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

    return (
        <View>
            <Text>Welcome {user.email}</Text>
        </View>
    );*/
    return (
        <KeyboardAvoidingView style={styles.body}>
            <View style={styles.image}>
                <Image source={require('../../../assets/logo.png')}/>
            </View>
    
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.entrar}
                    //onPress={() => navigation.navigate('Login')}
                    onPress={() => {navigation.navigate('Login')}}
                >
                    <Text style={styles.txtEntrar}>ENTRAR</Text>
                </TouchableOpacity>
    
                <TouchableOpacity 
                    style={styles.cadastrar}
                    onPress={() => navigation.navigate('Sql')}
                >
                    <Text style={styles.txtCadastrar}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
} 

const styles = new StyleSheet.create({
    body : {
        flex : 1,
        backgroundColor : '#FFF',
        alignItems : 'center',
        borderWidth : 2,
        borderWidth : 2,
        borderColor : '#FFF'
    },

    image : {
        marginTop : '5%',
        alignItems : 'center',
        justifyContent : 'center',
    },

    container : {
        width : '100%',
        height : '100%',
        backgroundColor : '#FFF',
        alignItems : 'center',
        marginTop : '20%',
    },

    entrar : {
        width : '90%',
        height : 52,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#FFF',
        marginTop : 25,
        borderWidth : 2,
        borderRadius : 5
    },

    txtEntrar : {
        fontSize : 20,
        fontWeight : 'bold'
    },

    cadastrar : {
        width : '90%',
        height : 52,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#000',
        marginTop : 10,
        borderWidth : 1,
        borderRadius : 5
    },

    txtCadastrar : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#FFF'
    },
})

export default Inicio;