'use client'

import Button from "@/shared/components/ui/Button/Button";
import StepperLayout from "@/shared/layouts/StepperLayout/StepperLayout";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function Lol() {
  const router=useRouter();
  const product=useAppSelector(state=>state.product);
  return (
    <StepperLayout>
     <Suspense fallback={<p>cargando</p>} > {JSON.stringify(product,null,2)}</Suspense>
      <Button onClick={() => router.push('/lol')} >other page</Button>
    </StepperLayout>
  );
}
