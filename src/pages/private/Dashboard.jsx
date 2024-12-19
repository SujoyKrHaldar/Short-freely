import { MetaTags } from "../../components/shared";
import { DashboardHome } from "../../components/pages/dashboard";

function Dashboard() {
  return (
    <>
      <MetaTags
        title="Welcome to Dashboard • Short Freely"
        description="Manage your links, check analytics, manage account and many more."
        conicalRoute="dashboard"
      />

      <DashboardHome />
    </>
  );
}

export default Dashboard;
