import React from "react";
import Button from "../../UI/Button";
import ScrollAnimation from "react-animate-on-scroll";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "../style/homepage.scss";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ProductCTA() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
			<div className="productcta__container--whole">
				<div className="productcta__title--black">
					We are always here to help. Get in touch！
				</div>

				<Button
					color="primary"
					variant="contained"
					className="product-container__button--blue-thin"
				>
					Ask me questions
				</Button>

				<div className="productcta__title--black">
					Subscribe our newsletter
				</div>
				<form noValidate autoComplete="off">
					<div className="product-container__input-container--whole">
						<TextField
							id="outlined-basic"
							label="Email-address"
							variant="outlined"
							fullWidth={true}
							style={{ backgroundColor: "#E5E5E5" }}
						/>
						<div className="product-container__button--blue">
							<Button
								onClick={handleClick}
								color="primary"
								variant="contained"
							>
								Subscribe
							</Button>
						</div>

						<Snackbar
							open={open}
							autoHideDuration={6000}
							onClose={handleClose}
						>
							<Alert onClose={handleClose} severity="info">
								Thanks for subscribing our website
							</Alert>
						</Snackbar>
					</div>
				</form>
			</div>
		</ScrollAnimation>
	);
}

export default ProductCTA;
