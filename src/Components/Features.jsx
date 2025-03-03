import React from "react";

function Features() {
  return (
    <div className="flex bg-[#F8F9FF] flex-col justify-center items-center py-28 px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 justify-center items-center">
        <div className="hidden md:flex items-center justify-center">
          <img
            className="bg-transparent w-[400px]"
            src="data:image/jpeg;base64,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"
          />
        </div>
        <div className="flex flex-col gap-2 text-center md:text-left items-start">
          <h1 className="text-4xl w-full md:text-5xl text-[#2D2D2D] capitalize font-bold leading-snug">
            Our features
          </h1>
          <p className="text-md text-[#2D2D2D] md:w-[70%] font-normal">
            Few good reasons why you should use Anima Landing Page Ui Kit to
            make your own pages.
          </p>
          <div className="grid sm:grid-cols-2 py-4 w-full gap-5">
            <div className=" inline-flex items-center px-3 py-2 rounded-2xl gap-3 bg-white shadow-xs border border-gray-200 hover:shadow-md transition-all duration-300 max-w-full">
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24.8902C0 13.3926 0 7.64374 3.57187 4.07187C7.14374 0.5 12.8926 0.5 24.3902 0.5H25.6098C37.1074 0.5 42.8563 0.5 46.4281 4.07187C50 7.64374 50 13.3926 50 24.8902V26.1098C50 37.6074 50 43.3563 46.4281 46.9281C42.8563 50.5 37.1074 50.5 25.6098 50.5H24.3902C12.8926 50.5 7.14374 50.5 3.57187 46.9281C0 43.3563 0 37.6074 0 26.1098V24.8902Z"
                  fill="#E5F4F2"
                />
                <path
                  opacity="0.2"
                  d="M29.9018 19.5778C30.3597 20.4117 30.6005 21.3474 30.6021 22.2988V22.6889C30.6037 23.0503 30.4814 23.4012 30.2557 23.6834C30.03 23.9655 29.7144 24.1618 29.3616 24.2395C27.9301 24.5595 26.4666 24.7139 24.9999 24.6997C23.5332 24.7139 22.0697 24.5595 20.6383 24.2395C20.2854 24.1618 19.9698 23.9655 19.7441 23.6834C19.5184 23.4012 19.3962 23.0503 19.3978 22.6889V22.3788C19.3984 21.3969 19.6534 20.4318 20.1381 19.5778C16.3866 20.3481 13.7957 21.9987 13.7957 23.8994C13.7957 26.5504 18.8076 28.7012 24.9999 28.7012C31.1923 28.7012 36.2042 26.5504 36.2042 23.8994C36.2042 21.9987 33.6332 20.3581 29.9018 19.5778Z"
                  fill="#009379"
                />
                <path
                  d="M29.0815 31.5723L29.4717 33.9332"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 31.9025V35.1037"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9185 31.5723L20.5283 33.9332"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.9018 19.5778C33.6332 20.3581 36.2042 21.9987 36.2042 23.8994C36.2042 26.5504 31.1923 28.7012 24.9999 28.7012C18.8076 28.7012 13.7957 26.5504 13.7957 23.8994C13.7957 21.9987 16.3866 20.3481 20.1381 19.5778"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3977 22.6889C19.3961 23.0503 19.5184 23.4012 19.7441 23.6834C19.9698 23.9655 20.2853 24.1618 20.6382 24.2395C22.0697 24.5595 23.5331 24.7139 24.9999 24.6997C26.4666 24.7139 27.9301 24.5595 29.3615 24.2395C29.7144 24.1618 30.0299 23.9655 30.2556 23.6834C30.4814 23.4012 30.6036 23.0503 30.602 22.6889V22.2988C30.602 21.5572 30.4549 20.8229 30.169 20.1387C29.8831 19.4544 29.4641 18.8337 28.9365 18.3125C28.4088 17.7914 27.783 17.3802 27.0952 17.1028C26.4074 16.8255 25.6714 16.6874 24.9298 16.6967C21.8487 16.7367 19.3977 19.3077 19.3977 22.3788V22.6889Z"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Fast Building</p>
            </div>
            <div className="inline-flex items-center px-4 py-3 rounded-2xl gap-3 bg-white shadow-xs border border-gray-200 hover:shadow-md transition-all duration-300 max-w-full">
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24.8902C0 13.3926 0 7.64374 3.57187 4.07187C7.14374 0.5 12.8926 0.5 24.3902 0.5H25.6098C37.1074 0.5 42.8563 0.5 46.4281 4.07187C50 7.64374 50 13.3926 50 24.8902V26.1098C50 37.6074 50 43.3563 46.4281 46.9281C42.8563 50.5 37.1074 50.5 25.6098 50.5H24.3902C12.8926 50.5 7.14374 50.5 3.57187 46.9281C0 43.3563 0 37.6074 0 26.1098V24.8902Z"
                  fill="#E5F4F2"
                />
                <path
                  opacity="0.2"
                  d="M29.9018 19.5778C30.3597 20.4117 30.6005 21.3474 30.6021 22.2988V22.6889C30.6037 23.0503 30.4814 23.4012 30.2557 23.6834C30.03 23.9655 29.7144 24.1618 29.3616 24.2395C27.9301 24.5595 26.4666 24.7139 24.9999 24.6997C23.5332 24.7139 22.0697 24.5595 20.6383 24.2395C20.2854 24.1618 19.9698 23.9655 19.7441 23.6834C19.5184 23.4012 19.3962 23.0503 19.3978 22.6889V22.3788C19.3984 21.3969 19.6534 20.4318 20.1381 19.5778C16.3866 20.3481 13.7957 21.9987 13.7957 23.8994C13.7957 26.5504 18.8076 28.7012 24.9999 28.7012C31.1923 28.7012 36.2042 26.5504 36.2042 23.8994C36.2042 21.9987 33.6332 20.3581 29.9018 19.5778Z"
                  fill="#009379"
                />
                <path
                  d="M29.0815 31.5723L29.4717 33.9332"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 31.9025V35.1037"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9185 31.5723L20.5283 33.9332"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.9018 19.5778C33.6332 20.3581 36.2042 21.9987 36.2042 23.8994C36.2042 26.5504 31.1923 28.7012 24.9999 28.7012C18.8076 28.7012 13.7957 26.5504 13.7957 23.8994C13.7957 21.9987 16.3866 20.3481 20.1381 19.5778"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3977 22.6889C19.3961 23.0503 19.5184 23.4012 19.7441 23.6834C19.9698 23.9655 20.2853 24.1618 20.6382 24.2395C22.0697 24.5595 23.5331 24.7139 24.9999 24.6997C26.4666 24.7139 27.9301 24.5595 29.3615 24.2395C29.7144 24.1618 30.0299 23.9655 30.2556 23.6834C30.4814 23.4012 30.6036 23.0503 30.602 22.6889V22.2988C30.602 21.5572 30.4549 20.8229 30.169 20.1387C29.8831 19.4544 29.4641 18.8337 28.9365 18.3125C28.4088 17.7914 27.783 17.3802 27.0952 17.1028C26.4074 16.8255 25.6714 16.6874 24.9298 16.6967C21.8487 16.7367 19.3977 19.3077 19.3977 22.3788V22.6889Z"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Easy to build</p>
            </div>
            <div className="inline-flex items-center px-4 py-3 rounded-2xl gap-3 bg-white shadow-xs border border-gray-200 hover:shadow-md transition-all duration-300 max-w-full">
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24.8902C0 13.3926 0 7.64374 3.57187 4.07187C7.14374 0.5 12.8926 0.5 24.3902 0.5H25.6098C37.1074 0.5 42.8563 0.5 46.4281 4.07187C50 7.64374 50 13.3926 50 24.8902V26.1098C50 37.6074 50 43.3563 46.4281 46.9281C42.8563 50.5 37.1074 50.5 25.6098 50.5H24.3902C12.8926 50.5 7.14374 50.5 3.57187 46.9281C0 43.3563 0 37.6074 0 26.1098V24.8902Z"
                  fill="#E5F4F2"
                />
                <path
                  opacity="0.2"
                  d="M29.9018 19.5778C30.3597 20.4117 30.6005 21.3474 30.6021 22.2988V22.6889C30.6037 23.0503 30.4814 23.4012 30.2557 23.6834C30.03 23.9655 29.7144 24.1618 29.3616 24.2395C27.9301 24.5595 26.4666 24.7139 24.9999 24.6997C23.5332 24.7139 22.0697 24.5595 20.6383 24.2395C20.2854 24.1618 19.9698 23.9655 19.7441 23.6834C19.5184 23.4012 19.3962 23.0503 19.3978 22.6889V22.3788C19.3984 21.3969 19.6534 20.4318 20.1381 19.5778C16.3866 20.3481 13.7957 21.9987 13.7957 23.8994C13.7957 26.5504 18.8076 28.7012 24.9999 28.7012C31.1923 28.7012 36.2042 26.5504 36.2042 23.8994C36.2042 21.9987 33.6332 20.3581 29.9018 19.5778Z"
                  fill="#009379"
                />
                <path
                  d="M29.0815 31.5723L29.4717 33.9332"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 31.9025V35.1037"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9185 31.5723L20.5283 33.9332"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.9018 19.5778C33.6332 20.3581 36.2042 21.9987 36.2042 23.8994C36.2042 26.5504 31.1923 28.7012 24.9999 28.7012C18.8076 28.7012 13.7957 26.5504 13.7957 23.8994C13.7957 21.9987 16.3866 20.3481 20.1381 19.5778"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3977 22.6889C19.3961 23.0503 19.5184 23.4012 19.7441 23.6834C19.9698 23.9655 20.2853 24.1618 20.6382 24.2395C22.0697 24.5595 23.5331 24.7139 24.9999 24.6997C26.4666 24.7139 27.9301 24.5595 29.3615 24.2395C29.7144 24.1618 30.0299 23.9655 30.2556 23.6834C30.4814 23.4012 30.6036 23.0503 30.602 22.6889V22.2988C30.602 21.5572 30.4549 20.8229 30.169 20.1387C29.8831 19.4544 29.4641 18.8337 28.9365 18.3125C28.4088 17.7914 27.783 17.3802 27.0952 17.1028C26.4074 16.8255 25.6714 16.6874 24.9298 16.6967C21.8487 16.7367 19.3977 19.3077 19.3977 22.3788V22.6889Z"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>responsiveness</p>
            </div>
            <div className="inline-flex items-center px-4 py-3 rounded-2xl gap-3 bg-white shadow-xs border border-gray-200 hover:shadow-md transition-all duration-300 max-w-full">
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24.8902C0 13.3926 0 7.64374 3.57187 4.07187C7.14374 0.5 12.8926 0.5 24.3902 0.5H25.6098C37.1074 0.5 42.8563 0.5 46.4281 4.07187C50 7.64374 50 13.3926 50 24.8902V26.1098C50 37.6074 50 43.3563 46.4281 46.9281C42.8563 50.5 37.1074 50.5 25.6098 50.5H24.3902C12.8926 50.5 7.14374 50.5 3.57187 46.9281C0 43.3563 0 37.6074 0 26.1098V24.8902Z"
                  fill="#E5F4F2"
                />
                <path
                  opacity="0.2"
                  d="M29.9018 19.5778C30.3597 20.4117 30.6005 21.3474 30.6021 22.2988V22.6889C30.6037 23.0503 30.4814 23.4012 30.2557 23.6834C30.03 23.9655 29.7144 24.1618 29.3616 24.2395C27.9301 24.5595 26.4666 24.7139 24.9999 24.6997C23.5332 24.7139 22.0697 24.5595 20.6383 24.2395C20.2854 24.1618 19.9698 23.9655 19.7441 23.6834C19.5184 23.4012 19.3962 23.0503 19.3978 22.6889V22.3788C19.3984 21.3969 19.6534 20.4318 20.1381 19.5778C16.3866 20.3481 13.7957 21.9987 13.7957 23.8994C13.7957 26.5504 18.8076 28.7012 24.9999 28.7012C31.1923 28.7012 36.2042 26.5504 36.2042 23.8994C36.2042 21.9987 33.6332 20.3581 29.9018 19.5778Z"
                  fill="#009379"
                />
                <path
                  d="M29.0815 31.5723L29.4717 33.9332"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 31.9025V35.1037"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9185 31.5723L20.5283 33.9332"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.9018 19.5778C33.6332 20.3581 36.2042 21.9987 36.2042 23.8994C36.2042 26.5504 31.1923 28.7012 24.9999 28.7012C18.8076 28.7012 13.7957 26.5504 13.7957 23.8994C13.7957 21.9987 16.3866 20.3481 20.1381 19.5778"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3977 22.6889C19.3961 23.0503 19.5184 23.4012 19.7441 23.6834C19.9698 23.9655 20.2853 24.1618 20.6382 24.2395C22.0697 24.5595 23.5331 24.7139 24.9999 24.6997C26.4666 24.7139 27.9301 24.5595 29.3615 24.2395C29.7144 24.1618 30.0299 23.9655 30.2556 23.6834C30.4814 23.4012 30.6036 23.0503 30.602 22.6889V22.2988C30.602 21.5572 30.4549 20.8229 30.169 20.1387C29.8831 19.4544 29.4641 18.8337 28.9365 18.3125C28.4088 17.7914 27.783 17.3802 27.0952 17.1028C26.4074 16.8255 25.6714 16.6874 24.9298 16.6967C21.8487 16.7367 19.3977 19.3077 19.3977 22.3788V22.6889Z"
                  stroke="#009379"
                  stroke-width="1.44817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>No code needed</p>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center">
          <img
            className="bg-transparent w-[400px]"
            src="data:image/jpeg;base64,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"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
