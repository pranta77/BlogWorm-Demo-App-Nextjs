import Image from "next/image";
import Link from "next/link";
import React from "react";

const detailsItem = [
  {
    id: 1,
    name: "Pranta",
    img: "https://i.ibb.co/m9sHkTY/author1.jpg",
    details:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
  },
  {
    id: 2,
    name: "Dev",
    img: "https://i.ibb.co/xLmQQ7v/author2.jpg",
    details:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
  },
];

const AuthorPage = () => {
  // const { id: id, name: name, img: img, details } = detailsItem;
  // console.log(id, name, img, details);

  return (
    <div>
      <h1 className="w-full text-center text-4xl font-semibold my-10">
        Authors
      </h1>
      <div className="lg:flex lg:justify-center my-10">
        {detailsItem.map((detail) => (
          <Link key={detail.id} href={`/author/${detail.id}`}>
            <div className="card w-96 bg-base-100  ">
              <figure className="px-20 pt-20 ">
                <Image
                  className="rounded-xl "
                  src={detail.img}
                  width={150}
                  height={0}
                  alt="Shoes"
                />
                {/* <img
                  width={150}
                  src={detail.img}
                  alt="Shoes"
                  className="rounded-xl "
                /> */}
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold ">
                  {detail.name}
                </h2>
                <p className=" text-gray-400">{detail.details}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    // <div>
    //   <h1 className="w-full text-center text-4xl font-semibold my-20">
    //     Author
    //   </h1>
    //   <div className="flex justify-center mt-10 gap-10">
    //     <div className="text-center">
    //       <Image
    //         src="https://i.ibb.co/m9sHkTY/author1.jpg"
    //         width={150}
    //         height={200}
    //         alt="author1"
    //         className="mx-auto"
    //       />
    //       <h1 className="text-2xl font-bold my-3">Pranta</h1>
    //       <p className="w-80 text-gray-400">
    //         lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna ali
    //       </p>
    //     </div>

    //     <div className="text-center">
    //       <Image
    //         src="https://i.ibb.co/xLmQQ7v/author2.jpg"
    //         width={150}
    //         height={200}
    //         alt="author1"
    //         className="mx-auto"
    //       />
    //       <h1 className="text-2xl font-bold my-3">
    //         <Link href="/author/1">Dev</Link>
    //       </h1>
    //       <p className="w-80 text-gray-400">
    //         lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna ali
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AuthorPage;
