import React from 'react';
import {
 SafeAreaView,
 StatusBar,
 StyleSheet,
 View,
 Text,
 Dimensions,
 TouchableOpacity,
 Image,
 Alert
} from 'react-native';
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({

     
     webClientId : '172522252017-1nmito1jo8kqj8vlffh4n9l7m3a76t33.apps.googleusercontent.com',
     
    
    offlineAccess: true,
})
const App = () => {
    const signInWithGoogle = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          
          
          const { idToken } = await GoogleSignin.signIn();
          
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
          // Sign in to Firebase using the Google credential
          await auth().signInWithCredential(googleCredential);
          alert("Signed in")
        } catch (error) {
            alert(error)
          // Handle the error appropriately (e.g., show an error message to the user)
        }
      };
 return (
  <SafeAreaView style={styles.safeArea}>
   <StatusBar barStyle="light-content" />
   <View style={styles.container}>
    <View style={styles.topContent}>
     <Text style={styles.mainText}>
      Social Auth
     </Text>
    </View>
    <View style={styles.bottomContent}>
     <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
      <Image
       style={styles.googleIcon}
       source={{
        uri: "https://i.ibb.co/j82DCcR/search.png",
       }}
      />
      <Text style={styles.googleButtonText}>Sign in with Google</Text>
     </TouchableOpacity>
    </View>
   </View>
  </SafeAreaView>
 );
};
const styles = StyleSheet.create({
 safeArea: {
  backgroundColor: "#262b2f"
 },
 container: {
  height: Dimensions.get('window').height,
  backgroundColor: "#262b2f",
 },
 topContent: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },
 bottomContent: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },
 mainText: {
  fontSize: 54,
  color: "white",
 },
 googleButton: {
  backgroundColor: "white",
  borderRadius: 4,
  paddingHorizontal: 34,
  paddingVertical: 16,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
 },
 googleButtonText: {
  marginLeft: 16,
  fontSize: 18,
  fontWeight: '600'
 },
 googleIcon: {
  height: 24,
  width: 24
 }
});
export default App;