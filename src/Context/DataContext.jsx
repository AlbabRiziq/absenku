import { createContext } from "react";

const DataContext = createContext({
  nama: null,
  nisn: null,
  nis: null,
  absen: {
    sakit: null,
    izin: null,
    alfa: null,
  },
});

export default DataContext;
