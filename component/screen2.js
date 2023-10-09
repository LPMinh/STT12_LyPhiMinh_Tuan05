import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
export default function screen2({navigation}) {
    return (
      <View style={styles.container}>
          <View style={styles.product_container}>
              <View style={styles.image_container}>
                  <Image source={require('../assets/vs_blue.png')}  style={{width:null,height:'50%',resizeMode:"contain"}}/>
              </View>
              <Text style={styles.textName}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
  
          </View>
          <View style={styles.content_color_container}>
              <Text style={{textAlign:'left'}}>Chọn một màu bên dưới</Text>
              <View style={styles.color_container}>
                  <Image source={require('../assets/white.png')}  style={{width:'30%',height:'24%',resizeMode:'contain'}}/>
                  <Image source={require('../assets/blue.png')}  style={{width:'30%',height:'24%',resizeMode:'contain'}}/>
                  <Image source={require('../assets/black.png')}  style={{width:'30%',height:'24%',resizeMode:'contain'}}/>
                  <Image source={require('../assets/red.png')}  style={{width:'30%',height:'24%',resizeMode:'contain'}}/>
              </View>
              <TouchableOpacity style={[styles.button_finish]} onPress={() => navigation.navigate('screen1')}>
  
                  <Text style={[{color:'white',fontWeight:'bold'}]}>Xong</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    product_container:{
      width:'90%',
      height:'30%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1
    },
    image_container:{
      width:'40%',
      height:'100%',
      justifyContent:'center',
    },
    textName:{
      width:'60%',
      fontFamily:'Roboto',
      fontSize:15,
      fontWeight:'400',
      textAlign:'left'
    },
    content_color_container:{
      width:'90%',
      height:'70%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'grey'
     
    },
    color_container:{
      width:'100%',
      height:'80%',
      
      justifyContent:'space-between',
      alignItems:'center',
      
    },
    button_finish:{
      width:'90%',
      height:'10%',
      backgroundColor:'#1952E2',
      borderRadius:6,
      justifyContent:'center',
      alignItems:'center',
      marginTop:20
    }
    
    
  
  });
  