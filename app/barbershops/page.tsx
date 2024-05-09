import { db } from "../_lib/prisma";

interface BarbershopDetailsPageProps {
        params: any;
        // params: {
        //         id?: string;
        // };
}

const BarbershopDetailsPage = ({ params }: BarbershopDetailsPageProps) => {

        return <h1>{params.id}</h1>;

        // if (!params.id) {
        //         // TODO; redirecionar para home page
        //         return null;
        // }

        // const barbershop = await db.barbershop.findUnique({
        //         where: {
        //                 id: params.id,
        //         },
        // });

        // if (!barbershop) {
        //         return null;
        // }

        // return (

        //         <h1>{barbershop.name}</h1>
        // );
};

export default BarbershopDetailsPage;