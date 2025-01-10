"use client";

function shop() {
  return (
    <>
      <section className="w-full flex flex-col items-center overflow-hidden ">
        <div className="w-full flex flex-col gap-y-[35px] items-center pt-[70px] pb-[80px] px-container">
          <div className="w-full flex flex-col items-center text-center gap-y-[16px]">
            <h2 className="font-[700] text-[42px] leading-[49px] ">
              Experience Effortless Crypto Trading
            </h2>
            <h3 className="w-fit text-[24px] leading-[28px] text-[#8796B3]">
              Our platform makes trading crypto intuitive and enjoyable with
              ease and simplicity
            </h3>
          </div>
          <ul className="flex flex-wrap justify-center grid-cols-4 gap-[20px] ">
            <li className="w-[385px] h-[323] flex flex-col items-center gap-y-[20px] bg-[#F1F4FF] rounded-[16px] border border-[#EAEAEA] px-[39px] pb-[24px] pt-[24px]">
              <img
                alt="icon"
                className="w-[95px] aspect-square"
                src="/images/realtime.webp"
              />
              <div className="w-full flex flex-col items-center gap-y-[20px] text-center">
                <h3 className="font-[700] text-[23px] leading-[28px] text-[#14193E]">
                  Real-Time Market Insights
                </h3>
                <p className="text-[14px] leading-[24px] text-[#8796B3]">
                  Stay ahead of the game with live price updates, market trends,
                  and in-depth analytics.
                </p>
              </div>
            </li>
            <li className="w-[385px] h-[323] flex flex-col items-center gap-y-[20px] bg-[#F1F4FF] rounded-[16px] border border-[#EAEAEA] px-[39px] pb-[24px] pt-[24px]">
              <img
                alt="icon"
                className="w-[95px] aspect-square"
                src="/images/precision.webp"
              />
              <div className="w-full flex flex-col items-center gap-y-[20px] text-center">
                <h3 className="font-[700] text-[23px] leading-[28px] text-[#14193E]">
                  Precision Trading
                </h3>
                <p className="text-[14px] leading-[24px] text-[#8796B3]">
                  Leverage customizable charts, List of trading options to
                  execute your strategies with precision and efficiency.
                </p>
              </div>
            </li>
            <li className="w-[385px] h-[323] flex flex-col items-center gap-y-[20px] bg-[#F1F4FF] rounded-[16px] border border-[#EAEAEA] px-[39px] pb-[24px] pt-[24px]">
              <img
                alt="icon"
                className="w-[95px] aspect-square"
                src="/images/secure.webp"
              />
              <div className="w-full flex flex-col items-center gap-y-[20px] text-center">
                <h3 className="font-[700] text-[23px] leading-[28px] text-[#14193E]">
                  Secure and Reliable Platform
                </h3>
                <p className="text-[14px] leading-[24px] text-[#8796B3]">
                  Trade with peace of mind knowing your funds and data are
                  protected by cutting-edge security measures.
                </p>
              </div>
            </li>
            <li className="w-[385px] h-[323] flex flex-col items-center gap-y-[20px] bg-[#F1F4FF] rounded-[16px] border border-[#EAEAEA] px-[39px] pb-[24px] pt-[24px]">
              <img
                alt="icon"
                className="w-[95px] aspect-square"
                src="/images/margin.webp"
              />
              <div className="w-full flex flex-col items-center gap-y-[20px] text-center">
                <h3 className="font-[700] text-[23px] leading-[28px] text-[#14193E]">
                  Margin and Leverage Trading
                </h3>
                <p className="text-[14px] leading-[24px] text-[#8796B3]">
                  Where traders can borrow funds to increase their position
                  size. This offers the potential for higher profits.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default shop;
