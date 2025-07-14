"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from "formik"
import * as Yup from "yup"
import toast from "react-hot-toast"
import { Loader } from "lucide-react"
import { useAddClientMutation } from "@/service/clientApi"
import { useRouter, useSearchParams } from "next/navigation"

export function AddClientForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const username = searchParams.get("username");
    const [addClient, { isLoading }] = useAddClientMutation();

    const formik = useFormik({
        initialValues: {
            username: username || "",
            password: "",
            name: "",
            email: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
        }),
        onSubmit: async (values, actions) => {
            try {
                const response = await addClient({ ...values }).unwrap();
                toast.success(response?.message || "Client add successfully");
                router.push("/admin/client-management");
                actions.resetForm();
            } catch (err) {
                toast.error(err?.data?.detail || "Something went wrong");
            }
        },
    });

    return (
        <div className={cn("flex flex-col gap-6 h-screen justify-center w-xl mx-auto")}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Add Client</CardTitle>
                    <CardDescription className="text-sm">Fill in the details below to create a new client</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={formik.handleSubmit} className="grid gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                disabled={username}
                                id="username"
                                type="text"
                                placeholder="client_username"
                                {...formik.getFieldProps("username")}
                            />
                            {formik.touched.username && formik.errors.username && (
                                <p className="text-sm text-red-500">{formik.errors.username}</p>
                            )}
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                {...formik.getFieldProps("password")}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-sm text-red-500">{formik.errors.password}</p>
                            )}
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                {...formik.getFieldProps("name")}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-sm text-red-500">{formik.errors.name}</p>
                            )}
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="client@example.com"
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-sm text-red-500">{formik.errors.email}</p>
                            )}
                        </div>

                        <Button type="submit" className="w-full" disabled={formik.isSubmitting || isLoading}>
                            {formik.isSubmitting || isLoading ? (
                                <div className="flex items-center gap-2 animate-pulse">
                                    <Loader className="h-4 w-4 animate-spin" />
                                </div>
                            ) : (
                                "Add Client"
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
