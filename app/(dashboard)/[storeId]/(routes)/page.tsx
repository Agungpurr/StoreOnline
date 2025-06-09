import db from "@/lib/db";

interface DashboardPageProops {
  params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPageProops) => {
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store : {store?.name}</div>;
};

export default DashboardPage;
