import { Unlink, QrCode, MousePointerClick as Click } from "lucide-react";

/* eslint-disable react/prop-types */

function DashboardHomeStats({ data }) {
  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-3 sm:grid-cols-2">
      <div className="px-10 py-6 bg-white border border-zinc-300 flex items-start gap-4">
        <div className="p-4 bg-zinc-200 rounded-full">
          <Unlink />
        </div>
        <div className="space-y-1">
          <p className="text-5xl font-bold">{data?.total}</p>
          <p>Links created</p>
        </div>
      </div>

      <div className="px-10 py-6 bg-white border border-zinc-300 flex items-start gap-4">
        <div className="p-4 bg-zinc-200 rounded-full">
          <QrCode />
        </div>
        <div className="space-y-1">
          <p className="text-5xl font-bold">{data?.total}</p>
          <p>QR generated</p>
        </div>
      </div>

      <div className="px-10 py-6 bg-white border border-zinc-300 flex items-start gap-4">
        <div className="p-4 bg-zinc-200 rounded-full">
          <Click />
        </div>
        <div className="space-y-1">
          <p className="text-5xl font-bold">{data?.total}</p>
          <p>Clicks counted</p>
        </div>
      </div>
    </section>
  );
}

export default DashboardHomeStats;
