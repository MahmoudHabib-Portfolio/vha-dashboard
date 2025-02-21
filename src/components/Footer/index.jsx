import Marquee from "react-fast-marquee";
import { Heading, PartnerFive, PartnerFour, PartnerOne, PartnerSix, PartnerThree, PartnerTwo } from "../../assets";


const Footer = () => {

  const parteners = [
    {id: 0, img: PartnerOne, imgAlt: "PartenerOne"},
    {id: 1, img: PartnerTwo, imgAlt: "PartenerTwo"},
    {id: 2, img: PartnerThree, imgAlt: "PartenerThree"},
    {id: 3, img: PartnerFour, imgAlt: "PartenerFour"},
    {id: 4, img: PartnerFive, imgAlt: "PartenerFive"},
    {id: 5, img: PartnerSix, imgAlt: "PartenerSix"}
  ];

  return (
    <footer className="py-4 block sticky top-0 bg-mainbg w-full">
      <div className="flex flex-col gap-y-6 w-full">
          <div className="flex flex-row justify-center w-full">
            <div>
              <img src={Heading} width={180} height={19} alt="VHA Partener" />
            </div>
          </div>
          <div className="px-6 py-3 block text-center w-full">
            <Marquee autoFill={true}>
                <div className="flex flex-row overflow-hidden py-3 w-full">
                    {parteners?.map((x) => (
                      <div key={x.id} className="px-2">
                        <img src={x.img} width={"120"} height={"100%"} alt={x.imgAlt} />
                      </div>
                    ))}
                </div>
            </Marquee>
          </div>
      </div>
    </footer>
  )
}

export default Footer;