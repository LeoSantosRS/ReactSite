import { Environment } from "../../../environment";

export const styles = ({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: Environment.COLOR_SECONDARY
  },
  headerContent: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 45
  },
  BussinesLogo: {
    height: 35,
    width: 80,
    resizeMode: 'contain',
  },
  iconPage: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  HeaderContent: {
    width: '100%',     
  },
  ImgArea: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  img:{    
    position: 'absolute',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)'    
  },
  menuArea:{
    width: '100%',
    heigth: 35,
    bacgroundColor: Environment.COLOR_TERTIARY
  }
});

