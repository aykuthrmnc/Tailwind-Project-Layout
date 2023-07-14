import { MenuItemTypes } from "~/types";
import {
  FaBookOpen,
  FaCalculator,
  FaCalendarAlt,
  FaCreditCard,
  FaCube,
  FaCubes,
  FaHotdog,
  FaPrint,
  FaRegChartBar,
  FaUserCog,
  FaUsers,
  FaUserTie,
  FaUtensils,
  FaUtensilSpoon,
} from "react-icons/fa";
import { BsHouseDoorFill } from "react-icons/bs";

export const DENEME_MENU: MenuItemTypes[] = [
  {
    key: "anasayfa",
    label: "AykutHrmnc",
    isTitle: true,
    icon: (
      <FaCalculator
        size="32"
        color="var(--custom-color-100)"
        className="me-2"
      />
    ),
    url: "",
  },
  {
    key: "anasayfa",
    label: "Anasayfa",
    isTitle: false,
    icon: <BsHouseDoorFill />,
    url: "/",
  },
  {
    key: "cari",
    label: "Cari",
    isTitle: false,
    icon: <FaUsers />,
    children: [
      {
        key: "cariYonetim",
        label: "Cari Yönetimi",
        isTitle: false,
        url: "/cari/list",
        parentKey: "cari",
      },
      {
        key: "cariIslemler",
        label: "Cari İşlemleri",
        isTitle: false,
        parentKey: "cari",
        children: [
          {
            key: "gelenHavale",
            label: "Gelen Havale Oluştur",
            isTitle: false,
            url: "/cari-islemleri/61",
            parentKey: "cariIslemler",
          },
          {
            key: "gonderilenHavale",
            label: "Gönderilen Havale Oluştur",
            isTitle: false,
            url: "/cari-islemleri/60",
            parentKey: "cariIslemler",
          },
          {
            key: "tahsilat",
            label: "Tahsilat Oluştur",
            isTitle: false,
            url: "/cari-islemleri/59",
            parentKey: "cariIslemler",
          },
          {
            key: "tediye",
            label: "Tediye Oluştur",
            isTitle: false,
            url: "/cari-islemleri/58",
            parentKey: "cariIslemler",
          },
          {
            key: "kasaTahsilFisi",
            label: "Kasa Tahsil Fişi Oluştur",
            isTitle: false,
            url: "/cari-islemleri/66",
            parentKey: "cariIslemler",
          },
          {
            key: "kasaTediyeFisi",
            label: "Kasa Tediye Fişi Oluştur",
            isTitle: false,
            url: "/cari-islemleri/65",
            parentKey: "cariIslemler",
          },
          {
            key: "kkTahsilFisi",
            label: "KK Tahsil Fişi Oluştur",
            isTitle: false,
            url: "/cari-islemleri/68",
            parentKey: "cariIslemler",
          },
          {
            key: "kkTediyeFisi",
            label: "KK Tediye Fişi Oluştur",
            isTitle: false,
            url: "/cari-islemleri/67",
            parentKey: "cariIslemler",
          },
          {
            key: "alacakDekontu",
            label: "Alacak Dekontu Oluştur",
            isTitle: false,
            url: "/cari-islemleri/64",
            parentKey: "cariIslemler",
          },
          {
            key: "borcDekontu",
            label: "Borç Dekontu Oluştur",
            isTitle: false,
            url: "/cari-islemleri/63",
            parentKey: "cariIslemler",
          },
          {
            key: "devirBorc",
            label: "Devir Borcu Oluştur",
            isTitle: false,
            url: "/devir-islemleri/56",
            parentKey: "cariIslemler",
          },
          {
            key: "devirAlacak",
            label: "Devir Alacak Oluştur",
            isTitle: false,
            url: "/devir-islemleri/57",
            parentKey: "cariIslemler",
          },
        ],
      },
      {
        key: "cariHareket",
        label: "Cari Hareket",
        isTitle: false,
        url: "/cari-hareket",
        parentKey: "cari",
      },
      {
        key: "cariEkstre",
        label: "Cari Ekstre",
        isTitle: false,
        url: "/cari-ekstre",
        parentKey: "cari",
      },
      {
        key: "cariBakiye",
        label: "Cari Bakiye",
        isTitle: false,
        url: "/cari-bakiye?cardType=3",
        parentKey: "cari",
      },
    ],
  },
  {
    key: "stok",
    label: "Stok",
    isTitle: false,
    children: [
      {
        key: "stokYonetimi",
        label: "Stok Yönetimi",
        isTitle: false,
        url: "/stock",
        parentKey: "stok",
      },
      {
        key: "envanterDurumu",
        label: "Envanter Durumu",
        isTitle: false,
        url: "/inventories",
        parentKey: "stok",
      },
      {
        key: "stokFisi",
        label: "Stok Fişi Oluştur",
        isTitle: false,
        parentKey: "stok",
        children: [
          {
            key: "stokFisiGiris",
            label: "Giriş",
            isTitle: false,
            url: "/add-stock-receipt/53",
            parentKey: "stokFisi",
          },
          {
            key: "stokFisiCikis",
            label: "Çıkış",
            isTitle: false,
            url: "/add-stock-receipt/54",
            parentKey: "stokFisi",
          },
          {
            key: "stokFisiTransfer",
            label: "Transfer",
            isTitle: false,
            url: "/add-stock-receipt/55",
            parentKey: "stokFisi",
          },
        ],
      },
      {
        key: "stokKategori",
        label: "Stok Kategori",
        isTitle: false,
        url: "/stock-categories",
        parentKey: "stok",
      },
      {
        key: "stokHareket",
        label: "Stok Hareket",
        isTitle: false,
        url: "/stock-movement",
        parentKey: "stok",
      },
      {
        key: "stokEkstre",
        label: "Stok Ekstre",
        isTitle: false,
        url: "/stock-extract",
        parentKey: "stok",
      },
    ],
  },
  {
    key: "teklif",
    label: "Teklif",
    isTitle: false,
    children: [
      {
        key: "teklifler",
        label: "Teklifler",
        isTitle: false,
        url: "/offers",
        parentKey: "teklif",
      },
      {
        key: "teklifAlis",
        label: "Alış Teklifi Oluştur",
        isTitle: false,
        url: "/create-offer/74",
        parentKey: "teklif",
      },
      {
        key: "teklifSatis",
        label: "Satış Teklifi Oluştur",
        isTitle: false,
        url: "/create-offer/73",
        parentKey: "teklif",
      },
    ],
  },
  {
    key: "siparis",
    label: "Siparişler",
    isTitle: false,
    children: [
      {
        key: "siparisler",
        label: "Siparişler",
        isTitle: false,
        url: "/orders",
        parentKey: "siparis",
      },
      {
        key: "siparisAlis",
        label: "Alış Siparişi Oluştur",
        isTitle: false,
        url: "/create-order/76",
        parentKey: "siparis",
      },
      {
        key: "siparisSatis",
        label: "Satış Siparişi Oluştur",
        isTitle: false,
        url: "/create-order/75",
        parentKey: "siparis",
      },
    ],
  },
  {
    key: "irsaliye",
    label: "İrsaliye",
    isTitle: false,
    children: [
      {
        key: "irsaliyeAlis",
        label: "Alış",
        isTitle: false,
        parentKey: "irsaliye",
        children: [
          {
            key: "irsaliyeAlisElle",
            label: "Elle",
            url: "/create-bill/16",
            parentKey: "irsaliyeAlis",
          },
          {
            key: "irsaliyeAlisSiparisten",
            label: "Siparişten",
            url: "/create-bill/17",
            parentKey: "irsaliyeAlis",
          },
        ],
      },
      {
        key: "irsaliyeSatis",
        label: "Satış",
        isTitle: false,
        parentKey: "irsaliye",
        children: [
          {
            key: "irsaliyeSatisElle",
            label: "Elle",
            url: "/create-bill/13",
            parentKey: "irsaliyeSatis",
          },
          {
            key: "irsaliyeSatisSiparisten",
            label: "Siparişten",
            url: "/create-bill/14",
            parentKey: "irsaliyeSatis",
          },
        ],
      },
    ],
  },
  {
    key: "fatura",
    label: "Fatura",
    isTitle: false,

    children: [
      {
        key: "faturalar",
        label: "Faturalar",
        url: "/bills",
        parentKey: "fatura",
      },
      {
        key: "faturaAlis",
        label: "Alış Faturası Oluştur",
        parentKey: "fatura",
        children: [
          {
            key: "faturaAlisElle",
            label: "Elle",
            url: "/create-bill/5",
            parentKey: "faturaAlis",
          },
          {
            key: "faturaAlisSiparisten",
            label: "Siparişten",
            url: "/create-bill/6",
            parentKey: "faturaAlis",
          },
        ],
      },
      {
        key: "faturaSatis",
        label: "Satış Faturası Oluştur",
        parentKey: "fatura",
        children: [
          {
            key: "faturaSatisElle",
            label: "Elle",
            url: "/create-bill/1",
            parentKey: "faturaSatis",
          },
          {
            key: "faturaSatisSiparisten",
            label: "Siparişten",
            url: "/create-bill/2",
            parentKey: "faturaSatis",
          },
        ],
      },
      {
        key: "faturaAlimdanIade",
        label: "Alımdan İade Faturası Oluştur",
        parentKey: "fatura",
        children: [
          {
            key: "faturaAlimdanIadeElle",
            label: "Elle",
            url: "/create-bill/11",
            parentKey: "faturaAlimdanIade",
          },
          {
            key: "faturaAlimdanIadeSiparisten",
            label: "Siparişten",
            url: "/create-bill/12",
            parentKey: "faturaAlimdanIade",
          },
        ],
      },
      {
        key: "faturaSatistanIade",
        label: "Satıştan İade Faturası Oluştur",
        parentKey: "fatura",
        children: [
          {
            key: "elleSatistanIade",
            label: "Elle",
            url: "/create-bill/9",
            parentKey: "faturaSatistanIade",
          },
          {
            key: "siparistenSatistanIade",
            label: "Siparişten",
            url: "/create-bill/10",
            parentKey: "faturaSatistanIade",
          },
        ],
      },
      {
        key: "giderFaturasi",
        label: "Gider Faturası Oluştur",
        isTitle: false,
        url: "/expense-bill/90",
        parentKey: "fatura",
      },
    ],
  },
  {
    key: "cekSenet",
    label: "Çek - Senet",
    isTitle: false,

    children: [
      {
        key: "cekSenetler",
        label: "Çek-Senet Listesi",
        isTitle: false,
        url: "/check-and-bill",
        parentKey: "cekSenet",
      },
      {
        key: "cekGiris",
        label: "Çek Giriş",
        isTitle: false,
        url: "/create-check/1",
        parentKey: "cekSenet",
      },
      {
        key: "cekCikis",
        label: "Çek Çıkış",
        isTitle: false,
        url: "/create-check/2",
        parentKey: "cekSenet",
      },
    ],
  },
  {
    key: "firma",
    label: "Firma Ayarları",
    isTitle: false,
    url: "/settings",
    // children: [
    //     {
    //         key: 'sube',
    //         label: 'Şube',
    //         isTitle: false,
    //         url: '/branch',
    //         parentKey: 'firma',
    //     },
    //     {
    //         key: 'depo',
    //         label: 'Depo',
    //         isTitle: false,
    //         url: '/store',
    //         parentKey: 'firma',
    //     },
    //     {
    //         key: 'personel',
    //         label: 'Personel',
    //         isTitle: false,
    //         url: '/staff',
    //         parentKey: 'firma',
    //     },
    // ],
  },
];

export const DENEME2_MENU: MenuItemTypes[] = [
  {
    key: "anasayfa",
    label: "AYKUTHRMNC",
    isTitle: true,
    icon: <FaHotdog size="32" color="var(--custom-color-100)" />,
    url: "/admin",
  },
  {
    key: "anasayfa",
    label: "Ana Sayfa",
    isTitle: false,
    icon: <BsHouseDoorFill />,
    url: "/admin",
  },
  {
    key: "roller",
    label: "Roller",
    isTitle: false,
    icon: <FaUserCog />,
    url: "/admin/roller",
    permissions: [
      "yetkili_Mi",
      "rol_Ekleyebilir",
      "rol_Duzenleyebilir",
      "rol_Silebilir",
    ],
  },
  {
    key: "personeller",
    label: "Personeller",
    isTitle: false,
    icon: <FaUserTie />,
    url: "/admin/personeller",
  },
  {
    key: "kategoriler",
    label: "Kategoriler",
    isTitle: false,
    icon: <FaBookOpen />,
    url: "/admin/kategoriler",
  },
  {
    key: "urunler",
    label: "Ürünler",
    isTitle: false,
    icon: <FaUtensils />,
    url: "/admin/urunler",
  },
  {
    key: "porsiyonlar",
    label: "Porsiyonlar",
    isTitle: false,
    icon: <FaUtensilSpoon />,
    url: "/admin/porsiyonlar",
  },
  {
    key: "masagruplari",
    label: "Masa Grupları",
    isTitle: false,
    icon: <FaCubes />,
    url: "/admin/masagruplari",
  },
  {
    key: "masalar",
    label: "Masalar",
    isTitle: false,
    icon: <FaCube />,
    url: "/admin/masalar",
  },
  {
    key: "gunler",
    label: "Günler",
    isTitle: false,
    icon: <FaCalendarAlt />,
    url: "/admin/gunler",
  },
  {
    key: "raporlar",
    label: "Raporlar",
    isTitle: false,
    icon: <FaRegChartBar />,
    url: "/admin/raporlar",
  },
  {
    key: "odeme",
    label: "Ödeme İşlemleri",
    icon: <FaCreditCard />,
    isTitle: false,
    children: [
      {
        key: "odemesecenekleri",
        label: "Ödeme Seçenekleri",
        isTitle: false,
        url: "/admin/odemesecenekleri",
        parentKey: "odeme",
      },
      {
        key: "odemeyonlendirmeleri",
        label: "Ödeme Yönlendirmeleri",
        isTitle: false,
        url: "/admin/odemeyonlendirmeleri",
        parentKey: "odeme",
      },
    ],
  },
  {
    key: "cari",
    label: "Cari İşlemleri",
    icon: <FaUsers />,
    isTitle: false,
    children: [
      {
        key: "cariler",
        label: "Cariler",
        isTitle: false,
        url: "/admin/cariler",
        parentKey: "cari",
      },
    ],
  },
  {
    key: "yazici",
    label: "Yazıcı İşlemleri",
    icon: <FaPrint />,
    isTitle: false,
    children: [
      {
        key: "yazicilar",
        label: "Yazıcılar",
        isTitle: false,
        url: "/admin/yazicilar",
        parentKey: "cari",
      },
      {
        key: "yaziciYonlendirmeleri",
        label: "Rotalar",
        isTitle: false,
        url: "/admin/yazicilar/yonlendirmeler",
        parentKey: "yazici",
      },
      {
        key: "yaziciDurumlari",
        label: "Durumlar",
        isTitle: false,
        url: "/admin/yazicilar/durumlar",
        parentKey: "yazici",
      },
    ],
  },
];
