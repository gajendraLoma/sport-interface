"use client";

function Highlights() {
  return (
    <>
      <section className="w-full flex flex-col items-center overflow-hidden">
        <div className="w-full  flex flex-col gap-y-[40px] items-center pt-[50px] pb-[60px] px-container">
          <div className="w-full flex flex-col items-center text-center gap-y-[16px]">
            <h2 className="font-[700] text-[32px] leading-[37px]">
              Start your crypto trading with confidence
            </h2>
            <h3 className="text-[22px] leading-[34px] text-[#8796B3]">
              Secure and reliable platform for all your crypto needs. Buy, sell,
              swap, and earn with peace of mind.
            </h3>
          </div>
          <ul className="w-full flex flex-wrap justify-center grid-cols-4 gap-[20px]">
            <li className="w-[541px] h-[300px] flex flex-col gap-y-[15px] rounded-[16px] border  px-[39px] pt-[30px] pb-[15px]">
              <span
                className="iconify i-home:buy-sell text-[60px]"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 61" width="60" height="61"><defs><linearGradient id="paint0_linear_43_3310" x1="30" y1="0.600586" x2="30" y2="60.6006" gradientUnits="userSpaceOnUse"> <stop stop-color="#3E2CDD"/> <stop offset="1" stop-color="#6A61FE"/> </linearGradient></defs><g fill="none"><rect y="0.600586" width="60" height="60" rx="16" fill="url(#paint0_linear_43_3310)"/> <path d="M11.3208 41.6643L20.0841 30.2198C20.6266 29.5176 21.4182 29.0413 22.3018 28.8858C23.1766 28.7221 24.0823 28.885 24.8412 29.3421L33.3899 34.6432C34.1785 35.1273 35.1276 35.291 36.037 35.0995C36.9559 34.9169 37.7653 34.3873 38.2902 33.625L47.0895 20.6006" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M36.5377 22.5314L47.0894 20.6006L49.0566 30.9569" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
              </span>
              <div className="w-full flex flex-col gap-y-[10px]">
                <h3 className="font-[500] text-[24px] leading-[28px]">
                  Buy or Sell
                </h3>
                <p className="text-[18px] leading-[34px] text-[#8796B3]">
                  Easily exchange cryptocurrencies for other digital assets or
                  Purchase a coin to Simply make the crypto trading buy or sell,
                </p>
              </div>
            </li>
            <li className="w-[541px] h-[300px] flex flex-col gap-y-[15px] rounded-[16px] border  px-[39px] pt-[30px] pb-[15px]">
              <span
                className="iconify i-home:market-trends text-[60px]"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 61" width="60" height="61"><defs><linearGradient id="paint0_linear_43_3319" x1="30" y1="0.600586" x2="30" y2="60.6006" gradientUnits="userSpaceOnUse"> <stop stop-color="#3E2CDD"/> <stop offset="1" stop-color="#6A61FE"/> </linearGradient></defs><g fill="none"><rect y="0.600586" width="60" height="60" rx="16" fill="url(#paint0_linear_43_3319)"/> <path d="M45.6877 16.0761L40.185 29.3987C39.8428 30.2174 39.2015 30.8824 38.3882 31.2613C37.5855 31.6459 36.6686 31.7229 35.8173 31.4778L26.1878 28.5699C25.3007 28.3065 24.3417 28.394 23.5128 28.8143C22.6725 29.2285 22.0277 29.9496 21.718 30.8217L16.5895 45.6797" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M26.282 41.0837L16.5896 45.6797L12.009 36.1854" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
              </span>
              <div className="w-full flex flex-col gap-y-[10px]">
                <h3 className="font-[500] text-[24px] leading-[28px]">
                  Market Trends
                </h3>
                <p className="text-[18px] leading-[34px] text-[#8796B3]">
                  Traders analyze price patterns, volume, and technical
                  indicators to identify trends and make informed decisions.
                </p>
              </div>
            </li>
            <li className="w-[541px] h-[300px] flex flex-col gap-y-[15px]  rounded-[16px] border  px-[39px] pt-[30px] pb-[15px]">
              <span
                className="iconify i-home:secure-wallet text-[60px]"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 61" width="60" height="61"><defs><linearGradient id="paint0_linear_43_3328" x1="30" y1="0.600586" x2="30" y2="60.6006" gradientUnits="userSpaceOnUse"> <stop stop-color="#3E2CDD"/> <stop offset="1" stop-color="#6A61FE"/> </linearGradient></defs><g fill="none"><rect y="0.600586" width="60" height="60" rx="16" fill="url(#paint0_linear_43_3328)"/> <path d="M21.8699 14.6006C19.1961 14.6006 17 16.7779 17 19.4099V45.0033C17.0027 45.8871 17.7326 46.6013 18.6304 46.5987C18.8798 46.598 19.1258 46.5407 19.3491 46.4314L22.6253 44.8251C24.1007 44.099 25.8497 44.2087 27.2222 45.1095C28.9 46.2106 31.0999 46.2106 32.7778 45.1095C34.1595 44.2071 35.9153 44.1043 37.3968 44.8376L40.6476 46.4314C41.4507 46.8265 42.427 46.5061 42.8284 45.7156C42.9408 45.4944 42.9995 45.2506 43 45.0033V19.4099C43 16.7779 40.8008 14.6006 38.127 14.6006H21.8699ZM25.1207 21.0036H34.8762C35.7738 21.0071 36.4987 21.7262 36.4952 22.6099C36.4917 23.4887 35.7689 24.2002 34.8762 24.2036H25.1207C24.228 24.2002 23.5051 23.4887 23.5016 22.6099C23.4981 21.7262 24.2229 21.0071 25.1207 21.0036ZM25.1207 27.4035H30.0064C30.904 27.407 31.6289 28.1261 31.6254 29.0097C31.6237 29.8897 30.9004 30.6032 30.0064 30.6066H25.1207C24.2267 30.6032 23.5033 29.8897 23.5016 29.0097C23.4981 28.1261 24.2229 27.407 25.1207 27.4035Z" fill="white"/></g></svg>
              </span>
              <div className="w-full flex flex-col gap-y-[10px]">
                <h3 className="font-[500] text-[24px] leading-[28px]">
                  Secure Wallet
                </h3>
                <p className="text-[18px] leading-[34px] text-[#8796B3]">
                  Securely store multiple cryptocurrencies in one place. With
                  robust security features and support for various digital
                  assets.
                </p>
              </div>
            </li>
            <li className="w-[541px] h-[300px] flex flex-col gap-y-[15px]  rounded-[16px] border  px-[39px] pt-[30px] pb-[15px]">
              <span
                className="iconify i-home:low-fees text-[60px]"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 61" width="60" height="61"><defs><linearGradient id="paint0_linear_43_3333" x1="30" y1="0.600586" x2="30" y2="60.6006" gradientUnits="userSpaceOnUse"> <stop stop-color="#3E2CDD"/> <stop offset="1" stop-color="#6A61FE"/> </linearGradient></defs><g fill="none"><rect y="0.600586" width="60" height="60" rx="12" fill="url(#paint0_linear_43_3333)"/> <path d="M30.5 36.8048V36.9743C30.5 37.406 30.1609 37.7452 29.7292 37.7452H15.8542C15.4225 37.7452 15.0834 37.406 15.0834 36.9743V36.8048C15.0834 34.0914 15.7617 33.4131 18.5059 33.4131H27.0775C29.8217 33.4131 30.5 34.0914 30.5 36.8048Z" fill="white"/> <path d="M15.8542 39.2869C15.4225 39.2869 15.0834 39.626 15.0834 40.0577V41.5994V43.1256C15.0834 45.8389 15.7617 46.5173 18.5059 46.5173H27.0775C29.8217 46.5173 30.5 45.8389 30.5 43.1256V41.5994V40.0577C30.5 39.626 30.1609 39.2869 29.7292 39.2869H15.8542Z" fill="white"/> <path d="M45.9167 35.7256C45.9167 41.6918 41.0913 46.5173 35.125 46.5173L36.7437 43.8193" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15.0834 26.4756C15.0834 20.5094 19.9088 15.684 25.875 15.684L24.2563 18.3819" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M40.5209 29.559C44.3523 29.559 47.4584 26.4529 47.4584 22.6215C47.4584 18.79 44.3523 15.684 40.5209 15.684C36.6894 15.684 33.5834 18.79 33.5834 22.6215C33.5834 26.4529 36.6894 29.559 40.5209 29.559Z" fill="white"/></g></svg>
              </span>
              <div className="w-full flex flex-col gap-y-[10px]">
                <h3 className="font-[500] text-[24px] leading-[28px]">
                  Low Fees &amp; Transparent
                </h3>
                <p className="text-[18px] leading-[34px] text-[#8796B3]">
                  Traders to execute trades without significant costs eating
                  into profits. making trading more efficient and cost-effective
                  for participants.
                </p>
              </div>
            </li>
            <li className="w-[541px] h-[300px] flex flex-col gap-y-[15px]  rounded-[16px] border  px-[39px] pt-[30px] pb-[15px]">
              <span
                className="iconify i-home:leverage text-[60px]"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 61" width="60" height="61"><defs><linearGradient id="paint0_linear_43_3340" x1="30" y1="0.600586" x2="30" y2="60.6006" gradientUnits="userSpaceOnUse"> <stop stop-color="#3E2CDD"/> <stop offset="1" stop-color="#6A61FE"/> </linearGradient></defs><g fill="none"><rect y="0.600586" width="60" height="60" rx="12" fill="url(#paint0_linear_43_3340)"/> <path d="M47.4165 35.699C46.7674 35.699 46.229 36.2373 46.229 36.8865C46.229 41.5731 42.9674 45.4998 38.5815 46.529L39.009 45.8165C39.3415 45.2465 39.1674 44.5181 38.5974 44.1856C38.0432 43.8531 37.299 44.0273 36.9665 44.5973L35.304 47.3681C35.0824 47.7323 35.0824 48.1915 35.2882 48.5556C35.494 48.9356 35.8899 49.1573 36.3174 49.1573C43.0782 49.1573 48.5882 43.6473 48.5882 36.8865C48.604 36.2373 48.0657 35.699 47.4165 35.699Z" fill="white"/> <path d="M23.6666 11.949C16.9058 11.949 11.3958 17.459 11.3958 24.2198C11.3958 24.869 11.9341 25.4073 12.5833 25.4073C13.2324 25.4073 13.7708 24.869 13.7708 24.2198C13.7708 19.5331 17.0324 15.6065 21.4183 14.5773L20.9908 15.2898C20.6583 15.8598 20.8324 16.5881 21.4024 16.9206C21.9566 17.2531 22.7008 17.079 23.0333 16.509L24.6958 13.7381C24.9016 13.374 24.9174 12.9306 24.6958 12.5506C24.4899 12.1865 24.0941 11.949 23.6666 11.949Z" fill="white"/> <path d="M45.0416 25.3281C45.0416 30.2048 41.4949 34.2265 36.8557 34.9706C36.8557 34.9548 36.8557 34.9548 36.8557 34.939C36.3966 29.0331 31.6149 24.2198 25.6299 23.7448C26.374 19.1056 30.3957 15.559 35.2724 15.559C40.6716 15.559 45.0416 19.929 45.0416 25.3281Z" fill="white"/> <path d="M26.5325 34.084C26.5325 33.8465 26.2634 33.4823 25.9309 33.4823H22.6692V34.6698H25.9309C26.2634 34.6856 26.5325 34.4165 26.5325 34.084Z" fill="white"/> <path d="M26.5642 37.0605H25.9309H22.6692V38.248H26.58C27.0867 38.248 27.435 37.9314 27.435 37.6464C27.435 37.3614 27.0709 37.0605 26.5642 37.0605Z" fill="white"/> <path d="M34.4808 35.1131C34.1166 30.3156 30.2849 26.484 25.4874 26.1198C25.2341 26.104 24.9966 26.0881 24.7274 26.0881C19.3283 26.0881 14.9583 30.4581 14.9583 35.8731C14.9583 41.2723 19.3283 45.6423 24.7274 45.6423C30.1266 45.6423 34.5124 41.2723 34.5124 35.8731C34.5124 35.604 34.4966 35.3665 34.4808 35.1131ZM26.5641 40.6231H25.5191V41.2248C25.5191 41.874 24.9808 42.4123 24.3316 42.4123C23.6824 42.4123 23.1441 41.874 23.1441 41.2248V40.6231H21.4816C20.8324 40.6231 20.2941 40.0848 20.2941 39.4356V35.8731V32.3106C20.2941 31.6615 20.8324 31.1231 21.4816 31.1231H23.1441V30.5215C23.1441 29.8723 23.6824 29.334 24.3316 29.334C24.9808 29.334 25.5191 29.8723 25.5191 30.5215V31.1231H25.9308C27.5141 31.1231 28.9074 32.5165 28.9074 34.0998C28.9074 34.559 28.7966 34.9865 28.6066 35.3823C29.3349 35.9206 29.7941 36.744 29.7941 37.6623C29.7941 39.2931 28.3533 40.6231 26.5641 40.6231Z" fill="white"/></g></svg>
              </span>
              <div className="w-full flex flex-col gap-y-[10px]">
                <h3 className="font-[500] text-[24px] leading-[28px]">
                  Use of Leverage
                </h3>
                <p className="text-[18px] leading-[34px] text-[#8796B3]">
                  Control larger positions than their available capital by
                  borrowing funds from an exchange and capitalize on smaller
                  market movements
                </p>
              </div>
            </li>
            <li className="w-[541px] h-[300px] flex flex-col gap-y-[15px]  rounded-[16px] border  px-[39px] pt-[30px] pb-[15px]">
              <span
                className="iconify i-home:offering text-[60px]"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 61" width="60" height="61"><defs><linearGradient id="paint0_linear_43_3347" x1="30" y1="0.600586" x2="30" y2="60.6006" gradientUnits="userSpaceOnUse"> <stop stop-color="#3E2CDD"/> <stop offset="1" stop-color="#6A61FE"/> </linearGradient></defs><g fill="none"><rect y="0.600586" width="60" height="60" rx="12" fill="url(#paint0_linear_43_3347)"/> <path d="M45.8334 25.0589C45.8334 30.2205 42.0334 34.4797 37.0934 35.2239V35.1289C36.6025 28.9855 31.615 23.998 25.4242 23.5072H25.3767C26.1209 18.5672 30.38 14.7672 35.5417 14.7672C41.2259 14.7672 45.8334 19.3747 45.8334 25.0589Z" fill="white"/> <path d="M34.7184 35.3189C34.3226 30.2998 30.3009 26.2781 25.2817 25.8823C25.0126 25.8664 24.7276 25.8506 24.4584 25.8506C18.7742 25.8506 14.1667 30.4581 14.1667 36.1423C14.1667 41.8264 18.7742 46.4339 24.4584 46.4339C30.1426 46.4339 34.7501 41.8264 34.7501 36.1423C34.7501 35.8731 34.7342 35.5881 34.7184 35.3189ZM25.8517 37.5356L24.4584 40.1006L23.0651 37.5356L20.5001 36.1423L23.0651 34.7489L24.4584 32.1839L25.8517 34.7489L28.4167 36.1423L25.8517 37.5356Z" fill="white"/></g></svg>
              </span>
              <div className="w-full flex flex-col gap-y-[10px]">
                <h3 className="font-[500] text-[24px] leading-[28px]">
                  Diverse Asset Offering
                </h3>
                <p className="text-[18px] leading-[34px] text-[#8796B3]">
                  Traders can diversify their portfolios, explore different
                  investment opportunities and capitalize on emerging projects
                  in the ever-evolving crypto market.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Highlights;
