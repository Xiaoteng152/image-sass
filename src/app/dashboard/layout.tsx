import { getServerSession } from "@/server/auth";
import { redirect } from "next/navigation";
import * as React from 'react';

export default function DashboardLayout({children}:{children:React.ReactNode}){
  return (
    <>DashBoard</>
  )
}
