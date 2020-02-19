import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';

import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Maps from './Maps';

import "../style/orderHistory.scss";

const useStyles = makeStyles({
    formControl: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
    }
});

export default function OrderInformaiton() {
    const classes = useStyles();
    const listArray = [
        { icon: "fab fa-facebook", description: "facebook" },
        { icon: "fab fa-twitter", description: "twitter" },
        { icon: "fab fa-instagram", description: "instagram" },
        { icon: "fas fa-briefcase", description: "and so on" },
    ]

    //more options dropdown
    const [state, setState] =React.useState({
        options:'',
        name:'hai',
    });
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

    // backdrop for google map
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    //toggle button
    const [selected, setSelected] = React.useState(false);

    return (
        <div className="order-information">
			<Grid container className="order-information__top" spacing={2}>
				<Grid item xs={8}>
                    <div className="order-information__head">
                        <ul className="order-information__status">
                            <li className="order-information__status-active">OPEN</li>
                            <li>CANCELLED</li>
                            <li>ASSIGNED</li>
                            <li>COMPLETED</li>
                        </ul>
                        <ToggleButton
                        size="small"
                        // value="follow"
                        selected={selected}
                        onChange={() => {
                            setSelected(!selected);
                        }}
                        >
                            <FavoriteBorderIcon fontSize="small"/>
                            <p>Follow</p>
                        </ToggleButton>
                    </div>
                    <Typography variant="h4" component="h2">
                        House Cleaning
                    </Typography>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="user1" src="/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="POSTED BY"
                            secondary={
                                <Typography
                                    variant="body2"                                
                                    color="textPrimary"
                                >
                                    Gaurav L.
                                </Typography>
                            }
                            />
                            <p className="order-information__postTime">20 mins ago</p>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon>
                                <AddLocationOutlinedIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText
                            primary="LOCATION"
                            secondary={
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    116 Adelaide St, Brisbane City
                                </Typography>
                            }
                            />
                            <div className="order-information__map">
                                <Button  color="lightgreen" onClick={handleToggle}>
                                    View Map
                                </Button>
                                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                                    <Maps />
                                </Backdrop>
                            </div>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon>
                                <DateRangeOutlinedIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText
                            primary="DUE DATE"
                            secondary={
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    Saturday, 15th Feb 2020
                                </Typography>
                            }
                            />
                        </ListItem>
                    </List>
				</Grid>
				<Grid item xs={4}>
                    <Card>
                        <CardContent className="order-information__budget">
                            <Typography className={classes.title} gutterBottom>
                                TASK BUDGET
                            </Typography>
                            <Typography variant="h4" component="p">
                                $180
                            </Typography>
                        </CardContent>
                        <CardActions className="order-information__offer">
                            <button className="order-information__offer--btn">Make an offer</button>
                        </CardActions>
                    </Card>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel margin="dense" ref={inputLabel} htmlFor="more-options">
                            More Options
                        </InputLabel>
                        <Select
                        native
                        margin="dense"
                        value={state.options}
                        onChange={handleChange('options')}
                        labelWidth={labelWidth}
                        inputProps={{
                            name: 'options',
                            id: 'more-options',
                        }}
                        >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                    <Box border={1} borderRadius={5} borderColor="#eee" className="order-information__share">
                        <InputLabel className="order-information__share--label">
                            SHARE
                        </InputLabel>
                        <div className="order-information__share--whole">
                        {listArray.map(list => {
                            return (
                                <a href="#" className="order-information__share--single">
                                    <i class={list.icon}></i>
                                </a>
                            )
                        })}
                        </div>
                    </Box>
				</Grid>
			</Grid>
            <div className="order-information__details">
                <Typography variant="h6" component="p">
                    DETAILS
                </Typography>
                <Typography variant="body2" component="p">
                    I need dlkalgj aepwgk'ape [apeg[ap aEOihgao ]] jeofiahgiuh ioweja owea a aeg aweoig. dlkalgj aepwgk'ape [apeg[ap aEOihgao ]] jeofiahgiuh ioweja owea a aeg aweoig. dlkalgj aepwgk'ape [apeg[ap aEOihgao ]] jeofiahgiuh ioweja owea a aeg aweoig.
                </Typography>
            </div>

        </div>

    );
}