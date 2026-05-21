import React, {
  useEffect,
  useState
} from "react";

import PostCard from "../components/PostCard";

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const demoPosts = [

      {
        id: 1,
        title: "Nature",
        image:
          "https://picsum.photos/300/400"
      },

      {
        id: 2,
        title: "Mountains",
        image:
          "https://picsum.photos/300/500"
      },

      {
        id: 3,
        title: "Forest",
        image:
          "https://picsum.photos/300/450"
      },

      {
        id: 4,
        title: "Ocean",
        image:
          "https://picsum.photos/300/350"
      },

       {
        id: 1,
        title: "Nature",
        image:
          "https://picsum.photos/300/400"
      },

      {
        id: 2,
        title: "Mountains",
        image:
          "https://picsum.photos/300/500"
      },

      {
        id: 3,
        title: "Forest",
        image:
          "https://picsum.photos/300/450"
      },

      {
        id: 4,
        title: "Ocean",
        image:
          "https://picsum.photos/300/350"
      },

       {
        id: 1,
        title: "Nature",
        image:
          "https://picsum.photos/300/400"
      },

      {
        id: 2,
        title: "Mountains",
        image:
          "https://picsum.photos/300/500"
      },

      {
        id: 3,
        title: "Forest",
        image:
          "https://picsum.photos/300/450"
      },

      {
        id: 4,
        title: "Ocean",
        image:
          "https://picsum.photos/300/350"
      }

      
    ];

    setPosts(demoPosts);

  }, []);

  return (

    <div className="masonry">

      {
        posts.map((post) => (

          <PostCard
            key={post.id}
            post={post}
          />

        ))
      }

    </div>
  );
}

export default Home;