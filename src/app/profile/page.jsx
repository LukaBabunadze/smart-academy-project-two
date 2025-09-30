import Image from "next/image";

const page = async () => {
  const response = await fetch("https://fakestoreapi.com/users/3");
  const user = await response.json();

  return (
    <div>
      <Image src={"/dog.jpg"} alt="dog image" width={120} height={150} />
      <h3>{user.username}</h3>
      <p>{user.phone}</p>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default page;
