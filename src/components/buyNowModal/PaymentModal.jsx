import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";

export default function PaymentModal({ isOpen, setIsOpen, price, buyNowFunction, clearCart }) {
    function closeModal() {
        setIsOpen(false);
    }

    const launchRazorPay = () => {
        const options = {
            key: "rzp_test_OfAYJ0dWqrCaUY",
            amount: price * 100, // amount in paisa
            currency: "INR",
            name: "Maruthi Super Market",
            description: "Furniture Shop",
            image: "data:image/png;base64,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",
            handler: function (response) {
                setIsOpen(false);
                toast.success("Order placed successfully");
                buyNowFunction();
                clearCart(); // Clear the cart after successful order placement
            },
            prefill: {
                name: "Maruthi Super Market",
                email: "maruthi@gmail.com",
                contact: "9344611806"
            },
            theme: { color: "#252525" }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 overflow-y-auto z-50"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Please make a payment
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Hello Please click on the below button to make a payment.
                                    </p>
                                </div>

                                <div className="w-full mt-4">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                        onClick={launchRazorPay}
                                    >
                                        Pay ₹{price}
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                        onClick={closeModal}
                                    >
                                        Cancel Payment
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
