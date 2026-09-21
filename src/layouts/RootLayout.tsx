import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-black antialiased">
            <Header loggedIn={true} />

            <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6 pb-12 flex justify-center">
                <div className="w-full max-w-300">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
