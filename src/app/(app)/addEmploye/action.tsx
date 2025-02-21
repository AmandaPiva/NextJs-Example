"use server";
import { getEmployes } from "../getEmployes";

const employesList = getEmployes;
export async function addEmploye(name: string, age: number, salary: number) {
  employesList.push({ id: employesList.length + 1, name, age, salary });
  return employesList;
}
