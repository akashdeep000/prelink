import Modern from "./Modern";
import Classic from "./Classic";

export default function Result({ props }) {
  return (
    <>
      <div className="w-[90%] mt-3 grid md:grid-cols-2 place-items-center md:items-start gap-8 relative">
        <Modern props={props} />
        <Classic props={props} />
      </div>
    </>
  );
}
