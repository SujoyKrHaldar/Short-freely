import { useDispatch } from "react-redux";
import { ADD_NOTIFICATION } from "../state";

const useNotification = () => {
  const dispatch = useDispatch();

  const notify = ({ message, type, timeout }) => {
    dispatch(ADD_NOTIFICATION({ message, type, timeout }));
  };

  return notify;
};

export default useNotification;
