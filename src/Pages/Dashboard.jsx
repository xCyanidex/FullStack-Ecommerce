import CardFour from "../Components/Cards/CardFour";
import CardOne from "../Components/Cards/CardOne";
import CardThree from "../Components/Cards/CardThree";
import CardTwo from "../Components/Cards/CardTwo";


export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne/>
        <CardTwo/>
        <CardThree/>
        <CardFour/>
      </div>
    </>
  );
}
