import Image from "next/image";
import Link from "next/link";
import { getCurrentDate } from "../../../../utilis/getCurrentDate";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const homeOne = [
  {
    id: 1,
    img: "https://i.ibb.co/JRwfn1X/homeimg-1.jpg",
    name: "DIY Paper Diamond Tutorial with HUNGRY HEART",
    detail:
      "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan...",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DDRtXcL/homeimg-2.jpg",
    name: "What you need to know about Photography",
    detail:
      "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan...",
  },
];

const HomePageOne = ({ params }) => {
  const filterHome = homeOne.filter((item) => item.id == params.homeId);
  // console.log(filterHome);
  // console.log(params);
  const { name, img, detail } = filterHome[0];
  return (
    <div>
      <h1 className="lg:text-4xl max-sm:text-3xl text-center font-bold mt-16">
        {name}
      </h1>
      <div className="flex justify-center gap-5 my-5">
        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-12">
              <Image
                src="https://i.ibb.co/m9sHkTY/author1.jpg"
                width={100}
                height={100}
                alt="author1"
              />
              {/* <img src="https://i.ibb.co/m9sHkTY/author1.jpg" /> */}
            </div>
          </div>
        </div>
        <div>
          <div className="cursor-pointer text-lg font-bold hover:text-red-700 ">
            <Link href="/author">Pranta</Link>
          </div>
          <div>{getCurrentDate()}</div>
        </div>
      </div>
      <div>
        <Image
          src={img}
          width={900}
          height={200}
          priority
          alt="author1"
          className="mx-auto rounded-xl"
        />
      </div>
      <div className="lg:mx-48 max-sm:mx-4 my-8 text-justify">
        <p>
          Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna.
          Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus
          vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit
          euismod.
        </p>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad
          consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi
          repellendus consequatur quibusdam optio expedita praesentium est
          adipisci dolorem ut eius!
        </p>
        <h1 className="text-4xl font-bold">Creative Design</h1>
        <p className="my-8">
          Nam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat.
          Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit.
          Quisque vitae nibh iaculis neque blandit euismod.
        </p>
        <p className="bg-gray-100 italic text-sm my-8 p-12 border-l-4 border-green-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad
          consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi
          repellendus consequatur quibusdam optio expedita praesentium est
          adipisci dolorem ut eius!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad
          consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi
          repellendus consequatur quibusdam optio expedita praesentium est
          adipisci dolorem ut eius!
        </p>
        <div className="flex justify-end gap-5 text-slate-400 my-10">
          <FaFacebookF size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
          <FaYoutube size={20} />
          <FaLinkedin size={20} />
        </div>
      </div>
    </div>
  );
};

export default HomePageOne;
