// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import headerData from "../../dummy-data/header.json"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
// import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function HeaderMenu() {

    const { below = [] } = headerData[headerData.length - 1]
    console.log(below);
    return (
        <Navbar isBordered isBlurred={false}>
            <NavbarBrand>
                {/* <AcmeLogo /> */}
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" style={{ justifyContent: "space-evenly", height: '70px' }}>
                {headerData.slice(0, headerData.length - 1).map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color="foreground" href={item.absolute_url}>
                            {item.title}
                        </Link>
                    </NavbarItem>
                ))}
                <Dropdown style={{ border: 'none' }}>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                // endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                {headerData[headerData.length - 1].title}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        style={{ padding: '10px', backgroundColor: '#fff', border: 'none' }}
                    >
                        {below.map((item, index) => (
                            <DropdownItem
                                key={index}
                                style={{ display: 'block', height: '30px' }}
                                // startContent={icons.scale}
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