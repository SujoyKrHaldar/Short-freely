import { MetaTags } from "../../components/shared";

function Account() {
  return (
    <>
      <MetaTags
        title="Account • Url shortner"
        description=""
        conicalRoute="dashboard/account"
      />

      <section className="container space-y-8 py-8">
        <h1 className="text-4xl">Account</h1>
        <div className="w-full h-[400px] bg-white border border-zinc-300"></div>
      </section>
    </>
  );
}

export default Account;
