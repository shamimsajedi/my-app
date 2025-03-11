import api from "@/services/api";
import dayjs from "dayjs";
export default async function Home() {
  const [countChart, sumPps, sumLrl, topFiveLrl,duration] = await Promise.all([
    api.get("/count-chart"),
    api.get("/sum-pps"),
    api.get("/sum-lrl"),
    api.get("/top-five-lrl"),
    api.get("/duration"),
  ]);
 const maxValue = topFiveLrl.data.reduce((max, item) => {
   return item.value > max ? item.value : max;
 }, 0);
 const milliseconds = duration.data.duration;
 const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
 const hours = Math.floor(
   (milliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
 );
 const minutes = Math.floor((milliseconds % (60 * 60 * 1000)) / (60 * 1000));
const now = dayjs();
const formattedDate = now.format("YYYY-MM-DD"); 
const formattedTime = now.format("HH:mm:ss"); 
  return (
    <div className="w-full container mx-auto py-4 ">
      <div className="space-y-4">
        <header className="flex justify-between w-full ">
          <h1 className="font-bold text-xl text-white">TIC DDoS Radar</h1>
          <div className="text-white flex space-x-2">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              {formattedDate}
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              {formattedTime}
            </div>
          </div>
        </header>
        {/* text */}
        <div className="w-3/5 text-xs text-white">
          The Radar report has been extracted from the data of the{" "}
          <span className="text-[10px] underline underline-offset-4 px-2 text-[#78FF97]">
            SIWAN
          </span>{" "}
          DDoS detection and Mitigation system, which has been deployed{" "}
          <br></br>and operated by the TIC company as the countrys defense
          shield, providing effective protection against attacks.
        </div>
        {/* data */}
        <div className="grid grid-cols-10 gap-5">
          <div className="col-span-6  grid grid-cols-10">
            <div className="col-span-4 bg-[#091028] border-y border-l border-y-[#FFFFFF33] border-l-[#FFFFFF33]  flex flex-col justify-center items-center space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-14 text-[#FFFFFF66]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
              <p className="text-[#78FF97] text-4xl font-bold">
                {countChart.data.count}
              </p>
              <p className="text-white text-lg">
                Number Of{" "}
                <span className="text-[#504CA6] underline underline-offset-4">
                  Mitigated
                </span>{" "}
                Attacks
              </p>
            </div>
            <div className="col-span-6 bg-[#091028] border border-[#FFFFFF33]  flex flex-col justify-center items-center space-y-4 px-4 py-6">
              <p className="text-white pb-4 font-bold text-xl">
                Cumulative Sum of Mitigated DDoS Attacks
              </p>
              <div className="grid grid-cols-2  w-full px-4">
                {/* box1 */}
                <div className="border border-[#FFFFFF33] space-y-1 p-4">
                  <p className="text-[#78FF97] text-xs">Billion Packets</p>
                  <p className="text-white text-xm">{sumPps.data.sum}</p>
                  <p className="text-[#FFFFFF66] pt-1">
                    Total Number <br />
                    of{" "}
                    <span className="underline underline-offset-4">
                      Dropped Packets
                    </span>{" "}
                  </p>
                </div>
                {/* box2 */}
                <div className="border-y border-[#FFFFFF33] border-r space-y-1 p-4">
                  <p className="text-[#78FF97] text-xs">Peta Bytes</p>
                  <p className="text-white text-xm">{sumLrl.data.sum}</p>
                  <p className="text-[#FFFFFF66] pt-1">
                    Total Number <br />
                    of{" "}
                    <span className="underline underline-offset-4">
                      Dropped Bytes
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3  border border-[#FFFFFF33]  bg-[#091028] px-4 py-6 space-y-5">
            <div className="flex space-x-3">
              <div className="bg-[#142833] h-10 w-10 rounded-full flex justify-center items-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-[#78FF97]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-bold text-xl">Maximum Attack Volumes</p>
                <p className="text-xs">BITS</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[#78FF97] text-3xl font-bold">
                {maxValue / 1e9}
                <span className="text-xs text-[#FFFFFF33] font-normal px-2">
                  Gbps
                </span>
              </p>
              <p className="text-xl text-white">
                Maximum Volume <br />
                Of The{" "}
                <span className="text-[#504CA6] underline underline-offset-4">
                  Mitigated
                </span>{" "}
                Attacks
              </p>
              <div className="grid grid-cols-3 gap-1 text-white">
                {topFiveLrl.data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" border border-[#FFFFFF33] text-xs  text-center rounded-sm "
                    >
                      {item.value / 1e9} Gbps
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Duration */}
        <div className="grid grid-cols-10 gap-5 h-[108px] ">
          <div className="col-span-6 bg-[#58CE7A1A] relative overflow-hidden flex space-x-20">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-50 text-white/20 absolute top-[-40px]
                "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="w-[100px]"></div>
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="flex flex-col justify-center items-center space-y-1 ">
                <p className="font-bold bg-white/20 flex items-center justify-center w-10 h-10 text-xl rounded-sm">
                  {days}
                </p>
                <p className="text-[8px]">DAYS</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-1 ">
                <p className="font-bold bg-white/20 flex items-center justify-center w-10 h-10 text-xl rounded-sm">
                  {hours}
                </p>
                <p className="text-[8px]">HOURS</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-1 ">
                <p className="font-bold bg-white/20 flex items-center justify-center w-10 h-10 text-xl rounded-sm">
                  {minutes}
                </p>
                <p className="text-[8px]">MINUTES</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center ">
              <p className="text-[#78FF97]">Maximum</p>
              <p className="text-white">Attack Duration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
