import { CovidData } from "./store/types";

export const getDataFromLocal = <T>(uri: string): T | undefined => {
  try {
    const area = localStorage.getItem(uri);
    if (area) return JSON.parse(area);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const setDataToLocal = <T>(uri: string, data: T) => {
  localStorage.setItem(uri, JSON.stringify(data));
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const parseDate = (date: Date) => {
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const calculateCovidTotal = (covidData: CovidData[]): CovidData => {
  return covidData.reduce(
    (prev, cur) => ({
      ...prev,
      Active: cur.Active + prev.Active,
      Confirmed: cur.Confirmed + prev.Confirmed,
      Deaths: cur.Deaths + prev.Deaths,
      Recovered: cur.Recovered + prev.Recovered
    }),
    {
      Country: "",
      Active: 0,
      Confirmed: 0,
      Deaths: 0,
      Recovered: 0,
      Date: parseDate(new Date())
    }
  );
};

export const adjustCovidTimeline = (covidData: CovidData[]): CovidData[] => {
  return covidData.reverse().map(covid => ({
    ...covid,
    Date: parseDate(new Date(covid.Date))
  }));
};
