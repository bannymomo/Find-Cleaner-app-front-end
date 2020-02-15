import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function FloatingActionButtonSize() {
  const listArray = [
    { icon: "fas fa-broom", description: "Home Cleaning" },
    { icon: "fas fa-truck", description: "Full House Removals" },
    { icon: "fas fa-dolly-flatbed", description: "Few items Removals" },
    { icon: "fas fa-briefcase", description: "Business & Admin" },
    { icon: "fas fa-desktop", description: "Computers & IT" },
    { icon: "fas fa-tools", description: "Furniture Assembly" },
    { icon: "fas fa-paint-roller", description: "Handyman" },
    { icon: "fas fa-pencil-ruler", description: "Marketing & Design" },
    { icon: "fas fa-video", description: "Events & Photography" },
    { icon: "fas fa-music", description: "Fun & Quirky" },
    { icon: "fas fa-seedling", description: "Home & Gardening" },
    { icon: "fas fa-basketball-ball", description: "Anything" }
  ];
  const classes = useStyles();

  return (
    <div className="list-array__container--whole">
      {listArray.map(list => {
        return (
          <div className="list-array__container--single">
            <div>
              <Fab color="secondary" className={classes.margin}>
                <i class={list.icon}></i>
              </Fab>
            </div>
            <span>{list.description}</span>
          </div>
        );
      })}
    </div>
  );
}
