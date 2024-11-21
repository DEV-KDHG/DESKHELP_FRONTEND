import { useQuery } from "@tanstack/react-query";
import { getAllusers } from "../../services";

export const useGetAllUsers = () => {
  const { isLoading, data: users } = useQuery({
    queryKey: ["users"],

    queryFn: () => getAllusers(),
  });

  const { activeUsers, deactivateUsers } = users || {};

  return { isLoading, activeUsers, deactivateUsers };
};
