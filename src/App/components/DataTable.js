import React from "react";
import { Table, Pagination } from "react-bootstrap";
export default function DataTable(props) {
	console.log(props);
	const header = props.header.map((head) => {
		return (
			<th width={"5%"} key={head}>
				{head}
			</th>
		);
	});

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>{header}</tr>
				</thead>
				<tbody>
					{props.loading ? (
						<tr>
							<td>"Loading"</td>
						</tr>
					) : (
						props.data
					)}
				</tbody>
			</Table>
			<Pagination>
				<Pagination.Item
					onClick={() => props.pageHandler(Number(props.pageNo) - 1)}
				>
					Prev
				</Pagination.Item>
				<Pagination.Item
					onClick={() => props.pageHandler(Number(props.pageNo) + 1)}
				>
					Next
				</Pagination.Item>
			</Pagination>
		</div>
	);
}
