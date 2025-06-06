import { useEffect, useState } from "react";
import style from "../Profile.module.css";
import * as Interfaces from "../interfaces/Interfaces";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MapPin } from "lucide-react";

const LikeCourseList = (nowCourse: Interfaces.Course) => {
  const [course, setCourse] = useState<Interfaces.Course | null>(nowCourse);
  const [like, setLike] = useState<boolean>(course?.like || false);

  const LikeIcon = () => {
    return like ? (
      <AiFillHeart color="#E96563" size={30} />
    ) : (
      <AiOutlineHeart size={30} />
    );
  };

  return (
    <div className={style.courseBlock}>
      <div className={style.header}>
        <div className={style.title}>
          "{course?.userName}" 님의{" "}
          <span style={{ color: "var(--color-main)" }}>{course?.title}</span>{" "}
          코스
        </div>
        <div className={style.like}>
          <div>{course?.courseLike}&nbsp;</div>
          <div onClick={() => setLike(!like)}>
            <LikeIcon />
          </div>
        </div>
      </div>
      <div className={style.coursePlaceList}>
        {course?.placeList.map((place, idx) => (
          <div key={place.placeId} className={style.placeBlock}>
            <img
              src={place.imgUrl}
              alt={place.placeName}
              className={style.placeImg}
            />
            <div className={style.placeInfo}>
              <div className={style.idx}>{idx + 1}</div>
              <div className={style.placeName}>{place.placeName}</div>
              <div className={style.address}>
                <MapPin size={14} />
                {place.address.split(" ").slice(0, 2).join(" ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikeCourseList;
