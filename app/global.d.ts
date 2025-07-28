declare module "luckysheet" {
    const Luckysheet: {
      create: (config: any) => void;
      getAllSheets: () => any[];
    };
    export default Luckysheet;
  }