import '../../assets/scss/left-side/headers.scss'
import { GearFill } from 'react-bootstrap-icons';

const Header = () => {
	return (
		<div className="left-side__header">
			<p className="left-side__header-title">All Messages</p>
			<GearFill className="left-side__header-icon" size={25} />
		</div>
	);
};

export default Header;