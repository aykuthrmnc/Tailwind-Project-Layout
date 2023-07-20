import { SetStateAction } from "react";
import { Dispatch } from "react";
import { NonIndexRouteObject } from "react-router-dom";

// ! TABLE
export interface TableObject {
  head: TableHeadObject[];
  body: TableBodyObject[] | any;
  searchable?: boolean;
  asyncSearchable?: boolean;
  emptyMessage?: string;
  loading?: boolean;
  pagination?: { currentPage: any; totalCount: any; totalPages: any; pageSize: any };
  children?: React.ReactNode;
}
interface TableHeadObject {
  name: string;
  sortable?: boolean;
  width?: string;
  center?: boolean;
}
export interface TableBodyObject {
  value?: string;
  type?: boolean;
  displayValue?: string;
}

// ! ROUTER
export interface Route extends NonIndexRouteObject {
  children?: any;
  auth?: boolean;
  layout?: boolean;
  name?: string;
}

// ! NODATA
export interface NoDataObject {
  size?: string;
  color?: string;
  title?: string;
}

// ! REDUX - AUTH

export type Theme = "dark" | "light";
export interface Auth {
  user?: { permissions: Permissions; token: string; name: string; companyName: string } | null;
  theme: Theme;
}

// ! REDUX - CART
export interface CartData {
  id: any;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

// ! PROPS
export interface Props {
  children?: React.ReactNode;
}

export interface CounterButtonProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

// ! MENU
export type MenuItemTypes = {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: any;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
  permissions?: any;
};
