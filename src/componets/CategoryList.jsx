export default function CategoryList() {
    const categories = [
      { name: 'Столы', image: 'src/assets/catTable.jpeg' },
      { name: 'Кровати', image: 'src/assets/catBed.jpeg' },
      { name: 'Шкафы', image: 'src/assets/catShelf.jpeg' },
    ];
  
    return (
      <div className="py-8">
        <h2 className="text-xl font-bold text-center mb-6">Категории мебели</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((category, index) => (
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
          ))}
        </div>
      </div>
    );
  }
  