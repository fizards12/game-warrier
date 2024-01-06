/* eslint-disable react/display-name */
import { Link } from "@mui/joy";
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
const PageLink = forwardRef((props, ref) => <NavLink ref={ref} {...props} />);
const Navlink = (props) => {
  return (
    <Link
      {...props}
      component={PageLink}
      to={props.to}
      sx={(theme) => ({
        width: {
          xs: "100%",
          md: "fit-content",
        },
        marginInline:"unset",
        "&.active": {
          color: {
            xs: theme.vars.palette.warning[100],
            md: theme.vars.palette.warning[400]
          },
          bgcolor:{
            xs: theme.vars.palette.warning[400],
            md:"initial"
          }
        },
        "&:hover": {
          color: {
            xs: theme.vars.palette.warning[50],
            md: theme.vars.palette.warning[300]
          },
          bgcolor:{
            xs: theme.vars.palette.warning[300],
            md:"initial"
          }
        },
      })}
    >
      {props.title}
    </Link>
  );
};

export default Navlink;
