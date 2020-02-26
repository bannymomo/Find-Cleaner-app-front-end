import Background from '../../../assets/images/auth-background.png'

const styles = theme => ({
  container: {
    paddingTop: '15vh',
    height: '100vh',

  },
  backGround: {
    backgroundImage: `url(${Background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FBFCFF',
    borderRadius: '10px',
    height:'50vh'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(4),
  },
})

export default styles;