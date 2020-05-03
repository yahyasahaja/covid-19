import { getDataFromLocal, setDataToLocal } from "./utils";

type Data = {
  name: string;
};

const data: Data = {
  name: "Covid data"
};

const URI = "coviddataurl";

describe("Util functions", () => {
  it("should be able to set and get the correct value", () => {
    setDataToLocal(URI, data);
    const result = getDataFromLocal<Data>(URI);
    expect(result?.name).toEqual(data.name);
  });
});
