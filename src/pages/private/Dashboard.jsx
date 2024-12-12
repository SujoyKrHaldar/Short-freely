import { MetaTags } from "../../components/shared";
import { DashboardHome } from "../../components/pages/dashboard";

function Dashboard() {
  return (
    <>
      <MetaTags
        title="Dashboard • Url shortner"
        description=""
        conicalRoute="dashboard"
      />

      <DashboardHome />
    </>
  );
}

export default Dashboard;
