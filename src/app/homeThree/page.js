import Link from "next/link";
import { getCurrentDate } from "../../../utilis/getCurrentDate";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const HomePageThree = () => {
  return (
    <div>
      <div className="lg:mx-40 max-sm:mx-4">
        <div className="flex justify-center lg:mt-20 max-sm:mt-4">
          <Image
            src="https://i.ibb.co/JRwfn1X/homeimg-1.jpg"
            width={1000}
            height={300}
            alt="homeImage"
            className="rounded-2xl"
          />
        </div>
        <div className="flex justify-start gap-5 my-5">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <Image
                  src="https://i.ibb.co/xLmQQ7v/author2.jpg"
                  width={100}
                  height={100}
                  alt="author1"
                />
                {/* <img src="https://i.ibb.co/xLmQQ7v/author2.jpg" /> */}
              </div>
            </div>
          </div>
          <div>
            <div className="cursor-pointer text-lg font-bold hover:text-red-700">
              <Link href="/author">Dev</Link>
            </div>
            <div>{getCurrentDate()}</div>
          </div>
        </div>

        <h1 className="text-3xl font-semibold my-4">
          Banana is the best meal packages in the UK spark outrage online
        </h1>
        <p className="text-gray-500 mb-20">
          A banana is an elongated, edible fruit – botanically a berry –
          produced by several kinds of large herbaceous flowering plants in the
          genus Musa. In some countries, bananas used for cooking may be cal...
        </p>
        <div className="flex justify-end gap-5 text-slate-400 my-10">
          <FaFacebookF size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
          <FaYoutube size={20} />
          <FaLinkedin size={20} />
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="join gap-10 ">
          <Link href={`/home/`}>
            <button className="join-item btn btn-outline">1</button>
          </Link>
          <Link href="/homeTwo">
            <button className="join-item btn btn-outline">2</button>
          </Link>
          <Link href="/homeThree">
            <button className="join-item btn btn-outline">3</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageThree;
