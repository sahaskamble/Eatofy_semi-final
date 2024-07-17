import { ApiResponse } from "@/types/ApiResponse";
import { read_invoice_by_payment_status } from "@/db/crud/inventory/purchases/invoices/read";

export async function payment_filter(data: any): Promise<ApiResponse> {
	try {

		const payment_status: string | null = data['payment_status'];

		// Default Invalid Checker
		if ( payment_status == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Getting the Sections
		const result = await read_invoice_by_payment_status({
			payment_status
		});

		return {
			returncode: 200,
			message: "Invoices Fetched",
			output: result.output
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}