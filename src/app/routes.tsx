import { Routes as RoutesRouter, Route } from "react-router-dom";
import { Home } from "../pages";

const Routes = () => {
	return (
		<RoutesRouter>
			<Route path="/" element={<Home />} />
		</RoutesRouter>
	);
};

export default Routes;
