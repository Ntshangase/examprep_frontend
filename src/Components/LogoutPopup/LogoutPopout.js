import PropTypes from "prop-types";
import React from "react";


function LogoutPopout({ onLogout}) {

	return (
		<div>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
}
LogoutPopout.propTypes = {
    onLogout: PropTypes.func.isRequired,
}

export default LogoutPopout;
