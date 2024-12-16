/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DashboardAccountEditTemplate from "./DashboardAccountEditTemplate";
import { useNotification } from "../../../../hooks";
import { responseStatus } from "../../../../utils/constants";
import {
  getAllSession,
  logoutUser as deleteSessionBySessionId,
} from "../../../../api/authService";
import { Check, X } from "lucide-react";

function DashboardSessions() {
  return (
    <DashboardAccountEditTemplate
      title="Sessions"
      description="This is a list of devices that have logged into your account.
                   Revoke any sessions that you do not recognize."
    >
      <SessionLists />
    </DashboardAccountEditTemplate>
  );
}

const SessionLists = () => {
  const [sessionList, setSessionList] = useState();
  const [loading, setLoading] = useState(true);
  const notify = useNotification();

  const getSessionList = async () => {
    setLoading(true);
    try {
      const { sessions } = await getAllSession();
      setSessionList(sessions.reverse());
    } finally {
      setLoading(false);
    }
  };

  const deleteSession = async (sessionId) => {
    try {
      notify({
        message: `Deleting session...`,
        type: responseStatus.WARNING,
        timeout: 10000,
      });
      await deleteSessionBySessionId(sessionId);

      notify({
        message: `Session deleted successfully.`,
        type: responseStatus.SUCCESS,
        timeout: 5000,
      });

      getSessionList();
    } catch (error) {
      notify({
        message: error?.message,
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    }
  };

  useEffect(() => {
    getSessionList();
  }, []);

  return (
    <div className="space-y-6 w-full p-10 border-l border-zinc-300">
      {loading ? (
        [...Array(2)].map((data, id) => (
          <div
            key={id}
            className="w-full h-[155px] bg-gray-200 animate-pulse"
          ></div>
        ))
      ) : (
        <div className="space-y-4">
          {sessionList.map((data) => (
            <SessionCard
              key={data.$id}
              handleClick={() => deleteSession(data.$id)}
              data={data}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const SessionCard = ({ data, handleClick }) => {
  return (
    <div
      className={`py-4 px-6 bg-gray-100 flex items-start justify-between border 
                ${
                  data.current
                    ? "border-green-500"
                    : "border-gray-300 hover:border-black"
                }
              `}
    >
      <div className="space-y-1">
        <p className="font-bold text-md">{data.ip}</p>
        <p className="text-sm">
          {data.clientName} ({data.clientType}) on {data.osName}
        </p>
        <p className="text-sm">
          Country: {data.countryName}, Auth Provider: {data.provider}
        </p>
        <p className="text-sm">
          Signed in: {new Date(data.$createdAt).toDateString()}
        </p>
      </div>
      {data.current ? (
        <div className="bg-green-700 text-white rounded-full flex items-center gap-1 pr-4 pl-2 py-2">
          <Check color="white" size={20} />
          <p className="text-xs italic">Current Session</p>
        </div>
      ) : (
        <div onClick={handleClick} className=" cursor-pointer">
          <X color="black" size={20} />
        </div>
      )}
    </div>
  );
};

export default DashboardSessions;
