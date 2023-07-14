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

interface Permissions {
  yetkili_Mi?: boolean;
  belge_Onay_Red_Yapabilir?: boolean;
  belge_Iptal_Edebilir?: boolean;
  belge_Iade_Yapabilir?: boolean;
  belgeleri_Gorebilir?: boolean;
  odeme_Alabilir?: boolean;
  gun_Basi_Sonu_Yapabilir?: boolean;
  raporlari_Kullanabilir?: boolean;
  menu_Grubu_Ekleyebilir?: boolean;
  menu_Grubu_Duzenleyebilir?: boolean;
  menu_Grubu_Silebilir?: boolean;
  menu_Item_Ekleyebilir?: boolean;
  menu_Item_Duzenleyebilir?: boolean;
  menu_Item_Silebilir?: boolean;
  menu_Item_Tasiyabilir?: boolean;
  masa_Ekleyebilir?: boolean;
  masa_Duzenleyebilir?: boolean;
  masa_Silebilir?: boolean;
  masa_Tasiyabilir?: boolean;
  masa_Grubu_Ekleyebilir?: boolean;
  masa_Grubu_Duzenleyebilir?: boolean;
  masa_Grubu_Silebilir?: boolean;
  siparisi_Iade_Alabilir?: boolean;
  siparisi_Iptal_Edebilir?: boolean;
  siparisi_Ikram_Edebilir?: boolean;
  siparisi_Satis_Yapabilir?: boolean;
  sirket_Kullanicilari_Listeleyebilir?: boolean;
  sirket_Kullanici_Ekleyebilir?: boolean;
  sirket_Kullanici_Duzenleyebilir?: boolean;
  sirket_Kullanici_Silebilir?: boolean;
  rol_Ekleyebilir?: boolean;
  rol_Duzenleyebilir?: boolean;
  rol_Silebilir?: boolean;
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
