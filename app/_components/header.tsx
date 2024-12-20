import Image from "next/image";
import { Car, MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Header = () => {
        return (
                <Card>
                        <CardContent className="p-5 py-8 justify-between items-center flex flex-row">
                                <Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
                                <Button variant="outline" size="icon" className="h-8  w-8">
                                        <MenuIcon size={18} />
                                </Button>
                        </CardContent>
                </Card>
        );
}

export default Header;