import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function screen1({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.image_container}>
            <Image source={require('../assets/vs_blue.png')}  style={{width:'100%',height:'100%'}}/>

        </View>
        <View style={[styles.content_container]}>

          <Text style={[styles.textName]}>Điện Thoại Vsmart Joy 3
  Hàng chính hãng</Text>
          <View style={[styles.star_container_all]}>
              <View style={[styles.star_container]}>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
              </View>
              <Text>(Xem 828 đánh giá)</Text>
          </View>
          <View style={[styles.price_container]}>
            <Text style={[styles.textPrice]}>1.790.000đ</Text>
            <Text style={[styles.textPriceOld]}>1.990.000đ</Text>

          </View>
          <TouchableOpacity style={[styles.button_color]} onPress={() => navigation.navigate('screen2')}>
            <Text style={[styles.button_text]}>4 MÀU-CHỌN MÀU</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button_choose]}>
            <Text style={[{color:'white',fontWeight:'bold'}]}>CHỌN MUA</Text>
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
  image_container:{
    width:'90%',
    height:'60%'
  },
  textName:{
    width:'100%',
    fontFamily:'Roboto',
    fontSize:15,
    fontWeight:'400',
    textAlign:'left',
  },
  star_container_all:{
    width:'100%',
    height:'10%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  star_container:{
    width:'40%',
    height:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  price_container:{
    width:'100%',
    height:'10%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  textPrice:{
    fontFamily:'Roboto',
    fontSize:20,
    fontWeight:'700',
    textAlign:'center',
    color:'#FF0000',
  },
  textPriceOld:{
    fontFamily:'Roboto',
    fontSize:15,
    fontWeight:'400',
    textAlign:'center',
    color:'#9B9B9B',
    textDecorationLine:'line-through'
  },
  content_container:{
    width:'90%',
    height:'40%',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center'
  },
  button_color:{
    width:'100%',
    height:'20%',
    backgroundColor:'#FFFFFF',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'grey',
    borderWidth:1
    
  },
  button_choose:{
    width:'100%',
    height:'20%',
    backgroundColor:'#EE0A0A',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end'
  },
  
  
});