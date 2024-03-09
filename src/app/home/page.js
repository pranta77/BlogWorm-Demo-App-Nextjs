import Image from "next/image";
import { getCurrentDate } from "../../../utilis/getCurrentDate";
import Link from "next/link";

const homeOne = [
  {
    id: "1",
    img: "https://i.ibb.co/JRwfn1X/homeimg-1.jpg",
    name: "DIY Paper Diamond Tutorial with HUNGRY HEART",
    detail:
      "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan...",
  },
  {
    id: "2",
    img: "https://i.ibb.co/DDRtXcL/homeimg-2.jpg",
    name: "What you need to know about Photography",
    detail:
      "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan...",
  },
];

const AllHome = () => {
  return (
    <div>
      <div className="lg:mx-40 max-sm:mx-4">
        <div className="flex justify-center lg:mt-20 max-sm:mt-5">
          <Image
            src="https://i.ibb.co/0cKdSr0/home-Image.jpg"
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
                  src="https://i.ibb.co/m9sHkTY/author1.jpg"
                  width={100}
                  height={100}
                  alt="author"
                />
                {/* <img src="https://i.ibb.co/m9sHkTY/author1.jpg" /> */}
              </div>
            </div>
          </div>
          <div>
            <div className="cursor-pointer text-lg font-bold hover:text-red-700">
              <Link href="/author">Pranta</Link>
            </div>
            <div>{getCurrentDate()}</div>
          </div>
        </div>

        <h1 className="text-3xl font-semibold my-4">
          How to make toys from old Olarpaper
        </h1>
        <p className="text-gray-500 mb-20">
          Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna.
          Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus
          vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan...
        </p>
      </div>
      <div className="lg:flex justify-center gap-20 lg:mx-40 max-sm:mx-4">
        {homeOne.map((home) => (
          <div key={home.id}>
            <Image
              src={home.img}
              width={1000}
              height={0}
              alt="homeImage"
              className="rounded-2xl h-60"
            />
            <div>
              <div className="flex justify-start gap-5 my-5">
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
                  <div className="cursor-pointer text-lg font-bold hover:text-green-600">
                    <Link href="/author">Pranta</Link>
                  </div>
                  <div>{getCurrentDate()}</div>
                </div>
              </div>
            </div>
            <Link href={`/home/${home.id}`}>
              <h1 className="text-3xl font-semibold my-4 hover:text-amber-600">
                {home.name}
              </h1>
            </Link>
            <p className="text-gray-500 mb-20 text-justify">{home.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <div className="join gap-10 ">
          <Link href={`/home/`}>
            <button className="join-item btn btn-outline">1</button>
          </Link>
          <Link href="/homeTwo">
            <button className="join-item btn btn-outline">2</button>
          </Link>
          <button className="join-item btn btn-outline">3</button>
        </div>
      </div>
    </div>
  );
};

export default AllHome;
