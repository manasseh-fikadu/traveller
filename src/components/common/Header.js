import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Header() {
  // const history = useHistory();
  const [connecting, setConnecting] = useState(false);
  const { connected, select } = useWallet();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const User = {
    name: "John Doe",
    avatar: "https://avatarfiles.alphacoders.com/201/201969.jpg",
  };

  const onConnect = () => {
    setConnecting(true);
    select(PhantomWalletName);
  };

  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              traveller
            </span>
          </a>
          {connected ? (
            <div class="flex items-center lg:order-2">
              <button>
                <a
                  onClick={onConnect}
                  class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  {connecting ? "Connecting..." : "Connected"}
                </a>
              </button>
              <a
                href="/profile"
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                {User.name}
              </a>
            </div>
          ) : (
            <div class="flex items-center lg:order-2">
              <button>
                <a
                  onClick={onConnect}
                  class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Log in
                </a>
              </button>
              <a
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
