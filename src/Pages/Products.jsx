
import ProductCard from '../Components/ProductCard/ProductCard'
import productimg from "../assets/window.jpg"
export default function Products() {
  return (
    <>
      <div>
        <h1 className="container m-auto font-bold text-2xl my-20">Products</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-col-1 ">
        <div className="col-span-1 m-auto">
          <ProductCard
            name={"Window"}
            description={"This is a very good product."}
            img={productimg}
          />
        </div>
        <div className="col-span-1 m-auto">
          <ProductCard
            name={"Window"}
            description={"This is a very good product."}
            img={productimg}
          />
        </div>
        <div className="col-span-1 m-auto">
          <ProductCard
            name={"Window"}
            description={"This is a very good product."}
            img={productimg}
          />
        </div>
        <div className="col-span-1 m-auto">
          <ProductCard
            name={"Window"}
            description={"This is a very good product."}
            img={productimg}
          />
        </div>
      </div>
    </>
  );
}
