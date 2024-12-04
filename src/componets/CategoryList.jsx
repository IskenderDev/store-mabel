import { NavLink } from "react-router-dom";

export default function CategoryList() {
  const categories = [
    {
      name: "Столы",
      image: "src/assets/catTable.jpeg",
      link: "/catalog/table",
    },
    { name: "Кровати", image: "src/assets/catBed.jpeg", link: "/catalog/bed" },
    {
      name: "Шкафы",
      image: "src/assets/catShelf.jpeg",
      link: "/catalog/wardrobe",
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-xl font-bold text-center mb-6">Категории мебели</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <NavLink to={category.link}>
            <div
              key={index}
              className="relative group border rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-bold">
                  {category.name}
                </span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
