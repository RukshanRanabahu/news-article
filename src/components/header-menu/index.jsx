import headerData from "../../pages/dummy-data/header.json";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { Logo } from "../../icons/logo";

export default function HeaderMenu() {
    // Destructuring the last item in the header data array
    const { below = [] } = headerData[headerData.length - 1];

    return (
        <Navbar isBordered isBlurred={false} className="justify-start">
            <NavbarBrand className="-ml-10"> {/* Adjusted left margin using Tailwind */}
                <Logo /> {/* Dummy LOGO */}
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-8 justify-center h-[30px]">
                {/* Map through all header items except the last one */}
                {headerData.slice(0, -1).map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color="foreground" className="text-lg font-bold" href={item.absolute_url}>
                            {item.title}
                        </Link>
                    </NavbarItem>
                ))}
                {/* Dropdown for the last header item */}
                <Dropdown className="border-none">
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent hover:bg-transparent text-lg font-bold"
                                radius="sm"
                                variant="light"
                            >
                                {headerData[headerData.length - 1].title}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu className="flex-col p-2 bg-[#fdfdfd] border-none">
                        {below.map((item, index) => (
                            <DropdownItem
                                key={index}
                                className="block text-lg font-bold"
                                href={item.absolute_url}
                            >
                                {item.title}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
