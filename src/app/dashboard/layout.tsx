
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="p-5">
      {children}
    </div>
  );
}