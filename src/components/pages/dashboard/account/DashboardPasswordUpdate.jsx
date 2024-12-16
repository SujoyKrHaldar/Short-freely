import { useState } from "react";
import Input from "../../../ui/forms/Input";
import { useAuth, useNotification } from "../../../../hooks";
import { useForm } from "react-hook-form";
import DashboardAccountEditTemplate from "./DashboardAccountEditTemplate";
import { updatePassword } from "../../../../api/authService";
import { responseStatus } from "../../../../utils/constants";

function DashboardPasswordUpdate() {
  return (
    <DashboardAccountEditTemplate
      title="Password"
      description="Update your password"
    >
      <PasswordUpdateForm />
    </DashboardAccountEditTemplate>
  );
}

const PasswordUpdateForm = () => {
  const [loading, setLoading] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const notify = useNotification();
  const { login: updateUserData } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSave = async (data) => {
    setLoading(true);
    const { oldPassword, newPassword } = data;
    try {
      const response = await updatePassword(newPassword, oldPassword);
      updateUserData(response);
      notify({
        message: `Password updated.`,
        type: responseStatus.SUCCESS,
        timeout: 5000,
      });
      if (response.status) {
        reset();
        setIsEditable(false);
      }
    } catch (error) {
      notify({
        message: error,
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const onCancel = () => {
    reset();
    setIsEditable(false);
  };

  return (
    <div className="w-full py-8 px-10 border-l border-zinc-300 flex justify-end items-center">
      {!isEditable ? (
        <button
          type="button"
          className="bg-zinc-100 border border-zinc-300 px-6 py-2 cursor-pointer"
          onClick={() => setIsEditable(true)}
        >
          Update Password
        </button>
      ) : (
        <form className="w-full space-y-8" onSubmit={handleSubmit(onSave)}>
          <div className="space-y-4">
            <Input
              label="Old Password"
              type="password"
              enableResetPasswordBtn={false}
              placeholder="Type old password"
              error={errors?.oldPassword}
              errorMessage={errors?.oldPassword?.message}
              {...register("oldPassword", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
              })}
            />

            <Input
              label="New Password"
              type="password"
              enableResetPasswordBtn={false}
              placeholder="Type new password"
              error={errors?.newPassword}
              errorMessage={errors?.newPassword?.message}
              {...register("newPassword", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
              })}
            />
          </div>

          <div className="flex items-center justify-end gap-2 w-full h-fit border-t-0 border-zinc-300">
            <button
              type="button"
              className="bg-zinc-100 border border-zinc-300 px-6 py-2 cursor-pointer"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 border border-black"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3 mr-4">
                  <div className="w-5 h-5 rounded-full border-[3px] border-zinc-500 border-l-transparent animate-spin"></div>
                  <p>Updating</p>
                </div>
              ) : (
                <p>Chnage Password</p>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DashboardPasswordUpdate;
