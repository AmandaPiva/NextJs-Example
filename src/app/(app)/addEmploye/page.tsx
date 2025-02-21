import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddEmploye() {
  return (
    <>
      <h1 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight p-4 text-gray-600 text-center">
        Add Employes
      </h1>
      <div className="flex flex-col space-y-4 items-center h-96 justify-center">
        <Input type="text" placeholder="Name" className="w-80" />
        <Input type="number" placeholder="Age" className="w-80" />
        <Input type="number" placeholder="Salary" className="w-80" />

        <Button variant="outline" className="bg-rose-600 text-white w-80">
          Add Employe
        </Button>
      </div>
    </>
  );
}
