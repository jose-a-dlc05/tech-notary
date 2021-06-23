import React, { Component } from "react";
import PropTypes from "prop-types";
// PropTypes is a special propTypes property used to run type-checking on props in a component.

export default class ToggableTab extends Component {
	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};

	render() {
		const {
			onClick,
			props: { activeTab, label },
		} = this;

		let className = "tab-list-item";

		if (activeTab === label) {
			className += " tab-list-active";
		}

		return (
			<li className={className} onClick={onClick}>
				{label}
			</li>
		);
	}

	/**
	 * The PropTypes in this component are used to ensure that activeTab and label are a string and required. onClick is set to be a function that is also required.
	 */
	static propTypes = {
		activeTab: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	};
}
