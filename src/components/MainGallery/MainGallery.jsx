import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

const mediaItems = [
  
  {
    type: "video",
    width: 1280,
    height: 720,
    poster: "/assets/img/gallery/IMG (1).jpeg",
    sources: [
      {
        src: "/src/videos/IMG_7552.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "video",
    width: 1280,
    height: 720,
    poster: "/assets/img/gallery/IMG (2).jpeg",
    sources: [
      {
        src: "/src/videos/IMG_8048.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "video",
    width: 1280,
    height: 720,
    poster: "/assets/img/gallery/IMG (3).jpeg",
    sources: [
      {
        src: "/src/videos/IMG_8049.mp4",
        type: "video/mp4",
      },
    ],
  },
  
  {
    type: "video",
    width: 1280,
    height: 720,
    poster: "/assets/img/gallery/IMG (4).jpeg",
    sources: [
      {
        src: "/src/videos/IMG_9082.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "video",
    width: 1280,
    height: 720,
    poster: "/assets/img/gallery/IMG (5).jpeg",
    sources: [
      {
        src: "/src/videos/IMG_9084.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "image",
    src: "/assets/img/gallery/gallery_1.jpg",
    thumbnail: "/assets/img/gallery/gallery_1.jpg",
  },
  {
    type: "image",
    src: "/assets/img/gallery/gallery_2.jpg",
    thumbnail: "/assets/img/gallery/gallery_2.jpg",
  },
  {
    type: "image",
    src: "/assets/img/gallery/gallery_3.jpg",
    thumbnail: "/assets/img/gallery/gallery_3.jpg",
  },
  {
    type: "image",
    src: "/assets/img/gallery/gallery_4.jpg",
    thumbnail: "/assets/img/gallery/gallery_4.jpg",
  },
  {
    type: "image",
    src: "/assets/img/gallery/gallery_5.jpg",
    thumbnail: "/assets/img/gallery/gallery_5.jpg",
  },
  {
    type: "image",
    src: "/assets/img/gallery/gallery_6.jpg",
    thumbnail: "/assets/img/gallery/gallery_6.jpg",
  },
  {
    type: "image",
    src: "/assets/img/gallery/gallery_7.jpg",
    thumbnail: "/assets/img/gallery/gallery_7.jpg",
  }
];

export default function MainGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="my-5 container">
      <h2 style={{ textAlign: "center", marginBottom: "30px" , marginTop:'30px' }}>Media Gallery</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {mediaItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
            style={{
              width: "300px",
              height: "180px",
              overflow: "hidden",
              cursor: "pointer",
              borderRadius: "10px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {item.type === "image" ? (
              <img
                src={item.thumbnail || item.src}
                alt="gallery-item"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            ) : (
              <video
                src={item.sources[0].src}
                poster={item.poster}
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={mediaItems}
        plugins={[Video]}
      />
    </div>
  );
}
