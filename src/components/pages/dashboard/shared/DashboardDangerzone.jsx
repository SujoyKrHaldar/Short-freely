import { deleteAccount } from "../../../../api/authService";
import { useAuth, useNotification } from "../../../../hooks";
import { responseStatus } from "../../../../utils/constants";

function DashboardDangerzone() {
  const { userData, logout: removeUserData } = useAuth();
  const notify = useNotification();

  const handleDeleteAccount = async () => {
    // notify({
    //   message: `Please wait...`,
    //   type: responseStatus.WARNING,
    //   timeout: 5000,
    // });
    // const userId = userData.$id;
    // console.log(userId);
    // try {
    //   const response = await deleteAccount(userId);
    //   console.log(response);
    //   removeUserData();
    //   notify({
    //     message: `Account deleted successfully. See you again.`,
    //     type: responseStatus.SUCCESS,
    //     timeout: 5000,
    //   });
    // } catch (error) {
    //   notify({
    //     message: error,
    //     type: responseStatus.ERROR,
    //     timeout: 5000,
    //   });
    // }

    alert("Under construction");
  };

  return (
    <div className="w-full h-full px-10 py-7 bg-red-200 border border-red-400 flex items-end justify-between">
      <div className="space-y-1 ">
        <h2 className="text-2xl font-bold text-red-800">Delete Account</h2>
        <p className="text-red-600 font-normal text-sm max-w-sm">
          The account will be permanently deleted, including all data associated
          with this account. This action is irreversible.
        </p>
      </div>
      <button
        type="button"
        className="bg-red-700 text-red-100 border border-red-900 px-6 py-2 cursor-pointer"
        onClick={handleDeleteAccount}
      >
        I want to delete my account
      </button>
    </div>
  );
}

export default DashboardDangerzone;
