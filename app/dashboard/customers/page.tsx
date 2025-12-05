import { fetchCustomersPages } from "@/app/lib/data";
import Table from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Customers",
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query: string; page: string }>;
}) {
  const { query = "", page = "1" } = await searchParams;
  const totalPages = await fetchCustomersPages(query);

  return (
    <article>
      <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>

      <Search placeholder="Search customers..." />

      <Suspense key={query + page} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={page} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </article>
  );
}
