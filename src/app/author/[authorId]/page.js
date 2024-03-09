import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

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

const AuthorDetails = ({ params }) => {
  //   console.log(params.authorId);
  const filteredItems = detailsItem.filter(
    (item) => item.id === parseInt(params?.authorId)
  );

  //   console.log(filteredItems);
  const { name, img, details } = filteredItems[0];

  return (
    <div>
      <div className="text-center my-10">
        <Image
          src={img}
          width={150}
          height={200}
          alt="author1"
          className="mx-auto rounded-xl"
        />
        <h1 className="text-xl font-bold my-3">{name}</h1>
        <div className="flex justify-center gap-10 my-10">
          <FaFacebookF size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
        </div>
        <p className="text-2xl max-sm:text-xl lg:mx-40 text-gray-400">
          {details}
        </p>
      </div>
    </div>
  );
};

export default AuthorDetails;
