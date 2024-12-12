import { MetaTags } from "../../components/shared";

function CreateShortUrl() {
  return (
    <>
      <MetaTags title="Create short url • Url shortner" />

      <section className="container space-y-8 py-8">
        <h1 className="text-4xl">Create url</h1>
        <div className="w-full h-[400px] bg-white border border-zinc-300"></div>
      </section>
    </>
  );
}

export default CreateShortUrl;
