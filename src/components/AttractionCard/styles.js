import { StyleSheet,Dimensions } from "react-native";

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
   card:{
        padding:4,
        borderWidth:1,
        borderColor:'#E2E2E2',
        borderRadius:15,
        marginBottom:12


   },
   image:{
    width: (width -96) /2,
    height:120,
    borderRadius:15,


   },
   title:{
    fontSize:14,
    fontWeight:'bold',
    marginTop:8,
    marginLeft:6,
    color:'#000000'
   },
   subtitle:{
        fontSize:10,
        color:'#000000',
        
   },
   icon:{
    width: 10,
    height: 10,
    marginRight: 6,

   },
   row:{
    marginBottom:12,
    marginLeft:6, 
    marginTop:2,
    flexDirection: 'row',
    alignItems: 'center',

   }
});

export default styles;