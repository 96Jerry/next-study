import Image from "next/image";


export default function List() {
  let name = "park";
  let link = "http://google.com";

  return (
    <div>
      <h4 className="title">abc입니다</h4>
      <div className="food">
        <h4>abc1 $40</h4>
      </div>
      <div className="food">
        <h4>abc2 $40</h4>
      </div>
      <a href={link}>링크</a>
    </div>
  );
}
