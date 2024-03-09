import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="https://i.ibb.co/8xkykRQ/sitting-about.jpg"
          width={800}
          height={100}
          alt="Siteing About"
        />
      </div>
      <div>
        <h1 className="w-full text-center text-4xl font-semibold ">
          I’m Pranta Dev, A Teacher And Developer , <br />
          currently at Bookworm
        </h1>
        <div className="flex justify-center gap-10 my-10">
          <FaFacebookF size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
        </div>
        <div className="w-full text-center ">
          <p>
            A Teacher And Developer with over 4 years experience working across
            brand identity, publishing and digital products. Maecenas sit <br />{" "}
            amet purus eget ipsum elementum venenatis. Aenean maximus urna magna
            elementum venenatis, quis rutrum mi semper non <br /> purus eget.
          </p>
          <p className="my-10">
            Purus eget ipsum elementum venenatis. Aenean maximus urna magna
            elementum venenatis, quis rutrum mi semper non purus <br />
            eget ipsum elementum venenatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
