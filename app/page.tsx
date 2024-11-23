import BirthdayComponent from "@/components/birthday";
import { use } from 'react'

export default function Home({ searchParams }: any) {

    const { name }: any = use(searchParams) ?? 'H'

    if (!name) {
        return (
            <div className="text-xl flex justify-center">
                <div>
                    Please insert your name in the params
                    <p className="font-bold text-red-500">
                        such as &quot;https://url/?name=JohnDoe&quot;
                    </p>
                </div>
            </div>
        )

    }


    return (
        <>
            <BirthdayComponent name={name} />
        </>
    );
}
