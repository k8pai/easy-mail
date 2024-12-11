'use client'

import { Table } from '@tanstack/react-table'
import { X } from 'lucide-react'

import { DataTableViewOptions } from '@/components/data-table-view-options'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface DataTableToolbarProps<TData> {
	table: Table<TData>
}

export function DataTableToolbar<TData>({
	table,
}: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-1 items-center space-x-2">
				<Input
					placeholder="Filter labels..."
					value={
						(table.getColumn('From')?.getFilterValue() as string) ??
						''
					}
					onChange={(event) =>
						table
							.getColumn('From')
							?.setFilterValue(event.target.value)
					}
					className="h-8 w-[150px] lg:w-[250px]"
				/>
				{/* {table.getColumn('name') && (
					<DataTableFacetedFilter
						column={table.getColumn('name')}
						title="name"
						options={statuses}
					/>
				)} */}
				{/* {table.getColumn('type') && (
					<DataTableFacetedFilter
						column={table.getColumn('')}
						title="type"
						options={labelTypes}
					/>
				)} */}
				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetColumnFilters()}
						className="h-8 px-2 lg:px-3"
					>
						Reset
						<X />
					</Button>
				)}
			</div>
			<DataTableViewOptions table={table} />
		</div>
	)
}
