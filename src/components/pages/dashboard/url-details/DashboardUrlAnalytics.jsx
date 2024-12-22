/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ErrorFallbackUi from "../shared/ErrorFallbackUi";
import { metricImgUrl } from "../../../../utils/imageUrls";
import PieChartComponent from "../shared/charts/PieChartComponent";
import LineChartComponent from "../shared/charts/LineChartComponent";
import BarChartComponent from "../shared/charts/BarChartComponent";

function DashboardUrlAnalytics({ data }) {
  const { todayCount } = useGetTodaysClickCounts(data);
  const { country, device, os, browser, dayCount, locations } =
    processData(data);

  return (
    <div id="analytics" className="border border-zinc-400 bg-zinc-100">
      <div className=" flex flex-col tablet:flex-row items-center justify-between bg-white border-b border-zinc-400">
        <h2 className="text-2xl border-b border-zinc-400 w-full tablet:w-fit tablet:border-0 font-bold p-4 tablet:px-6 laptop:px-10 py-4">
          Web Analytics
        </h2>

        <div className="flex flex-col mobile:flex-row items-center bg-white w-full mobile:w-fit">
          <p className="p-4 tablet:px-10 py-3 border-b mobile:border-r tablet:border-x border-zinc-400 w-full mobile:w-fit">
            Todays clicks{" "}
            <span className="font-medium tablet:block tablet:text-3xl">
              {todayCount}
            </span>
          </p>

          <p className="p-4 tablet:px-10 py-3 w-full mobile:w-fit">
            Total clicks{" "}
            <span className="font-medium tablet:block tablet:text-3xl">
              {data.length}
            </span>
          </p>
        </div>
      </div>

      {data.length > 0 ? (
        <>
          <LineChartComponent data={dayCount} title="Clicks Over Time" />
          <div className="grid grid-cols-1 mobile:grid-cols-2 laptop:grid-cols-4 gap-[1px] bg-zinc-400 border-t border-zinc-400">
            <PieChartComponent data={country} title="Countries" />
            <PieChartComponent data={device} title="Devices" />
            <PieChartComponent data={os} title="Operating Systems" />
            <PieChartComponent data={browser} title="Browsers" />
          </div>
          <BarChartComponent
            data={locations}
            title="Locations (City, Region, Country)"
          />
        </>
      ) : (
        <ErrorFallbackUi
          title="Share link and view data about your Link"
          description="Collect valuable insights on user behaviour and site performance with detailed page view metrics. Gain knowledge on top pages."
          imageUrl={metricImgUrl}
        />
      )}
    </div>
  );
}

const processData = (analyticsCount) => {
  const countryData = {};
  const deviceData = {};
  const osData = {};
  const browserData = {};
  const dateCounts = {};
  const locationData = {};

  analyticsCount.forEach((entry) => {
    const date = new Date(entry.$createdAt).toDateString();
    dateCounts[date] = (dateCounts[date] || 0) + 1;

    countryData[entry.country] = (countryData[entry.country] || 0) + 1;

    deviceData[entry.device] = (deviceData[entry.device] || 0) + 1;

    osData[entry.os] = (osData[entry.os] || 0) + 1;

    browserData[entry.browser] = (browserData[entry.browser] || 0) + 1;

    const locationKey = `${entry.city}, ${
      (entry.region && entry.region + ",") || ""
    } ${entry.country}`;
    locationData[locationKey] = (locationData[locationKey] || 0) + 1;
  });

  return {
    country: Object.entries(countryData).map(([name, value]) => ({
      name,
      value,
    })),
    device: Object.entries(deviceData).map(([name, value]) => ({
      name,
      value,
    })),
    os: Object.entries(osData).map(([name, value]) => ({ name, value })),
    browser: Object.entries(browserData).map(([name, value]) => ({
      name,
      value,
    })),
    dayCount: Object.entries(dateCounts).map(([date, clicks]) => ({
      date,
      clicks,
    })),
    locations: Object.entries(locationData).map(([location, count]) => ({
      location,
      count,
    })),
  };
};

const useGetTodaysClickCounts = (data) => {
  const [todayCount, setTodayCount] = useState(0);

  useEffect(() => {
    const getTodayAnalytics = (analyticsCount) => {
      const today = new Date().toISOString().split("T")[0];
      return analyticsCount.filter((entry) =>
        entry.$createdAt.startsWith(today)
      );
    };
    const todayAnalytics = getTodayAnalytics(data);
    setTodayCount(todayAnalytics.length);
  }, []);

  return { todayCount };
};

export default DashboardUrlAnalytics;
