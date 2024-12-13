import {
  companyListImgUrl,
  decoratorOne as decorator,
  underlineImgUrl,
} from "../../../utils/imageUrls";

function HomeProductUsedBySection() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="container space-y-8">
        <img src={decorator} className="w-4 mx-auto" />

        <div className="flex items-center justify-center gap-8">
          <LeftLeafSvg />

          <p className="leading-[2rem] text-zinc-400">
            <span className="uppercase tracking-[0.5rem] block text-black">
              Trusted and loved by
            </span>{" "}
            over lots of people in 50+ countries
          </p>

          <RightLeafSvg />
        </div>

        <div className="max-w-4xl mx-auto">
          <img
            src={companyListImgUrl}
            alt="companies that are using our product"
          />
          <img
            src={underlineImgUrl}
            alt="underline"
            className="mx-auto h-[100px]"
          />
        </div>
      </div>
    </section>
  );
}

const LeftLeafSvg = () => {
  return (
    <svg
      width="30"
      height="60"
      viewBox="0 0 30 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[40px] w-[40px] shrink-0"
    >
      <path
        d="M14.0947 9.35871C16.8587 9.08173 19.5519 5.86753 19.2482 1.59668C15.2005 2.17114 12.7117 6.59369 14.0947 9.35871Z"
        fill="#404147"
      ></path>
      <path
        d="M14.0947 9.35871C16.8587 9.08173 19.5519 5.86753 19.2482 1.59668C15.2005 2.17114 12.7117 6.59369 14.0947 9.35871Z"
        fill="#404147"
      ></path>
      <path
        d="M9.84495 15.0454C11.3313 13.8755 12.8841 8.96429 9.62272 5.5204C5.42024 8.68822 8.16782 14.1711 9.84495 15.0454Z"
        fill="#404147"
      ></path>
      <path
        d="M8.46051 23.3394C9.32182 21.6553 9.0378 16.0771 4.0246 15.0236C1.87123 19.234 6.57147 23.2461 8.46051 23.3394Z"
        fill="#404147"
      ></path>
      <path
        d="M8.77875 32.5161C9.07611 30.648 6.91525 24.8271 1.82228 25.3781C1.0788 30.0483 6.2582 32.8936 8.77875 32.5161Z"
        fill="#404147"
      ></path>
      <path
        d="M11.9011 41.4024C11.7067 39.4928 7.80018 34.1114 2.48796 34.954C3.04076 41.4024 10.0796 42.0072 11.9011 41.4024Z"
        fill="#404147"
      ></path>
      <path
        d="M17.5849 49.6023C16.9542 47.5302 10.9975 42.1893 5.07298 43.8383C7.33357 50.3866 15.6209 50.5148 17.5849 49.6023Z"
        fill="#404147"
      ></path>
      <path
        d="M24.8713 56.5979C23.8075 54.7112 17.1405 50.6749 11.7124 53.5655C14.3717 58.2824 21.3974 58.8228 24.8713 56.5979Z"
        fill="#404147"
      ></path>
      <path
        d="M26.5857 55.0667C28.347 54.4303 30.5452 48.9804 25.9242 46.1679C21.7057 49.784 24.2179 53.7486 26.5857 55.0667Z"
        fill="#404147"
      ></path>
      <path
        d="M19.5207 48.7717C21.3778 48.5311 24.5242 43.6143 20.6204 39.8695C15.7201 42.4882 18.3433 47.3157 19.5207 48.7717Z"
        fill="#404147"
      ></path>
      <path
        d="M13.8978 40.9918C15.6131 41.0353 18.6613 37.4608 16.1737 33.5105C12.0313 36.0546 13.0368 39.508 13.8978 40.9918Z"
        fill="#404147"
      ></path>
      <path
        d="M10.1811 32.3355C11.8166 32.7276 15.575 30.4957 14.2307 25.9681C9.53946 26.0767 9.8478 30.7897 10.1811 32.3355Z"
        fill="#404147"
      ></path>
      <path
        d="M10.12 23.6177C11.3059 24.3893 16.173 23.0644 16.1718 18.8474C12.0709 17.9523 10.1563 22.2037 10.12 23.6177Z"
        fill="#404147"
      ></path>
      <path
        d="M11.775 15.8755C12.9608 16.6471 18.1349 16.152 17.8265 11.7638C14.5411 11.176 11.8113 14.4615 11.775 15.8755Z"
        fill="#404147"
      ></path>
    </svg>
  );
};

const RightLeafSvg = () => {
  return (
    <svg
      width="30"
      height="60"
      viewBox="0 0 30 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[40px] w-[40px] shrink-0 -scale-x-100"
    >
      <path
        d="M14.0947 9.35871C16.8587 9.08173 19.5519 5.86753 19.2482 1.59668C15.2005 2.17114 12.7117 6.59369 14.0947 9.35871Z"
        fill="#404147"
      ></path>
      <path
        d="M9.84495 15.0454C11.3313 13.8755 12.8841 8.96429 9.62272 5.5204C5.42024 8.68822 8.16782 14.1711 9.84495 15.0454Z"
        fill="#404147"
      ></path>
      <path
        d="M8.46051 23.3394C9.32182 21.6553 9.0378 16.0771 4.0246 15.0236C1.87123 19.234 6.57147 23.2461 8.46051 23.3394Z"
        fill="#404147"
      ></path>
      <path
        d="M8.77875 32.5161C9.07611 30.648 6.91525 24.8271 1.82228 25.3781C1.0788 30.0483 6.2582 32.8936 8.77875 32.5161Z"
        fill="#404147"
      ></path>
      <path
        d="M11.9011 41.4024C11.7067 39.4928 7.80018 34.1114 2.48796 34.954C3.04076 41.4024 10.0796 42.0072 11.9011 41.4024Z"
        fill="#404147"
      ></path>
      <path
        d="M17.5849 49.6023C16.9542 47.5302 10.9975 42.1893 5.07298 43.8383C7.33357 50.3866 15.6209 50.5148 17.5849 49.6023Z"
        fill="#404147"
      ></path>
      <path
        d="M24.8713 56.5979C23.8075 54.7112 17.1405 50.6749 11.7124 53.5655C14.3717 58.2824 21.3974 58.8228 24.8713 56.5979Z"
        fill="#404147"
      ></path>
      <path
        d="M26.5857 55.0667C28.347 54.4303 30.5452 48.9804 25.9242 46.1679C21.7057 49.784 24.2179 53.7486 26.5857 55.0667Z"
        fill="#404147"
      ></path>
      <path
        d="M19.5207 48.7717C21.3778 48.5311 24.5242 43.6143 20.6204 39.8695C15.7201 42.4882 18.3433 47.3157 19.5207 48.7717Z"
        fill="#404147"
      ></path>
      <path
        d="M13.8978 40.9918C15.6131 41.0353 18.6613 37.4608 16.1737 33.5105C12.0313 36.0546 13.0368 39.508 13.8978 40.9918Z"
        fill="#404147"
      ></path>
      <path
        d="M10.1811 32.3355C11.8166 32.7276 15.575 30.4957 14.2307 25.9681C9.53946 26.0767 9.8478 30.7897 10.1811 32.3355Z"
        fill="#404147"
      ></path>
      <path
        d="M10.12 23.6177C11.3059 24.3893 16.173 23.0644 16.1718 18.8474C12.0709 17.9523 10.1563 22.2037 10.12 23.6177Z"
        fill="#404147"
      ></path>
      <path
        d="M11.775 15.8755C12.9608 16.6471 18.1349 16.152 17.8265 11.7638C14.5411 11.176 11.8113 14.4615 11.775 15.8755Z"
        fill="#404147"
      ></path>
    </svg>
  );
};

export default HomeProductUsedBySection;