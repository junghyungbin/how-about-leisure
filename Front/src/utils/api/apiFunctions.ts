import { TinitialValues } from "../hooks/useForm";
import api from "./api";
import { ownerapi } from './api';

export type TAxoisUserInfo = {
  accessToken: string;
  userName: string;
  userNickname: string;
  userAddress: string;
  userDistance: string;
};

export type TAxoisOwnerInfo = {
  access_token: string;
  user_name: string;
  user_nickname: string;
  user_type: string;
};

export const loginAPI = async (values: TinitialValues) => {
  console.log(1)
  const { data } = await api<TAxoisUserInfo>({
    url: "accounts/login",
    method: "POST",
    data: {
      userId: values.userId,
      userPassword: values.password,
    },
  });
  console.log(data);
  return data;
};

export const signupAPI = async (values: TinitialValues) => {
  const { data } = await api<TAxoisUserInfo>({
    url: "accounts",
    method: "POST",
    data: {
      userId: values.userId,
      userPassword: values.password,
      userNickname: values.nickname,
      userPhoneNumber: values.phoneNumber,
      userEmail: values.email,
    },
  });
  return data;
};

export const logoutAPI = async () => {
  const { data } = await api({
    url: "accounts/logout",
    method: "POST",
  });
  return data;
};

export const ownerloginAPI = async (values: TinitialValues) => {
  const { data } = await ownerapi<TAxoisOwnerInfo>({
    url: "accounts/owners/login",
    method: "POST",
    data: {
      userId: values.userId,
      userPassword: values.password,
    },
  });
  console.log(data);
  return data;
};

export const ownerSignupAPI = async (values: TinitialValues) => {
  const formData = new FormData();
  if (
    values.userId &&
    values.nickname &&
    values.password &&
    values.phoneNumber &&
    values.email &&
    values.brcImage &&
    values.businessHour &&
    values.hobbyMajorCategory &&
    values.hobbyMainCategory 
    // &&
    // (values.isHoliday === true || values.isHoliday === false)
  ) {
    formData.append("userId", values.userId);
    formData.append("userName", values.nickname);
    formData.append("userPassword", values.password);
    formData.append("userPhoneNumber", values.phoneNumber);
    formData.append("userEmail", values.email);
    formData.append("userBrcImage", values.brcImage);
    formData.append("businessHour", JSON.stringify(values.businessHour));
    formData.append("isHoliday", JSON.stringify(values.isHoliday));
    formData.append("hobbyMajorCategory", values.hobbyMajorCategory);
    formData.append("hobbyMainCategory", values.hobbyMainCategory);
  }

  const { data } = await ownerapi<TAxoisUserInfo>({
    url: "accounts/owners",
    method: "POST",
    data: formData,
  });
  return data;
};
