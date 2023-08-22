"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { baseUrl, refreshToken } from "../url";
import Link from "next/link";

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

  function add() {
    (document.querySelector("#add") as HTMLButtonElement).disabled = true;
    fetch(`${baseUrl}cart/modify-quantity/${product}/${quantity + 1}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}")["access-token"] || ""
        }`,
      },
    }).then((e) => {
      if (!e.ok) {
        throw new Error("Error adding product");
      }
      setQuantityState((quantity) => quantity + 1);
      document.querySelector("#add")?.removeAttribute("disabled");
    });
  }

  function remove() {
    (document.querySelector("#add") as HTMLButtonElement).disabled = true;

    fetch(`${baseUrl}cart/modify-quantity/${product}/${quantity - 1}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}")["access-token"] || ""
        }`,
      },
    }).then((e) => {
      if (!e.ok) {
        throw new Error("Error removing product");
      }
      setQuantityState((quantity) => {
        if (quantity === 1) {
          fetch(`${baseUrl}cart/remove-item/${product}/`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user") || "{}")[
                  "access-token"
                ] || ""
              }`,
            },
          });
          window.location.reload();
        }
        return quantity - 1;
      });

      document.querySelector("#add")?.removeAttribute("disabled");
    });
  }

  if (productData === null) return <>Loading item...</>;
  return (
    <div className="flex gap-4 w-full bg-slate-300 px-4 py-3 items-center">
      {productData.product_name}
      <div className="flex gap-4 ml-auto">
        <div className="px-4 py-2 border">{quantityState}</div>
        <button
          className="px-4 py-2 border border-primary text-primary rounded-md"
          id="add"
          onClick={add}
        >
          +<span className="sr-only">Increase quantity</span>
        </button>
        <button
          className="px-4 py-2 border  border-primary text-primary rounded-md"
          id="remove"
          onClick={remove}
        >
          -<span className="sr-only">Decrease quantity</span>
        </button>
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

function Modal({ accept }: { accept: () => void }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Checkout
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Checkout</h3>
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
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure you want to checkout? The cart will be cleared,
                    and the items will be added to your order history.
                  </p>
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
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      accept();
                    }}
                  >
                    Confirm Checkout
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

export default function Cart() {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.replace("/login");
    }
    fetch(`${baseUrl}cart/view-cart/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}")["access-token"] || ""
        }`,
      },
    })
      .then((e) => {
        if (!e.ok) {
          if (e.status === 400) {
            // cart is empty
            setCart([]);
            return;
          }
          if (e.status === 401) {
            refreshToken().then(() => {
              router.refresh();
            });
            return;
          }
          throw new Error("Error fetching cart");
        }
        return e.json();
      })
      .then((data) => {
        if (!data) return;
        setCart(data.results);
      });
  }, []);

  function checkOut() {
    fetch(`${baseUrl}cart/request-quote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}")["access-token"] || ""
        }`,
      },
    }).then((e) => {
      if (!e.ok) {
        alert("Error checking out");
        throw new Error("Error checking out");
      }
      setCart([]);
      if (e.status === 401) {
        refreshToken().then(() => {
          router.refresh();
        });
      }
    });
  }
  return (
    <div className="pt-28">
      <div className=" max-w-7xl mx-auto min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Cart</h1>
        <div className="flex flex-col gap-4 w-full">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <h2 className="text-2xl font-bold">Your cart is empty</h2>
              <Link
                href="/categories"
                className="px-4 py-2 bg-primary text-white rounded-md"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4 w-full mt-6">
              {cart.map((e) => (
                <CartElement
                  item_id={e.item_id}
                  product={e.product}
                  quantity={e.quantity}
                  key={e.item_id}
                />
              ))}
              <Modal accept={checkOut} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
