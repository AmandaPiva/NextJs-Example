"use client";

import { getEmployes } from "../getEmployes";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function Employe() {
  const [clicked, setClicked] = useState(false);
  const result = getEmployes;

  if (clicked == true) {
    redirect("/addEmploye");
  }
  return (
    <>
      <div className="p-4">
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight p-4 text-gray-600 text-center">
          List of Employes
        </h3>

        <Table className="w-full border border-gray-200">
          <TableCaption>A list of employes.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Salary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {result.map((employe) => (
              <TableRow>
                <TableCell className="font-medium">{employe.name}</TableCell>
                <TableCell>{employe.age}</TableCell>
                <TableCell>{employe.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button
          onClick={() => setClicked(true)}
          variant="outline"
          className="bg-rose-600 text-white"
        >
          Add Employe
        </Button>
      </div>
    </>
  );
}
