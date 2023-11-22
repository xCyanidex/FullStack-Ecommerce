/* eslint-disable react/prop-types */
import  { useState} from "react";

export default function ProductViewModal(props) {
   const [productData, setProductData] = useState(props.productId);
    // useEffect(() => {
      // Fetch data based on productId and update the state
      // Example using fetch:
    //   fetch(`your_api_endpoint/${productId}`)
    //     .then((response) => response.json())
    //     .then((data) => setProductData(data))
    //     .catch((error) => console.error("Error fetching data:", error));
    // }, [productId]);

  return (
    <>
      <dialog  id="my_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{productData}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={props.closeModal}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
