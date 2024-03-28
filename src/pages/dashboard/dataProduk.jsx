import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/store/actionCreators";
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from "react-router-dom"
import Dropdown from "@/components/Dropdown";
import DropdownOutbox from "@/components/DropdownOutbox";
import DropdownDataProduk from "@/components/DropdownDataProduk";

export function DataProduk() {
  const dispatch = useDispatch();
  let navigate = useNavigate()
  let [startDate, setStartDate] = useState('');
  let [endDate, setEndDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (startDate && endDate) {
      setSubmitted(true);
      setSubmitLoading(true);
      dispatch(fetchTrxs(startDate, endDate))
        .then(() => {
          setSubmitLoading(false);
        });
    } else {
      console.log('kocak');
    }
  };

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      {/* {JSON.stringify(users.data)} */}
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            DATA PRODUK
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <button
            onClick={handleSubmit}
            className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
            aria-label="Submit"
            title="Submit"
            style={{ backgroundColor: 'green', marginBottom: '8px', marginLeft: '4px' }}
            disabled={submitLoading}
          >
            INPUT PRODUK
          </button>
          <button
            onClick={handleSubmit}
            className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
            aria-label="Submit"
            title="Submit"
            style={{ backgroundColor: 'blue', marginBottom: '8px', marginLeft: '4px' }}
            disabled={submitLoading}
          >
            SETTING MARGIN PRODUK
          </button>
          <button
            onClick={handleSubmit}
            className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
            aria-label="Submit"
            title="Submit"
            style={{ backgroundColor: 'orange', marginBottom: '8px', marginLeft: '4px' }}
            disabled={submitLoading}
          >
            SETTING PRODUK ALL DENOM
          </button>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                <svg
                  className="w-3 h-3 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                  />
                </svg>
                PROVIDER
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                <svg
                  className="w-3 h-3 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                  />
                </svg>
                E-COM
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                <svg
                  className="w-3 h-3 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                  />
                </svg>
                PLN
              </button>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                aria-label="Submit"
                title="Submit"
                style={{ backgroundColor: 'black', marginBottom: '8px', marginLeft: '4px' }}
                disabled={submitLoading}
              >
                SET PRIORITY
              </button>
              <button
                onClick={handleSubmit}
                className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                aria-label="Submit"
                title="Submit"
                style={{ backgroundColor: 'brown', marginBottom: '8px', marginLeft: '4px' }}
                disabled={submitLoading}
              >
                UPDATE ALL
              </button>
              <button
                onClick={handleSubmit}
                className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                aria-label="Submit"
                title="Submit"
                style={{ backgroundColor: 'orange', marginBottom: '8px', marginLeft: '4px' }}
                disabled={submitLoading}
              >
                SET GANGGUAN
              </button>
              <button
                onClick={handleSubmit}
                className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                aria-label="Submit"
                title="Submit"
                style={{ backgroundColor: 'blue', marginBottom: '8px', marginLeft: '4px' }}
                disabled={submitLoading}
              >
                SET CLOSE
              </button>
              <button
                onClick={handleSubmit}
                className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                aria-label="Submit"
                title="Submit"
                style={{ backgroundColor: 'green', marginBottom: '8px', marginLeft: '4px' }}
                disabled={submitLoading}
              >
                SET NORMAL
              </button>
              <button
                onClick={handleSubmit}
                className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                aria-label="Submit"
                title="Submit"
                style={{ backgroundColor: 'red', marginBottom: '8px', marginLeft: '4px' }}
                disabled={submitLoading}
              >
                HAPUS
              </button>

              <div className="relative">
                <i className="absolute fa fa-search text-gray-400 top-5 left-4" />
                <input
                  type="text"
                  className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer border border-gray-300"
                  name=""
                />
                <span className="absolute top-4 right-5 border-l pl-4">
                  <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["NOMINAL", "PRODUK", "KETERANGAN", "TIPE", "HARGA JUAL", "POIN"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-1"
                    />
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <DropdownDataProduk />
                </td>
                <td className='border-b border-blue-gray-50'>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    SDFSFDSDFSDF
                  </Typography>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    SDFSFDSDFSDF
                  </Typography>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
              </tr>
              <tr>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-1"
                    />
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <DropdownDataProduk />
                </td>
                <td className='border-b border-blue-gray-50'>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    SDFSFDSDFSDF
                  </Typography>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    SDFSFDSDFSDF
                  </Typography>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
              </tr>
              <tr>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-1"
                    />
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <DropdownDataProduk />
                </td>
                <td className='border-b border-blue-gray-50'>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    SDFSFDSDFSDF
                  </Typography>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    SDFSFDSDFSDF
                  </Typography>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
              </tr>
              <tr>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-1"
                    />
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <DropdownDataProduk />
                </td>
                <td className='border-b border-blue-gray-50'>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    SDFSFDSDFSDF
                  </Typography>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    SDFSFDSDFSDF
                  </Typography>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <div className="flex items-center gap-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                    </div>
                  </div>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
                <td className='border-b border-blue-gray-50'>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default DataProduk;
