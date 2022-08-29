import { StyleSheet, Platform } from 'react-native';
import { Color, sizeFont, sizeWidth } from '@theme';
import color from '../../theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.grey,
    marginTop: sizeWidth(10), margin: sizeWidth(2),
    borderRadius: sizeWidth(5),


  },
  DiscoverTxt:{
    fontSize:sizeFont(30),
    marginTop:sizeWidth(5),
    marginLeft:sizeWidth(3),
    fontWeight:'bold'
  },
  newWord:{
    fontSize:sizeFont(30),
   
    marginLeft:sizeWidth(3),
    fontWeight:'bold'
  }
  ,
  input: {
    height: 40,
     
  color:Color.text,
    padding: 10,
    fontSize:16,
    fontWeight:"bold"
  },
  serchview:{
    height: 40,
    flexDirection:"row",
    backgroundColor:"#fff6f7",
    width:"75%",
    borderRadius:sizeWidth(4)
   

  },
  filterButton:{
    height:sizeWidth(15),
    width:sizeWidth(15),
    borderRadius:sizeWidth(3),
    backgroundColor:Color.button,
    marginLeft:sizeWidth(5),
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    marginTop:sizeWidth(10),
    shadowColor: Color.button,
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 10
    }
    
  },
  image1:{
   
    height: sizeWidth(84),
    width: sizeWidth(76),
    left: 30,
    borderRadius:sizeWidth(5),
   
    marginTop:sizeWidth(25),

    shadowColor: "#c0cfcc",
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 10
    },
    backgroundColor:"#f0f2f1"
  },
  capadocial_View:{
    flexDirection:"row",
  
     
  },
  layputView:{
  
alignItems:"center",alignSelf:"center",
marginTop:sizeWidth(53),
width:"95%",
borderRadius:sizeWidth(5),
 opacity:0.95,
 backgroundColor:"#fff",
 
  },
  tarkyView:{
  backgroundColor:"#fdfffe",
 opacity:1,
  height:sizeWidth(4),
  width:sizeWidth(15),
  alignItems:"center",
borderRadius:sizeWidth(5),
justifyContent:"flex-start",
marginLeft:sizeWidth(-30),
marginTop:sizeWidth(5)
  },
  text:{
    fontSize:sizeFont(10),
    fontWeight:"bold",
    color:Color.text
  },
  capadocia_text:
  {
    fontSize:sizeFont(16),
    fontWeight:"bold",
    color:"#000000",
   marginLeft:sizeWidth(0),
    marginTop:sizeWidth(3)
  },
  copaciaImag:{
    height: sizeWidth(6),
    width: sizeWidth(6),
    resizeMode: 'contain',
   
    tintColor:"black",
    marginTop:sizeWidth(2),
    alignSelf:'center',
 
   marginBottom:sizeWidth(2)

  },
  imageroundshap:{
    height:sizeWidth(9),
    width:sizeWidth(9),
    backgroundColor:"#fff",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:sizeWidth(10),
    marginLeft:sizeWidth(15),
    
   

  }
  ,
  number:{
    fontSize:sizeFont(16),
    fontWeight:"600",
    color:"#000000",
    marginLeft:sizeWidth(-25),
    marginTop:sizeWidth(1),
    marginBottom:sizeWidth(5)

  },
  FooterView:{
    backgroundColor:Color.white,
    width:"100%",
    height:sizeWidth(20),
  


  },
  footerlist:{
    justifyContent:'space-between',
    flexDirection:"row",
    width:"80%",
    marginLeft:sizeWidth(10),
    marginTop:sizeWidth(3),


  },
  homeround:{
    height:sizeWidth(12),
    width:sizeWidth(12),
    backgroundColor:Color.button,
    alignItems:"center",
    alignSelf:"center",
    borderRadius:sizeWidth(10),
   
  },
  imageFoot:{
    height: sizeWidth(5),
    width: sizeWidth(5),
    resizeMode: 'contain',
   
    tintColor:Color.grey,
    marginTop:sizeWidth(2),
    alignSelf:'center',
 opacity:0.4,
   marginBottom:sizeWidth(2)

  },
  home_imageFoot:{
    height: sizeWidth(5),
    width: sizeWidth(5),
    resizeMode: 'contain',
   
    tintColor:"white",
    marginTop:sizeWidth(3),
    alignSelf:'center',
 
   marginBottom:sizeWidth(2)

  },




});
