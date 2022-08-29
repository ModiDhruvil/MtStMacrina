import { StyleSheet, Platform } from 'react-native';
import { Color, sizeFont, sizeWidth } from '@theme';
import color from '../../theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.grey,
    marginTop: sizeWidth(10), margin: sizeWidth(2),
    borderRadius: sizeWidth(5),
    width:"100%",
    height:"100%"


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
    width: "100%",
  
    borderRadius:sizeWidth(5),
   
    

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
  headerView:{
flex:1,
flexDirection:"row",
justifyContent:"space-between",
  },
  RightBack:{
    height:sizeWidth(9),
    width:sizeWidth(9),
    backgroundColor:Color.white,
    alignItems:'center',
    alignSelf:'flex-start',
    borderRadius:sizeWidth(10),
    justifyContent:"flex-start",
    marginLeft:sizeWidth(3),
    marginTop:sizeWidth(3),
  },

  copaciaImag:{
    height: sizeWidth(6),
    width: sizeWidth(6),
    resizeMode: 'cover',
   marginTop:sizeWidth(1.5),
    tintColor:Color.gray,
  
    alignSelf:'center',
 justifyContent:"center",
 alignItems:"center"

 
  },
  trip_text:{
fontSize:sizeFont(16),
fontWeight:"bold",
marginTop:sizeWidth(5),
  },
  leftBack:{
    height:sizeWidth(9),
    width:sizeWidth(9),
    backgroundColor:Color.white,
    alignItems:'center',
    alignSelf:'flex-start',
    borderRadius:sizeWidth(10),
    justifyContent:"flex-start",
    marginRight:sizeWidth(2),
    marginTop:sizeWidth(3),
  },
  leftBackImag:{
    height: sizeWidth(5),
    width: sizeWidth(5),
    resizeMode: 'cover',
   marginTop:sizeWidth(2),
   
    tintColor:Color.gray,
  
    alignSelf:'center',
 justifyContent:"center",
 alignItems:"center"

 
  },
  FooterView1:
{
  flex:1,
  flexDirection:'row',
  justifyContent:"space-between",
  marginTop:sizeWidth(40),
  marginLeft:sizeWidth(3),
  marginRight:sizeWidth(3),
},
firstImage:{
  height:sizeWidth(20),
  width:sizeWidth(20),
  backgroundColor:Color.white,
 
  borderRadius:sizeWidth(5),
  
  borderWidth:sizeWidth(0.2),
  borderColor:Color.white,
 

},
firstImage1:{
  height:sizeWidth(22),
  width:sizeWidth(22),
  backgroundColor:Color.white,
 
  borderRadius:sizeWidth(5),
  
  borderWidth:sizeWidth(1),
  borderColor:Color.white,
 

},
firstImageView:{
  height:sizeWidth(22),
  width:sizeWidth(22),
  backgroundColor:Color.white,
  borderRadius:sizeWidth(5),

},

 
  capadocial_View:{
    flexDirection:"row",
  
     
  },
  ListRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:sizeWidth(1.5)
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
  backgroundColor:"#f5f4f0",
 opacity:1,
  height:sizeWidth(10),
  width:sizeWidth(25),
  alignItems:"center",
borderRadius:sizeWidth(5),
justifyContent:"center",
marginHorizontal:sizeWidth(8),
 marginVertical:sizeWidth(20),
 marginTop:sizeWidth(-3),
 marginLeft:-5,
  },
  btnIcon: {

    height:sizeWidth(5),
    width:sizeWidth(5),
    resizeMode: 'contain',
    marginLeft:sizeWidth(0.5),
    marginTop:sizeWidth(0.5),
    tintColor:Color.button,
    alignContent:"center",
     alignItems:"center",
     alignSelf:'center'

  },
  roundIcon:{
    height:sizeWidth(6),
    width:sizeWidth(6),
    backgroundColor:Color.white,
    borderRadius:sizeWidth(10),
     alignContent:"center",
     alignItems:"center",
     marginLeft:sizeWidth(3)

  },
  booktext:{
fontSize:sizeFont(18),
fontWeight:"bold",
color:Color.white,
  },

  Bookbutton: {
    width: '85%',
    height: sizeWidth(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizeWidth(10),
    paddingLeft: sizeWidth(20),
    paddingRight: sizeWidth(20),
    backgroundColor: Color.button,
    marginLeft:10,
    marginTop:sizeWidth(5),
    shadowColor: Color.button,
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 10
    }
  
     

  },
  footerButton:{
    position:"absolute",
    bottom:0,
    backgroundColor:Color.white,
    width: '100%',
    height: sizeWidth(30),
    alignContent:"center",
    alignItems:"center",

  },
  total:{
    flex:1,
    flexDirection:"row",
   
  
 
    height:sizeWidth(10),
    width:sizeWidth(20),
    borderRadius:sizeWidth(5),
 
 
 
 
    },
    cappocialVeiw:{
   
   
      marginTop:sizeWidth(10),
      height:sizeWidth(10),
      width:sizeWidth(50),
      borderRadius:sizeWidth(5),
        
      },
     ratingListVeiw:{
   
   
        marginTop:sizeWidth(20),
        height:sizeWidth(10),
        width:sizeWidth(50),
        borderRadius:sizeWidth(5),
        flexDirection:"row",
        justifyContent:"space-between"
        
          
        },
        ratingListVeiw1:{
   
   
          marginTop:sizeWidth(5),
          height:sizeWidth(200),
          width:"90%",
          textAlign:'center',
          alignItems:"center",
        
          
          
            
          },
          conent_text:{
            lineHeight:sizeWidth(7),
            fontWeight:"normal",
            fontSize:sizeFont(12),
            textAlign:'center',
          },
  text:{
    fontSize:sizeFont(16),
    fontWeight:"bold",
    color:"#c6816a"
  },
  text1:{
    fontSize:sizeFont(18),
    fontWeight:"bold",
    marginLeft:sizeWidth(72),
    alignSelf:"flex-end",
     
  },
  text2:{
    fontSize:sizeFont(20),
    fontWeight:"bold",
    marginLeft:sizeWidth(-2),
  
     
  },
  text3:{
    fontSize:sizeFont(14),
    fontWeight:"normal",
    
    color:color.gray,
    marginLeft:sizeWidth(2)
 
  
   
     
  },
  listImage:{
    height: sizeWidth(5),
    width: sizeWidth(5),
    resizeMode: 'contain',
   
    tintColor:Color.button,
     
    alignSelf:'center',
  
   marginBottom:sizeWidth(2),
  
  

  },
  capadocia_text:
  {
    fontSize:sizeFont(16),
    fontWeight:"bold",
    color:"#000000",
   marginLeft:sizeWidth(0),
    marginTop:sizeWidth(3)
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
