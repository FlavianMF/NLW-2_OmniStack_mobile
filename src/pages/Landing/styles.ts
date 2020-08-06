import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: "center",
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: "contain",
  },

  tittle: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  tittleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  button: {
    height: 150,
    width: '48%',
    borderRadius: 10,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#9871f5',
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
  },
  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    marginTop: 40,
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
  }
});

export default styles;
