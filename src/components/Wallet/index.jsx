import { Button } from "@mui/material";
import { DownArrow, RecevIcon, SendIcon, UpArrow } from "../../assets/icons";
import Avatar from '@mui/material/Avatar';
import { avatOne, avatTwo, avatThree, avatFour } from "../../assets";
import { FaPlus } from "react-icons/fa6";
import LinePath from "./LinePath";

const Wallet = () => {
  return (
    <div className="flex flex-row gap-x-6 w-full md:flex-col md:gap-y-6">
        <div className="w-2/4 md:w-full">
        
        <div className="flex flex-col gap-y-9 w-full">
            <div>
            <div className="flex flex-row gap-x-6 w-full">

            <div className="flex bg-dashbg rounded-xl relative w-full">
                <div className="bg-borderC w-2 h-14 left-0 absolute top-5 rounded-rd"></div>
                <div className="flex flex-col gap-y-4 px-6 py-6">
                    <div className="text-sm font-poppins font-semibold text-walletHeadC tracking-wide">
                        VHA Token Balance
                    </div>
                    <div className="text-xl font-poppins font-semibold text-primaryC tracking-wide">
                        $21.,500.00
                    </div>
                    <div className="flex flex-row gap-x-3">
                        <div>
                            <UpArrow />
                        </div>
                        <div className="text-base text-primaryC font-poppins">
                            12%
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex bg-dashbg rounded-xl relative w-full">
            <div className="bg-borderCG w-2 h-14 left-0 absolute top-5 rounded-rd"></div>
                <div className="flex flex-col gap-y-4 px-6 py-6">
                    <div className="text-sm font-poppins font-semibold text-walletHeadC tracking-wide">
                        Spending on VHA
                    </div>
                    <div className="text-xl font-poppins font-semibold text-primaryC tracking-wide">
                        $5,392.00
                    </div>
                    <div className="flex flex-row gap-x-3">
                        <div>
                            <DownArrow />
                        </div>
                        <div className="text-base text-primaryC font-poppins">
                            8%
                        </div>
                    </div>
                </div>
            </div>

            </div>
            </div>
            {/* Chart */}
            <div className="flex flex-col gap-y-3 w-full">
                {/* Chart_Header */}
                <div className="text-white text-2xl capitalize tracking-wide font-poppins font-semibold w-full">
                    wallet report
                </div>
                {/* Chart_Body */}
                <div>
                    {/* recordChart */}
                    <LinePath />
                </div>
            </div>
        </div>
        
        </div>
        {/* Total Balance */}
        <div className="bg-dashbg rounded-xl px-5 py-6 w-2/4 md:w-full">
        <div className="text-base font-poppins font-semibold tracking-wider text-walletHeadC text-center w-full">
                Total balance
            </div>
            <div className="text-2xl font-poppins font-semibold text-primaryC text-center tracking-wide py-4 w-full">
                $81,910.00
            </div>
            <div className="flex flex-row justify-center gap-x-3">
                        <div>
                            <UpArrow />
                        </div>
                        <div className="text-base text-primaryC font-poppins">
                        12.81%
                        </div>
                </div>
                <div className="flex flex-row justify-between gap-x-6 py-8 w-full">
                    <div className="w-full">
                        <Button
                        sx={{
                            background:"linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)",
                            borderRadius:"8px",
                            padding: "12px 32px",
                            fontSize:"18px",
                            color:"#fff",
                            textTransform:"capitalize",
                            width:"100%",
                            ':hover':{
                                background: "linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)"
                            }
                        }}>
                            send <SendIcon />
                        </Button>
                    </div>
                    <div className="w-full">
                        <Button
                        sx={{
                            background:"linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)",
                            borderRadius:"8px",
                            padding: "12px 32px",
                            fontSize:"18px",
                            color:"#fff",
                            textTransform:"capitalize",
                            width:"100%",
                            ':hover':{
                                background: "linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)"
                            }
                        }}>
                            receive <RecevIcon />
                        </Button>
                    </div>
                </div>
                {/* Quick transfers */}
                <div className="flex flex-col gap-y-6 w-full">
                <div className="text-base font-poppins font-semibold tracking-wider text-walletHeadC text-left w-full">
                    Quick transfer
                </div>
                <div className="flex flex-row justify-between w-full">
                    <div>
                    <Avatar alt="Remy Sharp" sx={{width:"52px", height:"52px"}} src={avatOne} />
                    </div>
                    <div>
                    <Avatar alt="Remy Sharp" sx={{width:"52px", height:"52px"}} src={avatTwo} />
                    </div>
                    <div>
                    <Avatar alt="Remy Sharp" sx={{width:"52px", height:"52px"}} src={avatThree} />
                    </div>
                    <div>
                    <Avatar alt="Remy Sharp" sx={{width:"52px", height:"52px"}} src={avatFour} />
                    </div>
                    <div>
                        <Button 
                        sx={{
                            background:"transparent",
                            border:"2px dashed #D9D9D9",
                            borderRadius:"100%",
                            height:"50px",
                            width:"50px",
                            color:"#fff",
                            ":hover":{
                                background:"transparent",
                            }
                        }}>
                            <FaPlus className="text-primaryC font-poppins font-bold text-2xl"/>
                        </Button>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Wallet;