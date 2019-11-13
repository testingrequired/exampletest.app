import { useState, useEffect } from "react";
import Layout from "../layouts/layout";
import ProtectedLayout from "../layouts/protectedLayout";
import PostList from "../components/design/postList";
import { usePostsContext } from "../contexts/postsContext";
import { useAuthContext } from "../contexts/authContext";

export default function UserPage() {
  const { getByUsername } = usePostsContext();
  const { currentUser } = useAuthContext();

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    if (currentUser) setUserPosts(getByUsername(currentUser.username));
  }, [currentUser]);

  return (
    <Layout>
      <ProtectedLayout>
        <div id="userTimeline">
          <h3>Timeline</h3>

          <PostList posts={userPosts} />
        </div>
      </ProtectedLayout>
    </Layout>
  );
}
