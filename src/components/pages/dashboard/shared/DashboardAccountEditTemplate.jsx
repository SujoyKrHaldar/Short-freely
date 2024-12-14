/* eslint-disable react/prop-types */
function DashboardAccountEditTemplate({ children, title, description }) {
  return (
    <div className="w-full h-full bg-white border border-zinc-300 flex ">
      <div className="space-y-1 px-10 py-7 w-1/2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-zinc-500 text-sm">{description}</p>
      </div>
      {children}
    </div>
  );
}

export default DashboardAccountEditTemplate;
