import { DashboardAccount } from "../../components/pages/dashboard";
import { MetaTags } from "../../components/shared";

function Account() {
  return (
    <>
      <MetaTags
        title="Account • Url shortner"
        description="Manage your account"
        conicalRoute="dashboard/account"
      />

      <DashboardAccount />
    </>
  );
}

export default Account;
