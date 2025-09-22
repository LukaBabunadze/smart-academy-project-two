const links = [
  { name: "amazon", url: "https://amazon.com", id: 1 },
  { name: "facebook", url: "https://facebook.com", id: 2 },
  { name: "youtube", url: "https://youtube.com", id: 3 },
];

const Navbar = () => {
  return (
    <section>
      {links.map((link) => (
        <button key={link.id}>
          <a href={link.url}>{link.name}</a>
        </button>
      ))}
    </section>
  );
};

export default Navbar;
