'use client'

import Button from "@/shared/components/ui/Button/Button";
import StepperLayout from "@/shared/layouts/StepperLayout/StepperLayout";
import { setOtherState, setProduct } from "@/store/slices/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const router=useRouter();
  const product=useAppSelector(state=>state.product);
  const dispatch=useAppDispatch();

  const setData=()=>{
    dispatch(setProduct('G'))
    dispatch(setOtherState('este es un state'))
  }
  return (
    <StepperLayout>
     <Suspense fallback={<p>cargando</p>} > {JSON.stringify(product,null,2)}</Suspense>
      <Button onClick={setData} >Click</Button>
      <br />
      <Button onClick={() => router.push('/lol')} >other page</Button>
    </StepperLayout>
  );
}
