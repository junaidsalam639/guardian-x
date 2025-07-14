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
import { useUserLoginApiMutation } from "@/service/authApi"
import { Loader } from "lucide-react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { setToken, setUser } from "@/redux/authSlice"

export function UserLoginForm({ className, ...props }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useUserLoginApiMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await login({ ...values }).unwrap();
        dispatch(setToken(response?.access_token));
        dispatch(setUser(response));
        toast.success(response?.message || "Client login successfully");
        router.push("/user/dashboard");
      } catch (err) {
        toast.error(err?.data?.detail || "Something went wrong");
      }
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Log in to your account</CardTitle>
          <CardDescription className="text-sm">Enter your username and password below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik?.handleSubmit} className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="john_doe"
                {...formik?.getFieldProps("username")}
              />
              {formik?.touched.username && formik?.errors.username && (
                <p className="text-sm text-red-500">{formik?.errors.username}</p>
              )}
            </div>

            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                {...formik?.getFieldProps("password")}
              />
              {formik?.touched.password && formik?.errors.password && (
                <p className="text-sm text-red-500">{formik?.errors.password}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={formik?.isSubmitting || isLoading}>
              {formik?.isSubmitting || isLoading ? (
                <div className="animate-spin">
                  <Loader />
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
