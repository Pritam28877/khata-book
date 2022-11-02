// db
import {
  getInvoices as getInvoicesDB,
  getInvoice as getInvoiceDB,
} from '@webWorkers/DB/invoices';

export const getInvoices = getInvoicesDB;
export const getInvoice = getInvoiceDB;
