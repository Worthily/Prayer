import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  DASHBOARD,
  PRAYERDETAILS,
  UPDATECOLUMN,
  UPDATEPRAYER,
} from '../navigations/constants';
export type RootStackParamList = {
  MyDesk: undefined;
  Dashboard: { id: number };
  PrayerDetails: { id: number };
  SignIn: undefined;
  SignUp: undefined;
  CreateColumn: undefined;
  UpdateColumn: { id: number };
  UpdatePrayer: { id: number; columnId: number };
};
export type authScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
export type appScreenProp = StackNavigationProp<RootStackParamList, 'MyDesk'>;

export type State = {
  user: User;
  columns: Columns[];
  prayers: Prayers[];
  comments: Comments[];
  loader: Loader;
};

export type DashboardRouteProps = RouteProp<
  RootStackParamList,
  typeof DASHBOARD
>;
export type PrayerDetailsRouteProps = RouteProp<
  RootStackParamList,
  typeof PRAYERDETAILS
>;

export type UpdateColumnRouteProps = RouteProp<
  RootStackParamList,
  typeof UPDATECOLUMN
>;
export type UpdatePrayerRouteProps = RouteProp<
  RootStackParamList,
  typeof UPDATEPRAYER
>;

export type UserSignIn = {
  email: string;
  password: string;
};

export type UserSignUp = {
  email: string;
  name: string;
  password: string;
};

export type User = {
  logged: boolean;
  id: string;
  email: string;
  name: string;
  token: string;
  pass: string;
  errorExists: boolean;
  errorText: string;
};

export type Columns = {
  id: number;
  title: string;
  description: string;
  userId: number;
};
export type Prayers = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: number[];
};

export type Comments = {
  id: number;
  body: string;
  created: string;
  prayerId: number;
  userId: number;
};

export type Loader = {
  user: boolean;
  columns: boolean;
  prayers: boolean;
  comments: boolean;
};
