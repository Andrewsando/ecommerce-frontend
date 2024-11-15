'use client';
import { useSearchParams } from 'next/navigation';


export default function CartPage() {

    const searchParams = useSearchParams();
    const step = searchParams.get('step')||1;

    const currentStep = Number(step)

    return (

        <div>
            {currentStep === 1 && <p>Step One</p>}
            {currentStep === 2 && <p>Step Two</p>}
            {currentStep === 3 && <p>Step Three</p>}
        </div>

    )
}