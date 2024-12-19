/* eslint-disable no-unused-vars */
import { useState } from "react";
import Input from "../../../ui/forms/Input";
import { useAuth, useNotification } from "../../../../hooks";
import { useForm } from "react-hook-form";
import DashboardAccountEditTemplate from "./DashboardAccountEditTemplate";
import { Lock } from "lucide-react";
import { updateName } from "../../../../api/authService";
import { responseStatus } from "../../../../utils/constants";

function DashboardProfileEdit() {
  return (
    <DashboardAccountEditTemplate
      title="General"
      description="Keep your personal data private"
    >
      <ProfileForm />
    </DashboardAccountEditTemplate>
  );
}

const ProfileForm = () => {
  const { userData: defaultData, login: saveUserDataAfterUodation } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState(defaultData);
  const notify = useNotification();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  // Save handler: Mock API request
  const onSave = async (data) => {
    setLoading(true);
    try {
      const response = await updateName(data.name);
      saveUserDataAfterUodation(response);
      notify({
        message: "Name updated successfull.y.",
        type: responseStatus.SUCCESS,
        timeout: 5000,
      });
    } catch (_) {
      notify({
        message: "Something went wrong",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    } finally {
      setLoading(false);
    }

    setFormData(data); // Update state with new data
    setIsEditable(false); // Exit edit mode
    setLoading(false);
  };

  // Cancel handler
  const onCancel = () => {
    reset(formData); // Reset the form to the current data
    setIsEditable(false); // Exit edit mode
  };

  return (
    <div className="w-full py-8 px-10 border-l border-zinc-300">
      <form className="w-full space-y-8" onSubmit={handleSubmit(onSave)}>
        <div className="space-y-4">
          <Input
            autoFocus={true}
            label="Name"
            readOnly={!isEditable}
            className={
              isEditable
                ? "bg-white"
                : "bg-zinc-100 outline-none text-zinc-500 font-bormal border-zinc-200"
            }
            error={errors?.name}
            errorMessage={errors?.name?.message}
            {...register("name", {
              required: "Your Name is required.",
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters long.",
              },
            })}
          />

          <div className="relative">
            <Lock size={18} className="opacity-30 absolute top-2 right-0" />
            <Input
              label="Email"
              type="email"
              readOnly={true}
              title="cant be edi"
              className=" bg-zinc-100 outline-none text-zinc-500 font-bormal border-zinc-200 cursor-not-allowed"
              error={errors?.email}
              errorMessage={errors?.email?.message}
              {...register("email", {
                required: "Email is required.",
                validate: (value) =>
                  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value) ||
                  "Please enter a valid Email.",
              })}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 w-full h-fit border-t-0 border-zinc-300">
          {isEditable ? (
            <>
              <button
                type="button"
                className="bg-zinc-100 border border-zinc-300 px-5 py-2 cursor-pointer"
                onClick={onCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-black text-white px-5 py-2 border border-black"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3 mr-4">
                    <div className="w-5 h-5 rounded-full border-[3px] border-zinc-500 border-l-transparent animate-spin"></div>
                    <p>Saving</p>
                  </div>
                ) : (
                  <p>Save</p>
                )}
              </button>
            </>
          ) : (
            <button
              type="button"
              className="bg-zinc-100 border border-zinc-300 px-5 py-2 cursor-pointer"
              onClick={() => setIsEditable(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DashboardProfileEdit;
