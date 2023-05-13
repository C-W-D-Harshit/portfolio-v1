import Link from "next/link";

const SpecCard = ({ one, two, ico }) => {
  return (
    <div className="specCard">
      <div>
        <p>{one}</p>
        <p>{two}</p>
        <Link href="/">
          <p>See Projects</p>
        </Link>
      </div>
      <div>{ico}</div>
    </div>
  );
};

export default SpecCard;
