// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
//   Chip,
//   Tooltip,
//   Progress,
//   Button
// } from "@material-tailwind/react";
// import { StatisticsCard } from "@/widgets/cards";
// import {
//   statisticsCardsData,
// } from "@/data";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/store/actionCreators";
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from "react-router-dom"
// import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
// import { StatisticsCard } from "@/widgets/cards";
// import { StatisticsChart } from "@/widgets/charts";
import {
  // statisticsCardsData,
  // statisticsChartsData,
  // projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import DropdownAction from "@/components/DropdownAction";
import statisticsCardsDataKomisi from "@/data/statistics-cards-dataKomisi copy";
import { StatisticsCard } from "@/widgets/cards";

export function DataKomisi() {
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
            DATA KOMISI
          </Typography>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
            <Card className="border border-blue-gray-100 shadow-sm">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 p-6"
              >
                <div>
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    Transfer Komsisi
                  </Typography>
                    {statisticsCardsDataKomisi.map(({ icon, title, footer, ...rest }) => (
                      <StatisticsCard
                        key={title}
                        {...rest}
                        title={<strong>{title}</strong>}
                        icon={React.createElement(icon, {
                          className: "w-6 h-6 text-white",
                        })}
                      />
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ marginTop: '5px', marginLeft: '3px' }}>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                      style={{ marginLeft: '3px' }}
                      type="date"
                      id="startDate"
                      value={startDate}
                      // onChange={(e) => setStartDate(e.target.value)}
                      className="shadow border rounded-lg px-2 py-1"
                    />
                  </div>
                  <div style={{ marginTop: '5px', marginLeft: '3px' }}>
                    <label htmlFor="endDate">End Date:</label>
                    <input
                      style={{ marginLeft: '3px' }}
                      type="date"
                      id="endDate"
                      value={endDate}
                      // onChange={(e) => setEndDate(e.target.value)}
                      className="shadow border rounded-lg px-2 py-1"
                    />
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                  aria-label="Submit"
                  title="Submit"
                  style={{ backgroundColor: 'blue', marginBottom: '8px', marginLeft: '4px', marginTop: '6px' }}
                  disabled={submitLoading}
                >
                  Transfer Komisi
                </button>
              </CardHeader>

              <CardBody className="overflow-x-scroll pt-0">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["Member", "Jml"].map(
                        (el) => (
                          <th
                            key={el}
                            className="border-b border-blue-gray-50 py-3 px-6 text-left"
                          >
                            <Typography
                              variant="small"
                              className="text-[11px] font-medium uppercase text-blue-gray-400"
                            >
                              {el}
                            </Typography>
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {projectsTableData.map(
                      ({ img, name, members, budget, completion }, key) => {
                        const className = `py-3 px-5 ${key === projectsTableData.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                          }`;

                        return (
                          <tr key={name}>
                            <td className={className}>
                              <div className="flex items-center gap-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-bold"
                                >
                                  {name}
                                </Typography>
                              </div>
                            </td>
                            <td className={className}>
                              {members}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </CardBody>
            </Card>
            <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 flex items-center justify-between p-6"
              >
                <div>
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    Data Komisi
                  </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ marginTop: '5px', marginLeft: '3px' }}>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                      style={{ marginLeft: '3px' }}
                      type="date"
                      id="startDate"
                      value={startDate}
                      // onChange={(e) => setStartDate(e.target.value)}
                      className="shadow border rounded-lg px-2 py-1"
                    />
                  </div>
                  <div style={{ marginTop: '5px', marginLeft: '3px' }}>
                    <label htmlFor="endDate">End Date:</label>
                    <input
                      style={{ marginLeft: '3px' }}
                      type="date"
                      id="endDate"
                      value={endDate}
                      // onChange={(e) => setEndDate(e.target.value)}
                      className="shadow border rounded-lg px-2 py-1"
                    />
                  </div>
                </div>
              </CardHeader>
              <div>
                <button
                  onClick={handleSubmit}
                  className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                  aria-label="Submit"
                  title="Submit"
                  style={{ backgroundColor: 'blue', marginBottom: '8px', marginLeft: '4px' }}
                  disabled={submitLoading}
                >
                  DITRANSFER
                </button>
                <button
                  onClick={handleSubmit}
                  className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                  aria-label="Submit"
                  title="Submit"
                  style={{ backgroundColor: 'green', marginBottom: '8px', marginLeft: '4px' }}
                  disabled={submitLoading}
                >
                  ALL KOMISI
                </button>
                <button
                  onClick={handleSubmit}
                  className="shadow-lg shadow-black-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                  aria-label="Submit"
                  title="Submit"
                  style={{ backgroundColor: 'red', marginBottom: '8px', marginLeft: '4px' }}
                  disabled={submitLoading}
                >
                  PENDING
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
              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["Member ID", "Keterangan", "Jml", "Status"].map(
                        (el) => (
                          <th
                            key={el}
                            className="border-b border-blue-gray-50 py-3 px-6 text-left"
                          >
                            <Typography
                              variant="small"
                              className="text-[11px] font-medium uppercase text-blue-gray-400"
                            >
                              {el}
                            </Typography>
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {projectsTableData.map(
                      ({ img, name, members, budget, completion }, key) => {
                        const className = `py-3 px-5 ${key === projectsTableData.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                          }`;

                        return (
                          <tr key={name}>
                            <td className={className}>
                              <div className="flex items-center gap-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-bold"
                                >
                                  {name}
                                </Typography>
                              </div>
                            </td>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                safdasfdasfaf
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                safdasfdasfaf
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                safdasfdasfaf
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div >
  );
}

export default DataKomisi;
