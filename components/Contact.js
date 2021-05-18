import Image from "next/image";

function Contact({ name, src }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        layout="fixed"
      />
      <span className="absolute h-3 w-3 rounded-full bg-green-500 bottom-1.5 left-7" />
      <p>{name}</p>
    </div>
  );
}

export default Contact;
