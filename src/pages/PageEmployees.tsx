import db from "../data/db.json";

const employees = db.employees;

export const PageEmployees = () => {
	return (
		<>
			{employees.length === 0 ? (
				<p>Loading...</p>
			) : (
				<>
					<p>There are {employees.length} employees.</p>

					<div className="relative mt-4 w-full overflow-x-auto rounded">
						<table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
							<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										ID
									</th>
									<th scope="col" className="px-6 py-3">
										First Name
									</th>
									<th scope="col" className="px-6 py-3">
										Last Name
									</th>
									<th scope="col" className="px-6 py-3">
										Age
									</th>
									<th scope="col" className="px-6 py-3">
										Hire Date
									</th>
									<th scope="col" className="px-6 py-3">
										Employee Number
									</th>
									<th scope="col" className="px-6 py-3">
										Notes
									</th>
								</tr>
							</thead>
							<tbody>
								{employees.map((employee) => {
									return (
										<tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
											<td className="px-6 py-4">
												{employee.id}
											</td>
											<td className="px-6 py-4">
												{employee.firstName}
											</td>
											<td className="px-6 py-4">
												{employee.lastName}
											</td>
											<td className="px-6 py-4">
												{employee.age}
											</td>
											<td className="px-6 py-4">
												{employee.hireDate}
											</td>
											<td className="px-6 py-4">
												{employee.employeeNumber}
											</td>
											<td className="px-6 py-4">
												{employee.notes}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</>
			)}
		</>
	);
};
