const styles = theme => ({
    container: {
      height:theme.spacing(80)
    },
    paper: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height:'100%',
      backgroundColor: '#FEFEFF'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })

  export default styles;