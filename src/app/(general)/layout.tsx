'use client'
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <div className="bg-slate-500 min-h-screen text-white text-center justify-center flex items-center">
                {children}
            </div>
    );
}
