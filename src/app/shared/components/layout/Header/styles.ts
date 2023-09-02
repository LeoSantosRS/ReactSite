import { Environment } from "../../../environment";

export const styles = ({
  container: {
    width: '100%',
    height: '25%',
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
  }
});

