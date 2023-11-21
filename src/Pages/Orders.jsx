
import OrdersTable from '../Components/OrdersTable/OrdersTable'

export default function Orders() {
  return (
    <>
      <div className="container m-auto my-20">
        <h1 className=" font-bold text-2xl ">Orders</h1>
      </div>
      <div className="container m-auto">
        <OrdersTable />
      </div>
    </>
  );
}
