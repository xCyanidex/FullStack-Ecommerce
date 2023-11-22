
import ProductCard from '../Components/ProductCard/ProductCard'
import productimg from "../assets/window.jpg"
import { useState,useEffect } from 'react';
import ProductViewModal from '../Components/Modals/ProductModals/ProductViewModal';

const productId=2;
export default function Products() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);



  useEffect(() => {
    if (isModalOpen){
      document.getElementById("my_modal").showModal();
    } 
  }, [isModalOpen]);

  function viewModal(id) {
    setSelectedProductId(id);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="container m-auto my-20">
        <h1 className=" font-bold text-2xl ">Products</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-col-1 ">
        <div className="col-span-1 m-auto">
          <ProductCard
            name={"Window"}
            description={"This is a very good product."}
            img={productimg}
            id={productId}
            ProductViewFun={viewModal}
          />
        </div>
        <div className="col-span-1 m-auto">
          <ProductCard
            name={"Window"}
            description={"This is a very good product."}
            img={productimg}
            id={productId}
            ProductViewFun={viewModal}
          />
        </div>
        <div className="col-span-1 m-auto">
          <ProductCard
            name={"Window"}
            description={"This is a very good product."}
            img={productimg}
            id={productId}
            ProductViewFun={viewModal}
          />
        </div>
        <div className="col-span-1 m-auto">
          <ProductCard
            name={"Window"}
            description={"This is a very good product."}
            img={productimg}
            id={productId}
            ProductViewFun={viewModal}
          />
        </div>
      </div>

      {isModalOpen && (
        <ProductViewModal
     
          productId={selectedProductId}
          closeModal={closeModal}
        />
      )}
      {}
    </>
  );
}
