import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  DocumentIcon,
  ShoppingBagIcon,
  SignalIcon,
  FolderOpenIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { InputForm } from "@/pages/InputForm";
import TablesAntri from "./pages/dashboard/tabllesAntri";
import TablesOutbox from "./pages/dashboard/tabllesOutbox";
import TablesPembelian from "./pages/dashboard/tablesPembelian";
import KomplainCs from "./pages/dashboard/komplainCS";
import TrxManual from "./pages/dashboard/trxManual";
import DataMember from "./pages/dashboard/dataMember";
import DataPerkiraan from "./pages/dashboard/dataPerkiraan";
import DataProduk from "./pages/dashboard/dataProduk";
import DataKomisi from "./pages/dashboard/dataKomisi";
import ProdukGesek from "./pages/dashboard/produkGesek";
import LaporanPPOB from "./pages/dashboard/laporanPPOB";
import PiutangReseller from "./pages/dashboard/piutangReseller";
import DataSupplier from "./pages/dashboard/dataSupplier";
import ProsesRefund from "./pages/dashboard/prosesRefund";
import Inbox from "./pages/dashboard/Inbox";
import Deposit from "./pages/dashboard/deposit";
import TransaksiPPOB, { Pembayaran } from "./pages/dashboard/pembayaran";
import RefundPPOB from "./pages/dashboard/refundPPOB";
import FormatSupplier from "./pages/dashboard/formatSupplier";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   // icon: <TableCellsIcon {...icon} />,
      //   name: "formInput",
      //   path: "/addEmployee",
      //   element: <InputForm />,
      // }
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: "notifications",
      //   path: "/notifications",
      //   element: <Notifications />,
      // },
    ],
  },
  {
    title: "Data Logs",
    layout: "dashboard",
    pages: [
      {
        icon: <EnvelopeIcon {...icon} />,
        name: "Inbox",
        path: "/inbox",
        element: <Inbox />,
      },
      {
        icon: <EnvelopeIcon {...icon} />,
        name: "Outbox",
        path: "/tablesOutbox",
        element: <TablesOutbox />,
      },
      {
        icon: <EnvelopeIcon  {...icon} />,
        name: "Antri",
        path: "/tablesAntri",
        element: <TablesAntri />,
      },
    ],
  },
  {
    title: "Transaksi",
    layout: "dashboard",
    pages: [
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "Pembelian",
        path: "/tablesPembelian",
        element: <TablesPembelian />,
      },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "Proses Refund",
        path: "/prosesRefund",
        element: <ProsesRefund />,
      },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "Pembayaran",
        path: "/pembayaran",
        element: <Pembayaran />,
      },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "Deposit",
        path: "/deposit",
        element: <Deposit />,
      },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "Refund PPOB",
        path: "/refundPPOB",
        element: <RefundPPOB />,
      },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "Transaksi Manual",
        path: "/trxManual",
        element: <TrxManual />,
      },
      {
        icon: <SignalIcon {...icon} />,
        name: "Komplain CS",
        path: "/komplainCS",
        element: <KomplainCs />,
      },
    ],
  },
  {
    title: "Pengaturan",
    layout: "dashboard",
    pages: [
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Data Produk",
        path: "/dataProduk",
        element: < DataProduk />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Produk Gesek",
        path: "/produkGesek",
        element: <ProdukGesek />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Format Supplier",
        path: "/formatSupplier",
        element: <FormatSupplier />,
      },
    ],
  },
  {
    title: "Administrasi",
    layout: "dashboard",
    pages: [
      {
        icon: <DocumentIcon {...icon} />,
        name: "Data Member",
        path: "/dataMember",
        element: <DataMember />,
      },
      {
        icon: <DocumentIcon {...icon} />,
        name: "Data Supplier",
        path: "/dataSupplier",
        element: <DataSupplier />,
      },
      {
        icon: <DocumentIcon {...icon} />,
        name: "Data Perkiraan",
        path: "/dataPerkiraan",
        element: <DataPerkiraan />,
      },
      {
        icon: <DocumentIcon {...icon} />,
        name: "Data Komisi",
        path: "/dataKomisi",
        element: <DataKomisi />,
      },
    ],
  },
  {
    title: "Laporan",
    layout: "dashboard",
    pages: [
      {
        icon: <FolderOpenIcon {...icon} />,
        name: "Laporan PPOB",
        path: "/laporanPPOB",
        element: <LaporanPPOB />,
      },
      {
        icon: <FolderOpenIcon {...icon} />,
        name: "Piutang Reseller",
        path: "/piutangReseller",
        element: <PiutangReseller />,
      },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     // {
  //     //   icon: <RectangleStackIcon {...icon} />,
  //     //   name: "sign up",
  //     //   path: "/sign-up",
  //     //   element: <SignUp />,
  //     // },
  //   ],
  // },
];

export default routes;
