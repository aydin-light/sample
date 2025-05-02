"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"
import AdminPanel from "@/components/adminpanel/adminpanel";
export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
      router.push("/public/home");
      return;
    }

    const parsedUser = JSON.parse(user);
    if (parsedUser.role !== "admin") {
      router.push("/public/home");
    }
  }, []);

  return(
    <>
    <AdminPanel/>
    </>
  );
}
