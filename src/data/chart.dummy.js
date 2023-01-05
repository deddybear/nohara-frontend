import { faker } from "@faker-js/faker";

//nama variabel constan tidak boleh diganti
let labels = ["January", "February", "March", "April", "May", "June", "July"];


const ChartOptionsMonth = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Perbulan",
    },
  },
};

const ChartDataMonth = {
  labels,
  datasets: [
    {
      label: "Pengunjung",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

labels = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];

const ChartOptionsYear = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Pertahun",
    },
  },
};

const ChartDataYear = {
  labels,
  datasets: [
    {
      label: "Pengunjung",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const ChartDummy = [
  {
    option: ChartOptionsMonth,
    data: ChartDataMonth,
  },
  {
    option: ChartOptionsYear,
    data: ChartDataYear,
  },
];
