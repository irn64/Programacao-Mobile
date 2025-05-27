import { StyleSheet, View } from 'react-native'
import { Card, Text, Avatar, IconButton, ActivityIndicator, MD2Colors } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'

export default function HomeScreen({navigation, route}) {

    // Um estado para armazenar os usuários recebidos
    const [usuarios, setUsuarios] = useState()

    // Faz algo quando o componente é montado
    useEffect(() => {
        axios.get("https://dummyjson.com/users?delay=2000")
        .then(resposta => {
            console.log(resposta.data.users)
            setUsuarios(resposta.data.users)
        })
        .catch(erro => {
            alert('Erro ao comunicar com a API!')
        })
    }, [])


  return (
    <View>
      <FlatList 
        data={usuarios}
        renderItem={({item}) => (
            <Card 
            style={{margin: 5}}
            onPress={() => navigation.navigate('UsuarioScreen', item.id)}
            >
                <Card.Title
                    title={item.firstName + item.lastName}
                    subtitle={item.email}
                    left={(props) => <Avatar.Image {...props} icon="folder" source={{uri: item.Image}} />}
                    right={(props) => <IconButton icon="chevron-right" size={30} />} 
                    
            />
            </Card>
        )}
        ListEmptyComponent={() => (
            <View style={styles.loadingContainer}>
                <ActivityIndicator animating={true} color={MD2Colors.red800} />
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: 50
    },
    loadingContainer: {
        height: 750,
        alignItems: 'center',
        justifyContent: 'center'
    }
})