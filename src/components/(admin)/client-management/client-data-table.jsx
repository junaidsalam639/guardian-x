"use client"
import * as React from "react"
import {
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight,
    IconDotsVertical,
} from "@tabler/icons-react"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useDeleteClientMutation, useGetClientQuery } from "@/service/clientApi"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { setClientManagement } from "@/redux/clientManagementSlice"
import toast from "react-hot-toast"
import { Plus } from "lucide-react"


export function ClientDataTable() {
    const [deleteClient] = useDeleteClientMutation();
    const { data: clientData, isLoading } = useGetClientQuery();
    const data = clientData?.api_data?.data || [];
    const router = useRouter();
    const dispatch = useDispatch();

    const columns = [
        {
            accessorKey: "customer_id",
            header: "Customer ID",
            cell: ({ row }) => <div>{row.getValue("customer_id")}</div>,
        },
        {
            accessorKey: "customer_uuid",
            header: "UUID",
            cell: ({ row }) => <div>{row.getValue("customer_uuid")}</div>,
        },
        {
            accessorKey: "customer_name",
            header: "Name",
            cell: ({ row }) => <div>{row.getValue("customer_name")}</div>,
        },
        {
            accessorKey: "customer_description",
            header: "Description",
            cell: ({ row }) => <div>{row.getValue("customer_description")}</div>,
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const client = row.original;
                return (
                    <>
                        {client?.is_registered ? (
                            <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="size-8 p-0">
                                            <IconDotsVertical className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => {
                                            dispatch(setClientManagement(client))
                                            router.push("/admin/edit-client-management?value=edit")
                                        }}>
                                            Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => handleDelete(client?.customer_id)}
                                            className="text-red-600"
                                        >
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                        ) : (
                            <>
                                <Button
                                    onClick={() => {
                                        dispatch(setClientManagement(client))
                                        router.push("/admin/add-client-management?value=add")
                                    }} className="mb-2 flex items-center gap-2">
                                    <Plus className="w-4 h-4" />
                                    Add
                                </Button>
                            </>
                        )}
                    </>
                );
            },
        },
    ];

    const table = useReactTable({
        data,
        columns,
        state: {},
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const handleDelete = async (id) => {
        try {
            const response = await deleteClient(id).unwrap();
            toast.success(response?.message || "Client delete successfully");
        } catch (err) {
            toast.error(err?.data?.detail || "Something went wrong");
        }
    };

    if (isLoading) return <div className="p-4">Loading clients...</div>;

    return (
        <div className="space-y-4 p-6">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-semibold">Client Management</h2>
            </div>

            <div className="border rounded-md overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted">
                        {table?.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table?.getRowModel().rows.length ? (
                            table?.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="text-center py-6">
                                    No clients found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-between px-2">
                <div className="text-sm text-muted-foreground">
                    Page {table?.getState().pagination.pageIndex + 1} of {table?.getPageCount()}
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table?.setPageIndex(0)}
                        disabled={!table?.getCanPreviousPage()}>
                        <IconChevronsLeft />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table?.previousPage()}
                        disabled={!table?.getCanPreviousPage()}>
                        <IconChevronLeft />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table?.nextPage()}
                        disabled={!table?.getCanNextPage()}>
                        <IconChevronRight />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table?.setPageIndex(table?.getPageCount() - 1)}
                        disabled={!table?.getCanNextPage()}>
                        <IconChevronsRight />
                    </Button>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                    <Label htmlFor="rows-per-page" className="text-sm">
                        Rows per page
                    </Label>
                    <Select
                        value={`${table?.getState().pagination.pageSize}`}
                        onValueChange={(value) => table?.setPageSize(Number(value))}>
                        <SelectTrigger className="w-[70px]" id="rows-per-page">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {[5, 10, 20, 30, 50].map((size) => (
                                <SelectItem key={size} value={`${size}`}>
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}

