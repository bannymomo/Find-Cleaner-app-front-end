import Background from '../../assets/images/auth-background.jpg'

const styles = theme => ({
  container: {
    paddingTop: '10vh',
    height: '85vh',
    // marginTop:'15vh',
  },
  backGround: {
    backgroundImage: `url(${Background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: '95vh'
  },
  paper: {
    // marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FEFEFF'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#2196f3'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 4),
  },
})

export default styles;