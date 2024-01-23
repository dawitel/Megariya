import { INewUser } from "@/types";
import { createUserAccount, signInAccount } from "../appwrite/api";
import { useMutation } from "@tanstack/react-query";

export const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccountMutation = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
