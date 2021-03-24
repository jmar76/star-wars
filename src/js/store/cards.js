import React, { Fragment } from "react";
import PropTypes from "prop-types";

function ImageData(props) {
	return (
		<Fragment>
			<div className="col-md-4 color">
				<h2>Description</h2>
				<p>{props.description}</p>
			</div>
			<div className="col-md-4 ">
				<img src={props.image} className="hover" width="100%" height="450px" alt="..." />
			</div>
		</Fragment>
	);
}
ImageData.propTypes = {
	description: PropTypes.string,
	image: PropTypes.string
};

export default ImageData;
