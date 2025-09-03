import { AxiosError } from "axios";

type ErrorMessages = {
  [key: number]: string;
};

const errorStatusMessages: ErrorMessages = {
  400: "Terjadi kesalahan saat melakukan permintaan.",
  401: "Anda tidak memiliki otorisasi. Silakan login terlebih dahulu.",
  403: "Akses dilarang. Anda tidak memiliki izin untuk melakukan tindakan ini.",
  404: "Sumber daya yang diminta tidak ditemukan.",
  405: "Metode HTTP yang digunakan tidak diizinkan.",
  408: "Waktu permintaan habis. Silakan coba lagi nanti.",
  429: "Terlalu banyak permintaan. Silakan coba lagi setelah beberapa waktu.",

  500: "Terjadi kesalahan internal pada server.",
  501: "Fitur yang diminta belum diimplementasikan pada server.",
  502: "Server mendapatkan respons yang tidak valid.",
  503: "Layanan tidak tersedia. Silakan coba lagi nanti.",
  504: "Server terlalu lama untuk merespon.",
  505: "Versi HTTP yang digunakan tidak didukung.",
};

export const handleErrorService = (error: AxiosError): string => {
    
    let errorMessage = "";
  if (error.response?.status) {
    const status = error.response.status;
   errorMessage = errorStatusMessages[status] || `Terjadi kesalahan dengan kode: ${status}`;
  }
  if (error.request) {
    errorMessage = "Gagal terhubung ke server. Periksa koneksi internet Anda.";
  }
  errorMessage = error.message || "Terjadi kesalahan yang tidak diketahui.";

  return errorMessage;
};
