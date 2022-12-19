import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Layout } from "./components/Layout/Layout";
import AuthPage from "./pages/auth";
import { GroupsPage } from "./pages/dashboard";
import { DashboardPage } from "./pages/dashboard/DashboardPage";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { networkMode: "always" },
		mutations: { networkMode: "always" },
	},
});

function App() {
	const [loc, setLoc] = useLocation();
	// useEffect(() => {
	// 	setLoc("/dashboard");
	// }, []);
	return (
		<QueryClientProvider client={queryClient}>
			<Switch>
				<Route path="/auth">
					<AuthPage />
				</Route>
				<Route path="/groups/:schoolId">
					{(params) => (
						<Layout>
							<GroupsPage schoolId={params.schoolId} />
						</Layout>
					)}
				</Route>
				<Route path="/dashboard">
					<Layout>
						<DashboardPage />
					</Layout>
				</Route>
			</Switch>
		</QueryClientProvider>
	);
}

export default App;
