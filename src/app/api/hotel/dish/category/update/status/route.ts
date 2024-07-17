import { update_menu_category } from "./controller";

export async function PUT(request: Request) {
	try {
		const data = await request.json();
		const result = await update_menu_category(data);
		return Response.json(
			{
				returncode: result.returncode,
				message: result.message,
				output: result.output
			},
			{
				status: result.returncode
			}
		);
	}
	catch (error: any) {
		return Response.json(
			{
				returncode: 500,
				message: `Error Updating Menu Category Status: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}