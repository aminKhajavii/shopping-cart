import { useCartContext } from "../context";
import { CartItem } from "./cartItem";
export const Cart = () => {
  const { cart, clearCart, total, quantity } = useCartContext();

  let renderedContent = (
    <>
      <h5 className="text-center">هیچ ایتمی در سبد خرید وجود ندارد</h5>
    </>
  );
  if (cart.length > 0) {
    renderedContent = (
      <>
        <div className="col-lg-8 col-md-7 pt-sm-2">
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        {/* <!-- Sidebar--> */}
        <div className="col-lg-4 col-md-5 pt-3 pt-sm-4 border-end">
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">تعداد محصولات</p>
              <p className="text-lg font-semibold text-gray-900">{quantity}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">جمع کل</p>
            <p className="text-2xl font-semibold text-gray-900">
              <span className="text-xs font-normal text-gray-400">تومان</span>{" "}
              {total.toLocaleString()}
            </p>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={clearCart}
              type="button"
              className="group inline-flex w-full items-center justify-center rounded-md bg-red-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-red-700"
            >
              حذف همه آیتم ها
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <section className=" h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">سبد خرید</h1>
        </div>

        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">{renderedContent}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
