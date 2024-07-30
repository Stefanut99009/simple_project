import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className=" bg-neutral-300 bg-cover min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            <div>
                <Link href="/">
                    <ApplicationLogo className="bg-[url('https://i.pinimg.com/564x/29/15/84/29158407a8418ecaf7f5ae309b1df120.jpg')] bg-cover w-[400px] h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className=" bg-[url('https://i.pinimg.com/564x/c5/c9/5c/c5c95c2bb5fe6643208c3650bc32abd6.jpg')] bg-center bg-cover w-[400px] h-[400px] bg-no-repeat relative ">

                {children}
            </div>
        </div>
    );
}
