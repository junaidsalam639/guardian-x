import { AdminLoginForm } from "@/components/auth/admin-login-form";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

export default async function AdminLoginPage() {
    return (
        <>
            <div className="relative min-h-svh bg-muted">
                <Link href="/">
                    <Button className="absolute top-4 right-4 z-10">
                        Client Login
                    </Button>
                </Link>
                <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                    <div className="flex w-full max-w-sm flex-col gap-6">
                        <a href="#" className="flex items-center gap-2 self-center font-medium">
                            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                                <GalleryVerticalEnd className="size-4" />
                            </div>
                            GuardianX
                        </a>
                        <AdminLoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}


