import TransactionFilter from "@/app/components/custom/TransactionFilter";
import Table from "./table";

const Transactions = () => {
  return (
    <section className="w-full flex flex-col justify-start items-center h-full font-inter px-5 md:px-0 py-16">
      <div className="max-w-7xl w-full">
        <h1 className="text-black font-semibold text-lg md:text-xl mb-6">
          Transactions
        </h1>

        <TransactionFilter />
        <Table />
      </div>
    </section>
  );
};

export default Transactions;
