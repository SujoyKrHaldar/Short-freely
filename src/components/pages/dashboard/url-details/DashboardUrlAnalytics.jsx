/* eslint-disable react/prop-types */
function DashboardUrlAnalytics({ data }) {
  // console.log(data);

  return (
    <div id="analytics" className="border border-zinc-300 bg-white">
      <div className="p-8 border-b border-zinc-300 w-full flex items-start justify-between">
        <h2 className="text-2xl font-bold">Analytics</h2>

        <div className="">
          <p>Total clicks</p>
          <p className="text-5xl font-bold">{data.analyticsCount.length}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardUrlAnalytics;
