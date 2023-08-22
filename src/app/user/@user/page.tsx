"use client";
import { baseUrl, refreshToken } from "@/app/url";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section className="pt-8 h-[40vh] min-h-[600px] flex flex-col justify-center gap-10 w-full text-white bg-slate-800 px-6">
      <p className="w-full max-w-7xl mx-auto text-xl font-light">User</p>
      <h1 className=" text-6xl md:text-7xl font-bold text-balance max-w-7xl mx-auto capitalize">
        <span className="text-primary">Tailor</span> Your Details & Feel Right
        at Home
      </h1>
    </section>
  );
};
const Company = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    fetch(`${baseUrl}auth/user-data/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}")["access-token"] || ""
        }`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (res.status === 400) {
            console.log("Bad request");
            router.replace("/login");
          } else if (res.status === 401) {
            console.log("Unauthorized");
            refreshToken();
          } else {
            console.log("error");
          }
        }
      })
      .then((data) => {
        if (!data) return;
        setUser(data);
      });
  }, []);
  return (
    (user && (
      <div className="w-full bg-pattern">
        <div className="flex w-full max-w-7xl mx-auto mb-5 px-5">
          <h2 className="font-bold text-xl px-5 py-3 -translate-x-5 bg-primary text-white flex items-center">
            Company Details
          </h2>
          <div className="">
            <h2 className="font-bold text-xl px-5 pt-3">
              {user["first_name"]} {user["middle_name"] || ""}{" "}
              {user["last_name"]}
            </h2>
            <p className="pl-5 ">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full max-w-7xl mx-auto pb-8 px-5">
          <div>
            <h3 className="font-bold text-lg my-2">Address</h3>
            <address>
              {user.company_name}
              <br />
              {user.company_address}
              <br />
              {user.city}, {user.state} {user.postal_zip}
            </address>
          </div>
          <div>
            <h3 className="font-bold text-lg my-2 ">License type</h3>
            <p>Business License</p>
          </div>
          <div>
            <h3 className="font-bold text-lg my-2 ">Contact number</h3>
            <p>{user.company_contact_number}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg my-2 ">License number</h3>
            <p>{user.license_number}</p>
          </div>
          <button
            className="bg-primary px-4 py-2 text-white rounded w-fit mt-8"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    )) || <></>
  );
};
function CartElement({
  item_id,
  product,
  quantity,
}: {
  item_id: string;
  product: string;
  quantity: number;
}) {
  const [productData, setProductData] = useState<any>(null);
  const [quantityState, setQuantityState] = useState(quantity);
  useEffect(() => {
    fetch(`${baseUrl}product/product-list/view-single/${product}/`)
      .then((e) => {
        if (!e.ok) {
          throw new Error("Error fetching product");
        }
        return e.json();
      })
      .then((data) => {
        if (!data) return;
        setProductData(data);
      });
  }, []);

  if (productData === null) return <>Loading item...</>;
  return (
    <div className="flex gap-4 w-full bg-slate-300 px-4 py-3 items-center">
      {productData.product_name}
      <div className="flex gap-4 ml-auto">
        <div className="px-4 py-2 border">Qty: {quantityState}</div>
        <Link
          href={`/products/${productData.product_id}`}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          View
        </Link>
      </div>
    </div>
  );
}
function Modal({ cart }: { cart: Array<any> }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-primary px-4 py-2 -ml-5 text-white sm:rounded-tl-xl hover:bg-blue-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View Details
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Order Details</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {cart.map((e) => (
                    <CartElement
                      item_id={e.item_id}
                      product={e.product}
                      quantity={e.quantity}
                      key={e.item_id}
                    />
                  ))}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
const Quote = ({
  isSheet,
  date,
  status,
  cartItems,
  quote_request_data,
  qrd,
}: {
  isSheet: boolean;
  date: string;
  status: string;
  cartItems: any;
  quote_request_data: string;
  qrd: string;
}) => {
  const newDate = new Date(date);
  const localisedDate = newDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="w-full pt-5 pl-5 bg-slate-50 rounded-xl overflow-hidden">
      <h4 className="text-lg font-bold">
        {"Quote order id:" + quote_request_data}
      </h4>
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <p>
          Submit date: <time dateTime={date}>{localisedDate}</time>
        </p>
        <p>Payment Status: {status}</p>
        <p>Type: {isSheet ? "Sheet Metal Order" : "Product Order"}</p>
        {isSheet ? (
          <Link
            href={`/custom-sheet-metal-view?id=${qrd}`}
            className="bg-primary px-4 py-2 -ml-5 text-white sm:rounded-tl-xl hover:bg-blue-500"
          >
            View Details
          </Link>
        ) : (
          <Modal cart={cartItems} />
        )}
      </div>
    </div>
  );
};
const Quotes = () => {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${baseUrl}cart/view-user-quote-requests/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}")["access-token"] || ""
        }`,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("success");
          return res.json();
        } else {
          if (res.status === 400) {
            console.log("Bad request");
            router.replace("/login");
          } else if (res.status === 401) {
            console.log("Unauthorized");
            refreshToken();
          } else {
            console.log("error");
          }
        }
      })
      .then((data) => {
        if (!data) return;
        setData(data.results);
      });
  }, []);
  return (
    <div className="w-full bg-[#0A132E] ">
      <div className="w-full max-w-7xl mx-auto px-5 pb-12">
        <h2 className="font-bold text-xl px-5 py-3 w-fit bg-primary text-white flex items-center mb-8">
          Quote History
        </h2>
        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-zinc-100 h-[50vh]">
            <h1 className="text-2xl font-bold text-center">
              You have no quotes
            </h1>
            <p className="text-center">
              Please{" "}
              <Link href="/categories" className="text-primary">
                order
              </Link>{" "}
              to order our products
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {data.map((e) => (
              <Quote
                key={e["quote_response_id"]}
                isSheet={e["is_custom_sheet_metal"]}
                date={e["created_at"]}
                status={e["payment_status"]}
                cartItems={e["cart_items"]}
                quote_request_data={e["quote_request_data"]}
                qrd={e["quote_response_id"]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default function User() {
  return (
    <>
      <Hero />
      <main className="flex flex-col items-center">
        <Company />
        <Quotes />
      </main>
    </>
  );
}
